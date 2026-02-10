import { useMemo, useState } from 'react';
import './styles.css';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { layoutOptions, type LayoutMode } from './data/layouts';

function App() {
  const [layout, setLayout] = useState<LayoutMode>('fixed-animated');
  const [collapsed, setCollapsed] = useState(false);

  const shellClass = useMemo(
    () => `app-shell layout-${layout} ${collapsed ? 'sidebar-collapsed' : ''}`,
    [layout, collapsed]
  );

  return (
    <div className={shellClass}>
      <Sidebar collapsed={collapsed} onToggle={() => setCollapsed((p) => !p)} layout={layout} />
      <main className="content">
        <TopBar layout={layout} onSidebarToggle={() => setCollapsed((p) => !p)} />

        <section className="layout-picker card">
          <h2>Layout Modes (React + TypeScript + Plain CSS)</h2>
          <p>All original layout concepts are reimplemented with component state and CSS classes.</p>
          <div className="layout-grid">
            {layoutOptions.map((option) => (
              <button
                key={option.id}
                type="button"
                className={layout === option.id ? 'active' : ''}
                onClick={() => setLayout(option.id)}
              >
                <strong>{option.label}</strong>
                <span>{option.description}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="cards">
          <article className="card">
            <h3>Followers</h3>
            <p className="metric">20,000</p>
          </article>
          <article className="card">
            <h3>Sales</h3>
            <p className="metric">4,235</p>
          </article>
          <article className="card">
            <h3>Products</h3>
            <p className="metric">4,235</p>
          </article>
        </section>

        <section className="card">
          <h2>Home Page</h2>
          <p>
            This project has been modernized from HTML/JQuery pages into a single React + TypeScript codebase
            with reusable components and pure CSS styling.
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
