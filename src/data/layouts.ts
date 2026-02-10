export type LayoutMode =
  | 'content-overlay'
  | 'fixed-partially-collapsing'
  | 'animated'
  | 'fixed'
  | 'fixed-animated'
  | 'simple'
  | 'top-navigation';

export interface LayoutOption {
  id: LayoutMode;
  label: string;
  description: string;
}

export const layoutOptions: LayoutOption[] = [
  { id: 'content-overlay', label: 'Content Overlay', description: 'Sidebar overlays content.' },
  { id: 'fixed-partially-collapsing', label: 'Fixed Partially Collapsing', description: 'Fixed sidebar that compacts to icons.' },
  { id: 'animated', label: 'Animated', description: 'Animated transitions for panel expansion.' },
  { id: 'fixed', label: 'Fixed', description: 'Always-visible fixed sidebar layout.' },
  { id: 'fixed-animated', label: 'Fixed Animated', description: 'Fixed shell with motion-based sidebar.' },
  { id: 'simple', label: 'Simple', description: 'Minimal single-column dashboard mode.' },
  { id: 'top-navigation', label: 'Top Navigation', description: 'Horizontal navigation with no sidebar.' }
];
