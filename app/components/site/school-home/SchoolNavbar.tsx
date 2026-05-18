"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import type { Locale, NavDictionary } from "@/lib/i18n";

// Default Arabic links — used when no lang/dict props are provided
const defaultLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/#about", label: "عن المدرسة" },
  { href: "/#news", label: "الأخبار" },
  { href: "/#students", label: "الطلاب" },
  { href: "/heritage", label: "حكاية أبو غوش" },
  { href: "/#contact", label: "تواصل" },
];

interface NavbarProps {
  lang?: Locale;
  dict?: NavDictionary;
}

export default function SchoolNavbar({ lang, dict }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isLangAware = lang !== undefined && dict !== undefined;

  // Build nav links: lang-aware or default Arabic
  const links = isLangAware
    ? [
        { href: `/${lang}`, label: dict.home },
        { href: `/${lang}#about`, label: dict.about },
        { href: `/${lang}#news`, label: dict.news },
        { href: `/${lang}#students`, label: dict.students },
        { href: lang ? `/${lang}/heritage` : "/heritage", label: dict.heritage },
        { href: `/${lang}#contact`, label: dict.contact },
      ]
    : defaultLinks;

  const portalLabel = dict ? dict.portal : "البوابة الإلكترونية";
  const portalHref = lang ? `/${lang}/portal` : "/portal";
  const homeHref = lang ? `/${lang}` : "/";

  // Language toggle — only shown when navbar is lang-aware
  const otherLang: Locale | null =
    lang === "ar" ? "he" : lang === "he" ? "ar" : null;

  // Active detection: strip hash and compare with pathname
  const isActive = (href: string) =>
    href.split("#")[0] === pathname;

  return (
    <header className="w-full bg-white border-b border-stone-200/60 sticky top-0 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-4 flex items-center justify-between gap-4">

        {/* Logo — RIGHT in RTL (first child) */}
        <Link href={homeHref} className="flex items-center gap-3 shrink-0">
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
            const active = isActive(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative pb-0.5 transition-colors duration-150 ${
                  active
                    ? "text-amber-700 font-semibold"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                {l.label}
                {active && (
                  <span className="absolute bottom-0 right-0 left-0 h-0.5 bg-amber-600 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* LEFT side: language switcher + portal CTA */}
        <div className="hidden lg:flex items-center gap-2 shrink-0">

          {/* Language switcher — only shown in lang-aware context */}
          {isLangAware && otherLang && (
            <Link
              href={`/${otherLang}`}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold border border-stone-200 text-stone-500 hover:text-stone-900 hover:border-stone-300 transition-colors duration-150"
              aria-label={otherLang === "he" ? "עברית" : "العربية"}
            >
              {otherLang === "he" ? "ע" : "ع"}
            </Link>
          )}

          {/* Portal CTA */}
          <Link
            href={portalHref}
            className="inline-flex items-center px-5 py-2 rounded-lg text-sm font-semibold bg-stone-800 text-white hover:bg-stone-900 transition-colors duration-150"
          >
            {portalLabel}
          </Link>
        </div>

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
            {isLangAware && otherLang && (
              <Link
                href={`/${otherLang}`}
                className="py-2.5 px-3 rounded-lg text-stone-500 hover:text-stone-900 hover:bg-stone-50 transition-colors duration-150"
                onClick={() => setOpen(false)}
              >
                {otherLang === "he" ? "עברית" : "العربية"}
              </Link>
            )}
            <Link
              href={portalHref}
              className="mt-3 py-2.5 px-3 rounded-lg text-sm font-semibold bg-stone-800 text-white text-center"
              onClick={() => setOpen(false)}
            >
              {portalLabel}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
