import React from "react";
import BaseArticle from "~/general/BaseArticle";
import Card from "~/shared-components/card/card";


export default function Library() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <div className="w-[500px] max-w-[100vw] p-4">
            <h1>Component Library</h1>
            <p>
              A collection of reusable UI components for building React
              applications.
            </p>
          </div>
        </header>
        <Card>
            <BaseArticle />
        </Card>
      </div>
    </main>
  );
}
