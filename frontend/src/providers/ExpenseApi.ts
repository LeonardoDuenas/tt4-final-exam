import axios from "axios";
import { Expense } from "../interfaces/Expense";


const API = axios.create({
    baseURL: import.meta.env.VITE_API_URL});
  
  
  export const getExpenses = async () => {
    try {
      const response = await API.get<Expense[]>("/api/Expense");
      return response.data;
    } catch (error) {
      console.error("Error fetching expense:", error);
      throw error;
    }
  }
  
  export const createExpense = async (expense: Expense) => {
    try {
      const response = await API.post<Expense>("/api/Expense", expense);
      return response.data;
    } catch (error) {
      console.error("Error creating expense:", error);
      throw error;
    }
  }
  
  export const updateExpense = async (expense: Expense) => {
    try {
      const response = await API.put<Expense>(`/api/Expense/${expense.id}`, expense);
      return response.data;
    } catch (error) {
      console.error("Error updating Expense:", error);
      throw error;
    }
  }
  
  export const deleteExpense = async (expenseId: number) => {
    try {
      const response = await API.delete(`/api/Expense/${expenseId}`);
      return response.data;
    } catch (error) {
      console.error("Error deleting expense:", error);
      throw error;
    }
  }
  