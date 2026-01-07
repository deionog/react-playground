import React from "react";

export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4">
      {children}
    </div>
  );
}