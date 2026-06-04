import type { Metadata } from 'next';
import { Suspense } from 'react';
import { SignInClient } from './sign-in-client';

export const metadata: Metadata = {
  title: 'Sign In | GitSync',
  description: 'Sign in to GitSync with GitHub.',
};

type SignInPageProps = {
  searchParams: Promise<{
    error?: string | string[];
    callbackUrl?: string | string[];
  }>;
};

function firstParam(value: string | string[] | undefined, fallback = '') {
  return Array.isArray(value) ? value[0] || fallback : value || fallback;
}

export default async function SignInPage({ searchParams }: SignInPageProps) {
  const params = await searchParams;
  const error = firstParam(params.error);
  const callbackUrl = firstParam(params.callbackUrl, '/dashboard');

  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6 text-sm text-slate-400">
          Loading sign in…
        </div>
      }
    >
      <SignInClient error={error} callbackUrl={callbackUrl} />
    </Suspense>
  );
}
