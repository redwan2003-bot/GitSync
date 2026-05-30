'use client';

import { H1, H2 } from '@/components/typography';
import { Copy, ExternalLink, Plus, CheckCircle } from 'lucide-react';
import { useState } from 'react';

// Mock project cards
const MOCK_PROJECT_CARDS = [
  {
    id: '1',
    name: 'GitSync v2.0',
    description: 'GitHub to LinkedIn visibility platform',
    date: '2 weeks ago',
  },
  {
    id: '2',
    name: 'Signal Orbit Dashboard',
    description: 'Real-time GitHub activity dashboard',
    date: '1 week ago',
  },
  {
    id: '3',
    name: 'AI Draft Generator',
    description: 'Automated LinkedIn content creation',
    date: '3 days ago',
  },
];

export default function ProjectCardsPage() {
  const [selectedCard, setSelectedCard] = useState(MOCK_PROJECT_CARDS[0]);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (field: string, value: string) => {
    navigator.clipboard.writeText(value);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

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
              <button className="p-2 rounded-lg hover:bg-surface-soft transition-colors">
                <Plus size={18} className="text-signal" />
              </button>
            </div>

            {MOCK_PROJECT_CARDS.length > 0 ? (
              <ul className="space-y-2">
                {MOCK_PROJECT_CARDS.map((card) => (
                  <li key={card.id}>
                    <button
                      onClick={() => setSelectedCard(card)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedCard.id === card.id
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
                <div className="text-3xl mb-2">📋</div>
                <div className="text-sm font-medium text-muted">No project cards</div>
              </div>
            )}
          </div>
        </div>

        {/* Right Panel: Preview + Copy Actions */}
        <div className="lg:col-span-2">
          <div className="bg-surface border border-border rounded-lg p-6 space-y-6">
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
                      className="flex-1 bg-surface border border-border rounded px-3 py-2 text-sm text-text placeholder-muted/50 focus:outline-none focus:border-signal"
                    />
                    <button className="p-2 rounded-lg hover:bg-surface transition-colors">
                      <Copy size={18} className="text-muted hover:text-text" />
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
              <button className="flex-1 px-4 py-2 rounded-lg bg-blue-600 text-white font-medium text-sm hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                <ExternalLink size={16} />
                Open LinkedIn
              </button>
              <button className="flex-1 px-4 py-2 rounded-lg border border-signal text-signal font-medium text-sm hover:bg-signal/5 transition-colors">
                Save Draft
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
