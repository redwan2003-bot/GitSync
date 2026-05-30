'use client';

import { Github, Linkedin, Zap } from 'lucide-react';

const INTEGRATIONS = [
  { name: 'GitHub', icon: Github, connected: true },
  { name: 'LinkedIn', icon: Linkedin, connected: true },
  { name: 'OpenAI', icon: Zap, connected: true },
];

export function IntegrationStatusCard() {
  return (
    <div className="grid grid-cols-3 gap-6">
      {INTEGRATIONS.map((integration) => {
        const Icon = integration.icon;
        return (
          <div key={integration.name} className="flex flex-col items-center gap-3">
            <div className={`p-3 rounded-lg ${integration.connected ? 'bg-signal/10' : 'bg-danger/10'}`}>
              <Icon size={24} className={integration.connected ? 'text-signal' : 'text-danger'} />
            </div>
            <div className="text-center">
              <div className="text-sm font-medium text-text">{integration.name}</div>
              <div className="text-xs text-muted">
                {integration.connected ? 'Connected' : 'Disconnected'}
              </div>
            </div>
            <div className={`w-2 h-2 rounded-full ${integration.connected ? 'bg-signal' : 'bg-danger'}`} />
          </div>
        );
      })}
    </div>
  );
}
