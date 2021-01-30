import Link from 'next/link';

export default function Nav({ children }) {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50" aria-label="Main Navigation">
      <div className="flex container mx-auto py-4">
        <Link href="/">
          <a>&larr; Back To CSS Workshop</a>
        </Link>
        <div className="ml-auto">{children}</div>
      </div>
    </nav>
  );
}
