"use client";

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function Navigation() {
  return (
    <nav className="border-b-3 border-current">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-mono text-2xl font-bold uppercase tracking-widest transition-opacity hover:opacity-70"
        >
          PRESJA
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="/artysta"
            className="font-mono text-sm uppercase tracking-widest transition-opacity hover:opacity-70"
          >
            ARTYSTA
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
