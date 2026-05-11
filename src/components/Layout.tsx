import { useState, useEffect, useRef, useCallback } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Home, Menu, X, Code, Briefcase, BookOpen, Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const navLinks = [
  { to: "/work/cadence", label: "Work" },
  { to: "/analysis", label: "Analysis" },
  { to: "/lab", label: "Lab" },
  { to: "/about", label: "About" },
];

const footerLinks: { href: string; label: string; icon: LucideIcon }[] = [
  { href: "https://github.com/lvltcode", label: "GitHub", icon: Code },
  { href: "https://www.linkedin.com/in/dangtranlevu/", label: "LinkedIn", icon: Briefcase },
  { href: "https://craftmindship.substack.com", label: "Substack", icon: BookOpen },
  { href: "mailto:hello@craftmindship.com", label: "hello@craftmindship.com", icon: Mail },
];

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Close menu on outside tap/click or Escape key
  const handleOutside = useCallback((e: MouseEvent | TouchEvent) => {
    if (
      panelRef.current && !panelRef.current.contains(e.target as Node) &&
      buttonRef.current && !buttonRef.current.contains(e.target as Node)
    ) {
      setMenuOpen(false);
    }
  }, []);

  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setMenuOpen(false);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("touchstart", handleOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen, handleOutside, handleEscape]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        <nav className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Fix 3: 44px tap target on logo */}
          <Link
            to="/"
            className="flex items-center gap-2 min-h-[44px] text-lg font-semibold text-gray-900 hover:text-gray-700 transition-colors"
          >
            <img src="/images/logos/craftmindship-light.png" alt="" className="h-7 w-7 rounded-full" />
            Craftmindship
          </Link>

          {/* Desktop nav */}
          <div className="hidden sm:flex items-center gap-6 text-sm text-gray-600">
            <Link to="/" className="hover:text-gray-900 transition-colors" aria-label="Home">
              <Home size={18} />
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="hover:text-gray-900 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Fix 2: 44px tap target on hamburger */}
          <button
            ref={buttonRef}
            className="sm:hidden min-h-[44px] min-w-[44px] inline-flex items-center justify-center -mr-2 text-gray-600 hover:text-gray-900 transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile dropdown panel */}
        <div
          ref={panelRef}
          className={`sm:hidden overflow-hidden border-b border-gray-200 bg-white transition-[max-height] duration-200 ease-in-out ${menuOpen ? "max-h-80" : "max-h-0 border-b-0"}`}
        >
          <div className="max-w-5xl mx-auto flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="px-6 py-3.5 text-base text-gray-900 hover:bg-gray-50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-5xl mx-auto w-full">
        <Outlet />
      </main>

      <footer className="border-t border-gray-200">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-4 px-6 py-8 sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Craftmindship
          </p>
          {/* Fix 4: 44px tap targets on footer links */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm text-gray-500">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="inline-flex items-center gap-1.5 min-h-[44px] hover:text-gray-900 transition-colors"
              >
                <link.icon size={16} />
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
