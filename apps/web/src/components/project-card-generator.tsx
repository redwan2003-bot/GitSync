'use client';

import { useState, useEffect, useCallback } from 'react';
import { Plus, Loader2 } from 'lucide-react';
import { H2 } from './typography';

interface Repository {
  id: string;
  name: string;
  fullName: string;
}

interface ProjectCardGeneratorProps {
  onGenerateSuccess: () => void;
}

export function ProjectCardGenerator({ onGenerateSuccess }: ProjectCardGeneratorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [selectedRepo, setSelectedRepo] = useState<string>('');

  const loadRepos = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/GitSync/github-repos');
      const json = await res.json();
      
      if (!res.ok) {
        throw new Error(json.error?.message || 'Failed to fetch repositories');
      }
      
      const repos = json.data?.repositories || [];
      setRepositories(repos);
      if (repos.length > 0) {
        setSelectedRepo(repos[0].id);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch repositories');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isOpen && repositories.length === 0) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      loadRepos();
    }
  }, [isOpen, repositories.length, loadRepos]);

  async function handleGenerate(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedRepo) return;

    setGenerating(true);
    setError(null);

    try {
      const res = await fetch('/api/GitSync/project-cards', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ repositoryId: selectedRepo }),
      });

      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.error?.message || 'Failed to generate card');
      }

      setIsOpen(false);
      onGenerateSuccess();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate card');
    } finally {
      setGenerating(false);
    }
  }

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-4 py-2 bg-signal text-bg rounded-lg font-medium hover:bg-signal/90 transition-colors"
      >
        <Plus size={18} />
        Generate Card
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-bg/80 backdrop-blur-sm p-4">
      <div className="bg-surface border border-border rounded-xl p-6 max-w-md w-full shadow-2xl">
        <H2 className="text-xl mb-4">Generate Project Card</H2>
        
        {loading ? (
          <div className="flex flex-col items-center justify-center py-8 text-muted gap-4">
            <Loader2 className="animate-spin" size={24} />
            <p>Loading your repositories...</p>
          </div>
        ) : (
          <form onSubmit={handleGenerate} className="space-y-4">
            {error && (
              <div className="p-3 bg-danger/10 border border-danger/20 text-danger rounded-lg text-sm">
                {error}
              </div>
            )}
            
            <div className="space-y-2">
              <label htmlFor="repo-select" className="block text-sm font-medium text-text">
                Select a Repository
              </label>
              <select
                id="repo-select"
                value={selectedRepo}
                onChange={(e) => setSelectedRepo(e.target.value)}
                className="w-full bg-surface-soft border border-border rounded-lg px-3 py-2 text-text focus:outline-none focus:border-signal"
                disabled={generating}
              >
                {repositories.length === 0 ? (
                  <option value="">No connected repositories found</option>
                ) : (
                  repositories.map(repo => (
                    <option key={repo.id} value={repo.id}>
                      {repo.fullName}
                    </option>
                  ))
                )}
              </select>
            </div>

            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="flex-1 px-4 py-2 rounded-lg border border-border text-text hover:bg-surface-soft transition-colors"
                disabled={generating}
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={generating || repositories.length === 0 || !selectedRepo}
                className="flex-1 px-4 py-2 rounded-lg bg-signal text-bg font-medium hover:bg-signal/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {generating ? (
                  <>
                    <Loader2 className="animate-spin" size={16} />
                    Generating...
                  </>
                ) : (
                  'Generate'
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
