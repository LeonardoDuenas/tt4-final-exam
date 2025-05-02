import ExpenseCard from "../components/ExpenseCard";
import { useState, useEffect } from "react";
import { Expense } from "../interfaces/Expense";
import { getExpenses } from "../providers/ExpenseApi";

function ExpenseListPage() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchExpenses = async () => {
    try {
      const response = await getExpenses();
      setExpenses(response);
    } catch (error) {
      console.error("Error fetching Expenses:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  if (loading) {
    return <div>Loading Expenses...</div>;
  }

  return (
    <div>
      <h2 className="mb-4 text-center">Your tasks</h2>
      {expenses.length === 0 ? (
        <div className="text-center py-5">
          <h3>No Expenses available</h3>
        </div>
      ) : (
        <div className="row">
          {expenses.map((expense) => (
            <div className="col-md-4 mb-4" key={expense.id}>
              <ExpenseCard expense={expense} onRefresh={fetchExpenses} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ExpenseListPage;
