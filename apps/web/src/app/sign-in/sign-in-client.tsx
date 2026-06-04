'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { Github, AlertCircle } from 'lucide-react';

const KNOWN_AUTH_ERRORS = ['OAuthSignin', 'OAuthCallback', 'OAuthCreateAccount'];

type SignInClientProps = {
  error?: string;
  callbackUrl: string;
};

export function SignInClient({ error, callbackUrl }: SignInClientProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async () => {
    setIsLoading(true);
    try {
      await signIn('github', { redirectTo: callbackUrl });
    } catch (err) {
      console.error('[SignIn] Error:', err);
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-md rounded-xl border border-slate-800 bg-slate-900 p-8 shadow-xl">
        <h1 className="text-2xl font-bold text-white tracking-tight">
          GitSync
        </h1>
        <p className="mt-2 text-sm text-slate-400">
          Sign in to review drafts and publish GitHub progress to LinkedIn.
        </p>

        {error && (
          <div className="mt-6 flex items-start gap-3 p-3 rounded-lg bg-red-500/10 border border-red-500/30">
            <AlertCircle aria-hidden="true" className="size-5 text-red-500 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-red-200">
              <p className="font-medium">Authentication failed</p>
              <p className="text-xs text-red-300/80 mt-1">
                {error === 'OAuthSignin' && 'Failed to connect to GitHub'}
                {error === 'OAuthCallback' && 'Failed to process GitHub response'}
                {error === 'OAuthCreateAccount' && 'Failed to create account'}
                {!KNOWN_AUTH_ERRORS.includes(error) && error}
              </p>
            </div>
          </div>
        )}

        <button
          type="button"
          onClick={handleSignIn}
          disabled={isLoading}
          className="mt-8 w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-white text-slate-900 font-medium text-sm hover:bg-slate-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <span aria-hidden="true" className="size-5 border-2 border-slate-900 border-t-transparent rounded-full animate-spin" />
              Signing in…
            </>
          ) : (
            <>
              <Github aria-hidden="true" className="size-5" />
              Continue with GitHub
            </>
          )}
        </button>
      </div>
    </div>
  );
}
