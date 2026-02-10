import type { LayoutMode } from '../data/layouts';

interface TopBarProps {
  layout: LayoutMode;
  onSidebarToggle: () => void;
}

export function TopBar({ layout, onSidebarToggle }: TopBarProps) {
  return (
    <header className="topbar">
      <div className="left">
        {layout !== 'top-navigation' && layout !== 'simple' && (
          <button type="button" className="hamburger" onClick={onSidebarToggle}>
            ☰
          </button>
        )}
        <h1>SADA Dashboard</h1>
      </div>
      <div className="admin-pill">
        <span>Agajan Sahatov</span>
        <img src="/inc/img/user1.jpg" alt="Admin" />
      </div>
    </header>
  );
}
