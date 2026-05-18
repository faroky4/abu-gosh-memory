"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "الرئيسية" },
  { href: "/#about", label: "عن المدرسة" },
  { href: "/#news", label: "الأخبار" },
  { href: "/#students", label: "الطلاب" },
  { href: "/heritage", label: "حكاية أبو غوش" },
  { href: "/#contact", label: "تواصل" },
];

export default function SchoolNavbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="w-full bg-white border-b border-stone-200/60 sticky top-0 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-4 flex items-center justify-between gap-4">

        {/* Logo — RIGHT in RTL (first child) */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-full bg-amber-700 flex items-center justify-center text-white font-bold text-sm shrink-0">
            م.أ
          </div>
          <div className="leading-tight">
            <p className="text-sm sm:text-base font-bold text-stone-900 leading-none">
              مدرسة أبو غوش الثانوية
            </p>
            <p className="text-xs text-stone-400 mt-0.5">أبو غوش · القدس</p>
          </div>
        </Link>

        {/* Nav links — CENTERED */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium">
          {links.map((l) => {
            const isActive = l.href === "/" && pathname === "/";
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative pb-0.5 transition-colors duration-150 ${
                  isActive
                    ? "text-amber-700 font-semibold"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                {l.label}
                {isActive && (
                  <span className="absolute bottom-0 right-0 left-0 h-0.5 bg-amber-600 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA — LEFT in RTL (last child) */}
        <Link
          href="/portal"
          className="hidden lg:inline-flex items-center px-5 py-2 rounded-lg text-sm font-semibold bg-stone-800 text-white hover:bg-stone-900 transition-colors duration-150 shrink-0"
        >
          البوابة الإلكترونية
        </Link>

        {/* Mobile toggle */}
        <button
          className="lg:hidden w-9 h-9 rounded-lg border border-stone-200 flex items-center justify-center text-stone-600 shrink-0"
          onClick={() => setOpen((v) => !v)}
          aria-label="القائمة"
        >
          <span className="text-base leading-none">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="lg:hidden border-t border-stone-100 bg-white">
          <div className="max-w-7xl mx-auto px-5 py-4 flex flex-col gap-1 text-sm font-medium">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="py-2.5 px-3 rounded-lg text-stone-600 hover:text-stone-900 hover:bg-stone-50 transition-colors duration-150"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/portal"
              className="mt-3 py-2.5 px-3 rounded-lg text-sm font-semibold bg-stone-800 text-white text-center"
              onClick={() => setOpen(false)}
            >
              البوابة الإلكترونية
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
