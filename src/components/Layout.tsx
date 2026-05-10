import { Link, Outlet } from "react-router-dom";
import { Code, Briefcase, BookOpen, Mail } from "lucide-react";
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
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        <nav className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
          <Link
            to="/"
            className="flex items-center gap-2 text-lg font-semibold text-gray-900 hover:text-gray-700 transition-colors"
          >
            <img src="/images/logos/craftmindship-light.png" alt="" className="h-7 w-7 rounded-full" />
            Craftmindship
          </Link>
          <div className="flex items-center gap-4 sm:gap-6 text-sm text-gray-600">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="hover:text-gray-900 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 transition-colors"
            >
              CV
            </a>
          </div>
        </nav>
      </header>

      <main className="flex-1 max-w-5xl mx-auto w-full">
        <Outlet />
      </main>

      <footer className="border-t border-gray-200">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-4 px-6 py-8 sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Craftmindship
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm text-gray-500">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="inline-flex items-center gap-1.5 hover:text-gray-900 transition-colors"
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
