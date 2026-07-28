export interface NavLink {
  label: string;
  href: string;
}

const navigation: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Watch", href: "/watch" },
  { label: "Characters", href: "/characters" },
  { label: "Songs", href: "/songs" },
  { label: "Activities", href: "/activities" },
  { label: "Parents", href: "/parents" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default navigation;
