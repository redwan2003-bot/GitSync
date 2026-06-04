import React from "react";

export default function DashboardTopBar({ title }: { title: string }) {
  return (
    <header className="flex items-center justify-between px-4 py-2 bg-primary/5 border-b border-primary/20">
      <h1 className="font-heading text-lg text-foreground">{title}</h1>
      <div className="flex items-center gap-2">
        {/* Placeholder for user avatar or notifications */}
        <button type="button" className="p-2 rounded-full hover:bg-primary/20 transition-colors" aria-label="Profile">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="size-6 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A10 10 0 0112 2a10 10 0 016.879 15.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
      </div>
    </header>
  );
}
