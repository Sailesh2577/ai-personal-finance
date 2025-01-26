import { configureStore } from "@reduxjs/toolkit";
import portfolioReducer from "@/store/portfolioSlice";
import expenseReducer from "@/store/expenseSlice";

export const store = configureStore({
  reducer: {
    portfolio: portfolioReducer,
    expense: expenseReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
