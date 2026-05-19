"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface HeaderDict {
  logoTitle: string;
  logoSubtitle: string;
  menuLabel: string;
  links: {
    past: string;
    present: string;
    stories: string;
    compare: string;
    map: string;
    future: string;
  };
}

const defaultDict: HeaderDict = {
  logoTitle: "حكاية أبو غوش",
  logoSubtitle: "بين الماضي والحاضر",
  menuLabel: "القائمة",
  links: {
    past: "أبو غوش زمان",
    present: "أبو غوش اليوم",
    stories: "قصص أهل البلد",
    compare: "زمان/اليوم",
    map: "الخريطة",
    future: "المستقبل",
  },
};

export default function Header({
  dict = defaultDict,
  basePath = "/heritage",
  lang,
}: {
  dict?: HeaderDict;
  basePath?: string;
  lang?: string;
}) {
  const [open, setOpen] = useState(false);

  const links = [
    { href: `${basePath}#past`,    label: dict.links.past },
    { href: `${basePath}#present`, label: dict.links.present },
    { href: "/stories",            label: dict.links.stories },
    { href: "/compare",            label: dict.links.compare },
    { href: `${basePath}#map`,     label: dict.links.map },
    { href: `${basePath}#future`,  label: dict.links.future },
  ];

  // Language switcher: Hebrew → Arabic, everything else → Hebrew
  const switcherHref  = lang === "he" ? "/ar/heritage" : "/he/heritage";
  const switcherLabel = lang === "he" ? "ع" : "ע";
  const switcherAriaLabel = lang === "he" ? "العربية" : "עברית";

  return (
    <header className="w-full border-b bg-white/80 backdrop-blur sticky top-0 z-20">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-4">

        {/* Logo */}
        <Link href={basePath} className="flex items-center gap-2">
          <div className="relative h-9 w-24 shrink-0">
            <Image
              src="/images/branding/school-logo.png"
              alt="شعار مدرسة أبو غوش الثانوية"
              fill
              sizes="96px"
              className="object-contain"
              priority
            />
          </div>
          <div className="leading-tight">
            <h1 className="text-lg font-bold">{dict.logoTitle}</h1>
            <p className="text-sm text-slate-500">{dict.logoSubtitle}</p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex gap-6 text-base font-semibold">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-amber-700 transition">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right actions: language switcher + mobile toggle */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Language switcher — always visible */}
          <Link
            href={switcherHref}
            aria-label={switcherAriaLabel}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold border border-slate-200 text-slate-500 hover:text-amber-700 hover:border-slate-300 transition-colors duration-150"
          >
            {switcherLabel}
          </Link>

          {/* Mobile menu button */}
          <button
            className="sm:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 text-slate-700"
            onClick={() => setOpen((v) => !v)}
            aria-label={dict.menuLabel}
          >
            <span className="text-xl">{open ? "✕" : "☰"}</span>
          </button>
        </div>
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
            {/* Language switcher in mobile dropdown */}
            <Link
              href={switcherHref}
              className="py-1 text-sm text-slate-400 hover:text-amber-700"
              onClick={() => setOpen(false)}
            >
              {switcherAriaLabel}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
