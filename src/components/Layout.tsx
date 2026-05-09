import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-gray-200">
        <nav className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
          <Link to="/" className="text-lg font-semibold text-gray-900 hover:text-gray-700">
            Craftmindship
          </Link>
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <Link to="/work/cadence" className="hover:text-gray-900">Work</Link>
            <Link to="/writing" className="hover:text-gray-900">Writing</Link>
            <Link to="/about" className="hover:text-gray-900">About</Link>
          </div>
        </nav>
      </header>

      <main className="flex-1 max-w-5xl mx-auto w-full">
        <Outlet />
      </main>

      <footer className="border-t border-gray-200">
        <div className="max-w-5xl mx-auto flex items-center justify-center gap-6 px-6 py-6 text-sm text-gray-500">
          <a href="https://github.com/lvltcode" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">GitHub</a>
          <a href="https://linkedin.com/in/lvltcode" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">LinkedIn</a>
          <a href="https://craftmindship.substack.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">Substack</a>
          <a href="mailto:hello@craftmindship.com" className="hover:text-gray-900">Email</a>
        </div>
      </footer>
    </div>
  );
}
