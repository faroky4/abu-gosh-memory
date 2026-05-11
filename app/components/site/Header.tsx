"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/heritage#past", label: "أبو غوش زمان" },
  { href: "/heritage#present", label: "أبو غوش اليوم" },
  { href: "/stories", label: "قصص أهل البلد" },
  { href: "/compare", label: "زمان/اليوم" },
  { href: "/heritage#map", label: "الخريطة" },
  { href: "/heritage#future", label: "المستقبل" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b bg-white/80 backdrop-blur sticky top-0 z-20">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/heritage" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-amber-700/90 flex items-center justify-center text-white text-sm font-bold">
            AG
          </div>
          <div className="leading-tight">
            <h1 className="text-lg font-bold">حكاية أبو غوش</h1>
            <p className="text-sm text-slate-500">بين الماضي والحاضر</p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex gap-6 text-base font-semibold">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-amber-700 transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="sm:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 text-slate-700"
          onClick={() => setOpen((v) => !v)}
          aria-label="القائمة"
        >
          <span className="text-xl">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {open && (
        <div className="sm:hidden border-t border-slate-200 bg-white/95">
          <nav className="max-w-5xl mx-auto px-4 py-4 flex flex-col gap-3 text-base font-semibold">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-1 text-slate-700 hover:text-amber-700"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
