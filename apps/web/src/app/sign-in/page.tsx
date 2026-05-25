import { signIn } from "@/auth";
import { Github } from "lucide-react";

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-md rounded-xl border border-slate-800 bg-slate-900 p-8 shadow-xl">
        <h1 className="text-2xl font-bold text-white tracking-tight">
          RepoSignal
        </h1>
        <p className="mt-2 text-sm text-slate-400">
          Sign in to review drafts and publish GitHub progress to LinkedIn.
        </p>
        <form
          className="mt-8"
          action={async () => {
            "use server";
            await signIn("github", { redirectTo: "/dashboard" });
          }}
        >
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-white text-slate-900 font-medium text-sm hover:bg-slate-100 transition-colors"
          >
            <Github className="w-5 h-5" />
            Continue with GitHub
          </button>
        </form>
      </div>
    </div>
  );
}
