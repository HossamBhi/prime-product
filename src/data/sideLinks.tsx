export interface NavLink {
  title: string;
  label?: string;
  href: string;
  isBottom?: boolean;
}

export interface SideLink extends NavLink {
  sub?: NavLink[];
}

export const SIDE_NAV_TOP_ITEMS: SideLink[] = [
  { title: "لوحة القيادة", href: "/" },
  { title: "المنتجات", href: "/products", sub: [] },
  { title: "الطلب", href: "/page-2", sub: [] },
  { title: "العميل", href: "/page-3", sub: [] },
  { title: "إدارة التقييمات", href: "/page-4" },
  { title: "الإحالات", href: "/page-5" },
  { title: "الإعدادات", href: "/page-6", sub: [] },
  { title: "نظام الحسابات", href: "/page-7", sub: [], isBottom: true },
  { title: "نظام المخازن", href: "/page-8", sub: [], isBottom: true },
  { title: "منظومة التوصيل", href: "/page-9", sub: [], isBottom: true },
  { title: "الصلاحيات والمستخدمين", href: "/page-10", sub: [], isBottom: true },
];
