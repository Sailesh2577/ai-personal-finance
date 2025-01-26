"use client";

import PortfolioSummary from "@/components/portfolio/PortfolioSummary";
import ExpenseTracker from "@/components/expenses/ExpenseTracker";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">
          Financial Dashboard
        </h1>

        <div className="grid grid-cols-1 gap-6">
          <PortfolioSummary />
          <ExpenseTracker />
        </div>
      </div>
    </main>
  );
}
