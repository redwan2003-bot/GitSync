'use client';

import { H1, H2 } from '@/components/typography';
import { Copy, ExternalLink, Plus, CheckCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

interface ProjectCard {
  id: string;
  name: string;
  description: string;
  url?: string;
  date: string;
}

export default function ProjectCardsPage() {
  const [cards, setCards] = useState<ProjectCard[]>([]);
  const [selectedCard, setSelectedCard] = useState<ProjectCard | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  useEffect(() => {
    async function loadCards() {
      try {
        const res = await fetch('/api/GitSync/project-cards');
        
        if (!res.ok) throw new Error('Failed to fetch project cards');
        
        const data = await res.json();
        const projectCards = Array.isArray(data.cards) ? data.cards : [];
        
        setCards(projectCards);
        if (projectCards.length > 0) {
          setSelectedCard(projectCards[0]);
        }
      } catch (err) {
        // Backend endpoint doesn't exist yet or failed - show empty state gracefully
        console.error('Failed to load project cards:', err);
        setCards([]);
      } finally {
        setLoading(false);
      }
    }

    loadCards();
  }, []);

  const handleCopy = (field: string, value: string) => {
    navigator.clipboard.writeText(value);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleOpenLinkedin = () => {
    window.open('https://linkedin.com/me', '_blank');
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <H1>Project Cards</H1>
        <div className="animate-pulse space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-20 bg-surface-soft rounded-lg" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <H1>Project Cards</H1>
        <p className="text-sm text-muted mt-2">
          Manage LinkedIn project cards. Updates must be made directly on LinkedIn.
        </p>
      </div>

      {/* Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Panel: Project Card List */}
        <div className="lg:col-span-1">
          <div className="bg-surface border border-border rounded-lg p-4 space-y-3">
            <div className="flex items-center justify-between mb-4">
              <H2 className="text-lg">Your Cards</H2>
              <button
                disabled
                className="p-2 rounded-lg hover:bg-surface-soft transition-colors disabled:opacity-50"
                title="Coming soon"
              >
                <Plus size={18} className="text-signal" />
              </button>
            </div>

            {cards.length > 0 ? (
              <ul className="space-y-2">
                {cards.map((card) => (
                  <li key={card.id}>
                    <button
                      onClick={() => setSelectedCard(card)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedCard?.id === card.id
                          ? 'bg-signal/10 border border-signal/20'
                          : 'hover:bg-surface-soft'
                      }`}
                    >
                      <div className="text-sm font-medium text-text">{card.name}</div>
                      <div className="text-xs text-muted">{card.date}</div>
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-center py-8">
                <div className="text-sm font-medium text-muted mb-2">No project cards yet</div>
                <p className="text-xs text-muted">Create your first project card on LinkedIn</p>
              </div>
            )}
          </div>
        </div>

        {/* Right Panel: Preview + Copy Actions */}
        <div className="lg:col-span-2">
          <div className="bg-surface border border-border rounded-lg p-6 space-y-6">
            {selectedCard ? (
              <>
                <div>
                  <H2 className="text-lg mb-4">Preview & Edit</H2>

                  {/* LinkedIn Project Card Preview */}
                  <div className="bg-surface-soft rounded-lg border border-border p-6 space-y-4 mb-6">
                    {/* Card Title */}
                    <div>
                      <div className="text-xs text-muted uppercase font-medium mb-2">Title</div>
                      <div className="flex items-center justify-between gap-3">
                        <input
                          type="text"
                          value={selectedCard.name}
                          readOnly
                          className="flex-1 bg-surface border border-border rounded px-3 py-2 text-sm text-text focus:outline-none focus:border-signal"
                        />
                        <button
                          onClick={() => handleCopy('title', selectedCard.name)}
                          className="p-2 rounded-lg hover:bg-surface transition-colors"
                        >
                          {copiedField === 'title' ? (
                            <CheckCircle size={18} className="text-signal" />
                          ) : (
                            <Copy size={18} className="text-muted hover:text-text" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Card Description */}
                    <div>
                      <div className="text-xs text-muted uppercase font-medium mb-2">Description</div>
                      <div className="flex items-start gap-3">
                        <textarea
                          value={selectedCard.description}
                          readOnly
                          className="flex-1 bg-surface border border-border rounded px-3 py-2 text-sm text-text font-sans resize-none h-24 focus:outline-none focus:border-signal"
                        />
                        <button
                          onClick={() => handleCopy('description', selectedCard.description)}
                          className="p-2 rounded-lg hover:bg-surface transition-colors mt-2"
                        >
                          {copiedField === 'description' ? (
                            <CheckCircle size={18} className="text-signal" />
                          ) : (
                            <Copy size={18} className="text-muted hover:text-text" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Project URL */}
                    <div>
                      <div className="text-xs text-muted uppercase font-medium mb-2">Project URL</div>
                      <div className="flex items-center justify-between gap-3">
                        <input
                          type="url"
                          placeholder="https://example.com"
                          defaultValue={selectedCard.url || ''}
                          readOnly
                          className="flex-1 bg-surface border border-border rounded px-3 py-2 text-sm text-text placeholder-muted/50 focus:outline-none focus:border-signal"
                        />
                        <button
                          onClick={() => handleCopy('url', selectedCard.url || '')}
                          className="p-2 rounded-lg hover:bg-surface transition-colors"
                        >
                          {copiedField === 'url' ? (
                            <CheckCircle size={18} className="text-signal" />
                          ) : (
                            <Copy size={18} className="text-muted hover:text-text" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Guidance Text */}
                  <div className="bg-surface-soft/50 border border-border rounded-lg p-4 space-y-2">
                    <h3 className="text-sm font-medium text-text">How to Update on LinkedIn</h3>
                    <ul className="text-xs text-muted space-y-1 list-disc list-inside">
                      <li>Go to your LinkedIn profile</li>
                      <li>Find the project card section</li>
                      <li>Click edit on the desired card</li>
                      <li>Paste the content from above</li>
                      <li>Save and publish</li>
                    </ul>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t border-border">
                  <button
                    onClick={handleOpenLinkedin}
                    className="flex-1 px-4 py-2 rounded-lg bg-linkedin text-white font-medium text-sm hover:bg-linkedin/90 transition-colors flex items-center justify-center gap-2"
                  >
                    <ExternalLink size={16} />
                    Open LinkedIn
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <div className="text-4xl mb-4">📋</div>
                <H2 className="text-lg mb-2">No Project Cards</H2>
                <p className="text-sm text-muted mb-6">
                  Create your first project card on LinkedIn to manage it here.
                </p>
                <button
                  onClick={handleOpenLinkedin}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-linkedin text-white font-medium text-sm hover:bg-linkedin/90 transition-colors"
                >
                  <ExternalLink size={16} />
                  Go to LinkedIn
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
