import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Portfolio, Investment } from "@/types";

interface PortfolioState {
  portfolios: Portfolio[];
  loading: boolean;
  error: string | null;
}

const initialState: PortfolioState = {
  portfolios: [],
  loading: false,
  error: null,
};

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    setPortfolios: (state, action: PayloadAction<Portfolio[]>) => {
      state.portfolios = action.payload;
    },
    addInvestment: (
      state,
      action: PayloadAction<{ portfolioId: string; investment: Investment }>
    ) => {
      const portfolio = state.portfolios.find(
        (p) => p.id === action.payload.portfolioId
      );
      if (portfolio) {
        portfolio.investments.push(action.payload.investment);
      }
    },
    updateInvestment: (
      state,
      action: PayloadAction<{
        portfolioId: string;
        investmentId: string;
        updates: Partial<Investment>;
      }>
    ) => {
      const portfolio = state.portfolios.find(
        (p) => p.id === action.payload.portfolioId
      );
      if (portfolio) {
        const investment = portfolio.investments.find(
          (i) => i.id === action.payload.investmentId
        );
        if (investment) {
          Object.assign(investment, action.payload.updates);
        }
      }
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
  setPortfolios,
  addInvestment,
  updateInvestment,
  setLoading,
  setError,
} = portfolioSlice.actions;

export default portfolioSlice.reducer;
