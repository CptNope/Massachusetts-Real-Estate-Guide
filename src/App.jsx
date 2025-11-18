import React, { useState } from 'react';
import { sections } from './content';

export default function App() {
  const [activeId, setActiveId] = useState(sections[0].id);
  const activeSection = sections.find((s) => s.id === activeId);

  return (
    <div className="app-root">
      <header className="app-header">
        <h1>Massachusetts Real Estate Negotiation & Brokerage Guide (2025)</h1>
        <p className="app-subtitle">
          Contracts · Law Changes · Commissions · Broker Relationships · Exam Prep · Investor Strategy
        </p>
      </header>

      <div className="app-layout">
        <nav className="sidebar">
          <h2 className="sidebar-title">Sections</h2>
          <ul className="nav-list">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  className={section.id === activeId ? 'nav-button nav-button-active' : 'nav-button'}
                  onClick={() => setActiveId(section.id)}
                >
                  {section.icon && <span className="nav-icon">{section.icon}</span>}
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <main className="content">
          <article className="card">
            <h2 className="content-title">{activeSection.title}</h2>
            {activeSection.subtitle && (
              <p className="content-subtitle">{activeSection.subtitle}</p>
            )}
            <div className="content-body">{activeSection.body}</div>
          </article>
        </main>
      </div>

      <footer className="app-footer">
        <p>
          Study / reference tool – not legal advice. For specific transactions, consult a
          Massachusetts real-estate attorney, your broker, or instructor.
        </p>
      </footer>
    </div>
  );
}
