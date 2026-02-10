import type { LayoutMode } from '../data/layouts';

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
  layout: LayoutMode;
}

const menuItems = ['Home', 'Dashboard', 'Widgets', 'Charts', 'Mailboxes', 'Elements', 'Forms', 'Tables'];

export function Sidebar({ collapsed, onToggle, layout }: SidebarProps) {
  if (layout === 'top-navigation' || layout === 'simple') {
    return null;
  }

  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="brand">
        <img src="/inc/m_icons/icon.svg" alt="SADA icon" />
        {!collapsed && <span>SADA</span>}
      </div>
      <div className="profile">
        <img src="/inc/img/user1.jpg" alt="Admin profile" />
        {!collapsed && (
          <div>
            <strong>Agajan Sahatov</strong>
            <p>Online</p>
          </div>
        )}
      </div>
      <nav>
        {menuItems.map((item) => (
          <button key={item} className="menu-item" type="button">
            <span className="dot" />
            {!collapsed && item}
          </button>
        ))}
      </nav>
      <button type="button" className="sidebar-toggle" onClick={onToggle}>
        {collapsed ? 'Expand' : 'Collapse'}
      </button>
    </aside>
  );
}
