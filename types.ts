

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  isButton?: boolean;
  // Add optional icon property
  icon?: React.ReactNode;
}

export interface CardData {
  id: string;
  image?: string;
  title: string;
  description: string;
  linkText?: string;
  linkHref?: string;
  category?: string;
  date?: string;
}

export interface StatItemData {
  value: string;
  label: string;
}

export interface ServiceHighlightItem {
  id: string;
  title: string;
  icon?: React.ReactNode; // For potential icons
  color: string; // e.g. 'terracon-green', 'terracon-blue'
}