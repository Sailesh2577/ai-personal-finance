"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";

const PortfolioChart = dynamic(() => import("./PortfolioChart"), {
  ssr: false,
});

const PortfolioSummary = () => {
  // Mock data for MVP
  const portfolioData = [
    { date: "2024-01", value: 10000 },
    { date: "2024-02", value: 11200 },
    { date: "2024-03", value: 10800 },
    { date: "2024-04", value: 12400 },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Portfolio Summary
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="p-4 bg-blue-50 rounded-lg">
          <h3 className="text-sm text-gray-600">Total Value</h3>
          <p className="text-2xl font-bold text-blue-600">$12,400</p>
        </div>
        <div className="p-4 bg-green-50 rounded-lg">
          <h3 className="text-sm text-gray-600">Total Gain/Loss</h3>
          <p className="text-2xl font-bold text-green-600">+$2,400</p>
        </div>
        <div className="p-4 bg-purple-50 rounded-lg">
          <h3 className="text-sm text-gray-600">Daily Change</h3>
          <p className="text-2xl font-bold text-purple-600">+1.2%</p>
        </div>
      </div>

      <Suspense
        fallback={
          <div className="h-[400px] flex items-center justify-center">
            Loading chart...
          </div>
        }
      >
        <PortfolioChart data={portfolioData} />
      </Suspense>
    </div>
  );
};

export default PortfolioSummary;
