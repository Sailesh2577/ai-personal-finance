"use client";

import React, { useState } from "react";
import { PlusIcon } from "lucide-react";

const ExpenseTracker = () => {
  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddExpense = (e: React.FormEvent) => {
    e.preventDefault();
    setShowAddForm(false);
  };

  // Mock data for MVP
  const expenses = [
    {
      id: "1",
      description: "Groceries",
      amount: 150,
      category: "Food",
      date: "2024-01-25",
    },
    {
      id: "2",
      description: "Internet Bill",
      amount: 60,
      category: "Utilities",
      date: "2024-01-24",
    },
    {
      id: "3",
      description: "Gas",
      amount: 45,
      category: "Transportation",
      date: "2024-01-23",
    },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Expenses</h2>
        <button
          onClick={() => setShowAddForm(true)}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <PlusIcon className="w-4 h-4 mr-2" />
          Add Expense
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="pb-2 text-left font-semibold text-gray-800">
                Date
              </th>
              <th className="pb-2 text-left font-semibold text-gray-800">
                Description
              </th>
              <th className="pb-2 text-left font-semibold text-gray-800">
                Category
              </th>
              <th className="pb-2 text-right font-semibold text-gray-800">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr
                key={expense.id}
                className="border-b border-gray-100 hover:bg-gray-50"
              >
                <td className="py-3 text-gray-700">{expense.date}</td>
                <td className="py-3 text-gray-700">{expense.description}</td>
                <td className="py-3">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {expense.category}
                  </span>
                </td>
                <td className="py-3 text-right text-gray-700">
                  ${expense.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showAddForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h3 className="text-xl font-bold mb-4 text-gray-800">
              Add New Expense
            </h3>
            <form onSubmit={handleAddExpense}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <input
                    type="text"
                    className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Amount
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <select
                    className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    required
                  >
                    <option value="Food">Food</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Utilities">Utilities</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
              <div className="mt-6 flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
                >
                  Add Expense
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpenseTracker;
