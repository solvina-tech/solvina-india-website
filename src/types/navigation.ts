export type MenuItem = {
  href: string;
  title: string;
  description?: string;
  icon?: React.ElementType;
  children?: MenuItem[];
  badge?: string;
};

export type MegaMenuData = {
  label: string;
  href: string;
  icon: React.ElementType;
  description: string;
  items: MenuItem[];
  feature?: {
    eyebrow: string;
    title: string;
    description: string;
    href: string;
    cta: string;
  };
};