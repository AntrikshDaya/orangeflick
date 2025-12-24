import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b border-border-subtle bg-bg-primary/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-text-primary"
        >
          <span className="text-accent-primary">Orange</span>Flick
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6">
          <Link
            href="/discover"
            className="text-sm font-medium text-text-secondary hover:text-text-primary transition"
          >
            Discover
          </Link>
        </nav>
      </div>
    </header>
  );
}
