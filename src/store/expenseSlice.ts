import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Expense } from "@/types";

interface ExpenseState {
  expenses: Expense[];
  loading: boolean;
  error: string | null;
}

const initialState: ExpenseState = {
  expenses: [],
  loading: false,
  error: null,
};

const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    setExpenses: (state, action: PayloadAction<Expense[]>) => {
      state.expenses = action.payload;
    },
    addExpense: (state, action: PayloadAction<Expense>) => {
      state.expenses.push(action.payload);
    },
    updateExpense: (
      state,
      action: PayloadAction<{ id: string; updates: Partial<Expense> }>
    ) => {
      const expense = state.expenses.find((e) => e.id === action.payload.id);
      if (expense) {
        Object.assign(expense, action.payload.updates);
      }
    },
    deleteExpense: (state, action: PayloadAction<string>) => {
      state.expenses = state.expenses.filter((e) => e.id !== action.payload);
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const {
  setExpenses,
  addExpense,
  updateExpense,
  deleteExpense,
  setLoading,
  setError,
} = expenseSlice.actions;

export default expenseSlice.reducer;
