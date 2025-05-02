import { Expense } from "../interfaces/Expense";
import { useState } from "react";
import { deleteExpense, updateExpense } from "../providers/ExpenseApi";

interface ExpenseCardProps {
  expense: Expense;
  onRefresh: () => void;
}

function ExpenseCard({ expense, onRefresh }: ExpenseCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(
    expense.description
  );
  const [editedAmount, setEditedAmount] = useState(expense.amount);
  const [editedCategory, setEditedCategory] = useState(expense.category);

  const handleDelete = async () => {
    try {
      await deleteExpense(expense.id);
      onRefresh(); // Refresh the task list after deletion
    } catch (error) {
      console.error("Error deleting expense:", error);
    }
  };

  const handleEdit = async () => {
    try {
      const updatedExpense = {
        ...expense,
        description: editedDescription,
        amount: editedAmount,
        category: editedCategory,
      };
      await updateExpense(updatedExpense);
      setIsEditing(false); // Exit editing mode after saving
      onRefresh(); // Refresh the task list after updating
    } catch (error) {
      console.error("Error updating expense:", error);
    }
  };

  return (
    <div className="card">
      <h3 className={"card-header bg-success"}>{expense.description}</h3>
      <div className="card-body">
        {isEditing ? (
          <div>
            <input
              type="text"
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
              placeholder="Edit Description"
            />
            <input
              type="number"
              value={editedAmount}
              onChange={(e) => setEditedAmount(parseFloat(e.target.value))}
              placeholder="Edit Description"
            />
            <textarea
              value={editedCategory}
              onChange={(e) => setEditedCategory(e.target.value)}
              placeholder="Edit category"
            ></textarea>
            <button className="btn btn-primary" onClick={handleEdit}>
              Save
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </div>
        ) : (
          <>
            <h5 className="card-title">{expense.category}</h5>
            <h5 className="card-description">{expense.amount}</h5>
            <button
              className="btn btn-primary"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
            <button className="btn btn-danger" onClick={handleDelete}>
              Delete
            </button>
            <div className="card-footer text-muted">
              Created At: {new Date(expense.date).toLocaleString()}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ExpenseCard;
