"use client";

import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";

export function UserMenu({ email }: { email?: string | null }) {
  return (
    <div className="flex items-center gap-3">
      {email ? (
        <span className="text-xs text-slate-500 hidden sm:inline">{email}</span>
      ) : null}
      <button
        type="button"
        onClick={() => signOut({ callbackUrl: "/" })}
        className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-white px-3 py-1.5 rounded-md hover:bg-slate-800 transition-colors"
      >
        <LogOut aria-hidden="true" className="size-4" />
        Sign out
      </button>
    </div>
  );
}
