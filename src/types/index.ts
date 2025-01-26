// Portfolio Types
export interface Investment {
  id: string;
  symbol: string;
  shares: number;
  purchasePrice: number;
  currentPrice: number;
  purchaseDate: string;
}

export interface Portfolio {
  id: string;
  name: string;
  investments: Investment[];
  totalValue: number;
  totalGainLoss: number;
}

// Expense Types
export interface Expense {
  id: string;
  amount: number;
  category: string;
  date: string;
  description: string;
}

export interface Budget {
  id: string;
  category: string;
  limit: number;
  spent: number;
  period: "monthly" | "yearly";
}

// User Types
export interface User {
  id: string;
  email: string;
  name: string;
  portfolios: Portfolio[];
  expenses: Expense[];
  budgets: Budget[];
}
