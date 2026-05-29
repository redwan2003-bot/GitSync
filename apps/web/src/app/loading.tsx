import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center">
      <Loader2 className="w-8 h-8 animate-spin text-slate-500 mb-4" />
      <p className="text-slate-400 font-medium">Loading GitSync...</p>
    </div>
  );
}
