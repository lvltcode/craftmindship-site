import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";

export default function NotFound() {
  usePageMeta("Page Not Found");

  return (
    <div className="px-6 py-24 text-center sm:py-32">
      <p className="text-sm font-medium tracking-wide text-gray-400 uppercase">404</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-4 text-gray-600">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
      >
        Back to home
      </Link>
    </div>
  );
}
