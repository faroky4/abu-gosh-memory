"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "الرئيسية" },
  { href: "#about", label: "عن المدرسة" },
  { href: "#news", label: "الأخبار" },
  { href: "#students", label: "الطلاب" },
  { href: "/heritage", label: "حكاية أبو غوش" },
  { href: "#contact", label: "تواصل" },
];

export default function SchoolNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-stone-900 text-white sticky top-0 z-30 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-full bg-amber-700 flex items-center justify-center text-white font-bold text-sm">
            م.أ
          </div>
          <div className="leading-tight">
            <p className="text-sm sm:text-base font-bold leading-none">
              مدرسة أبو غوش الثانوية
            </p>
            <p className="text-xs text-stone-400 mt-0.5">أبو غوش </p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex gap-5 text-sm font-semibold">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-stone-300 hover:text-amber-400 transition-colors duration-150"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="sm:hidden w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center text-stone-300 shrink-0"
          onClick={() => setOpen((v) => !v)}
          aria-label="القائمة"
        >
          <span className="text-xl leading-none">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="sm:hidden border-t border-stone-800 bg-stone-900/95">
          <nav className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-3 text-sm font-semibold">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="py-1.5 border-b border-stone-800 text-stone-300 hover:text-amber-400 transition-colors duration-150"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
