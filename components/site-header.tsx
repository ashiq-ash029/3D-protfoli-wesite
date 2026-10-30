"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";


const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/education", label: "Education" },
  { href: "/projects", label: "Projects" },
  { href: "/creative-works", label: "Creative Works" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];


export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <Link
        className="logo"
        href="/"
        aria-label="Muhammad Ashiq S — Home"
        onClick={() => setMenuOpen(false)}
      >
        ASHIQ<span>.</span>
      </Link>

      <button
        className="menu-toggle"
        type="button"
        onClick={() => setMenuOpen((open) => !open)}
        aria-controls="primary-navigation"
        aria-expanded={menuOpen}
      >
        {menuOpen ? "CLOSE −" : "MENU +"}
      </button>

      <nav
        className={`nav-links${menuOpen ? " nav-open" : ""}`}
        id="primary-navigation"
        aria-label="Main navigation"
      >
        {navigation.map((item) => (
          <Link
            href={item.href}
            key={item.href}
            aria-current={pathname === item.href ? "page" : undefined}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
