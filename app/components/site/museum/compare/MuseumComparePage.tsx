"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { places, type Place } from "@/data/places";
import MuseumSlider from "./MuseumSlider";

const comparePlaces = places.filter((p) => p.beforeSrc && p.afterSrc);

const NAV_ITEMS = [
  { label: "الرئيسية", href: "/museum", icon: "🏠" },
  { label: "الخريطة", href: "/museum/map", icon: "🗺️" },
  { label: "القصص", href: "/museum/stories", icon: "🎙️" },
  { label: "المستقبل", href: "/museum/future", icon: "✨" },
];

export default function MuseumComparePage() {
  const [active, setActive] = useState<Place>(comparePlaces[0]);

  return (
    <div dir="rtl" className="h-screen bg-stone-950 flex flex-col overflow-hidden">

      {/* Kiosk header */}
      <header className="shrink-0 bg-stone-900 border-b border-stone-800 px-6 py-4 flex items-center gap-5">
        <Link
          href="/museum"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-stone-800 hover:bg-stone-700 active:scale-95 transition-all text-stone-300 text-base font-bold shrink-0"
        >
          <span aria-hidden="true">←</span>
          <span>رئيسية المتحف</span>
        </Link>

        <div className="flex-1 text-center">
          <h1 className="text-xl sm:text-2xl xl:text-3xl font-bold text-white">
            زمان واليوم
          </h1>
          <p className="text-xs sm:text-sm text-stone-400 mt-0.5 hidden sm:block">
            حرّك المؤشر لاكتشاف كيف تغيرت أبو غوش عبر الزمن
          </p>
        </div>

        {/* Logo — balances back button */}
        <div className="w-[148px] shrink-0 flex items-center justify-end">
          <div className="relative h-8 w-20 opacity-60">
            <Image
              src="/images/branding/school-logo.png"
              alt="شعار مدرسة أبو غوش الثانوية"
              fill
              sizes="80px"
              className="object-contain"
            />
          </div>
        </div>
      </header>

      {/* Main: slider + side panel */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden min-h-0">

        {/* Slider area */}
        <div className="flex-1 min-h-[50vh] md:min-h-0 relative">
          {/* key forces remount + position reset when place changes */}
          <MuseumSlider
            key={active.id}
            beforeSrc={active.beforeSrc}
            afterSrc={active.afterSrc}
            initial={active.compareInitial ?? 50}
            alt={`مقارنة: ${active.title}`}
          />
        </div>

        {/* Side panel */}
        <aside className="md:w-[380px] lg:w-[440px] xl:w-[480px] bg-stone-900 border-t border-stone-800 md:border-t-0 md:border-r shrink-0 flex flex-col overflow-y-auto">

          {/* Place info */}
          <div className="p-7 xl:p-9 border-b border-stone-800">
            <div className="h-1 w-14 bg-amber-500 rounded-full mb-5" />
            <h2 className="text-2xl xl:text-3xl font-bold text-white mb-3 leading-snug">
              {active.title}
            </h2>
            {active.description && (
              <p className="text-base xl:text-lg text-stone-300 leading-relaxed">
                {active.description}
              </p>
            )}
            {active.tags && active.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {active.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-stone-800 text-stone-400 border border-stone-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Place selector */}
          <div className="flex-1 p-6 xl:p-8">
            <p className="text-xs font-semibold text-stone-500 tracking-widest mb-4">
              اختر مكانًا
            </p>
            <div className="grid grid-cols-2 gap-3">
              {comparePlaces.map((place) => {
                const isActive = place.id === active.id;
                return (
                  <button
                    key={place.id}
                    onClick={() => setActive(place)}
                    className={[
                      "py-5 xl:py-6 px-4 rounded-2xl text-base xl:text-lg font-bold transition-all active:scale-[0.97]",
                      isActive
                        ? "bg-amber-600 text-white shadow-lg shadow-amber-900/30"
                        : "bg-stone-800 text-stone-300 hover:bg-stone-700 border border-stone-700/50",
                    ].join(" ")}
                  >
                    {place.title}
                  </button>
                );
              })}
            </div>
          </div>
        </aside>
      </div>

      {/* Bottom navigation bar */}
      <nav className="shrink-0 bg-stone-900 border-t border-stone-800 grid grid-cols-4">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex flex-col items-center justify-center gap-2 py-5 text-stone-400 hover:text-amber-400 hover:bg-stone-800 active:bg-stone-700 transition-colors"
          >
            <span className="text-2xl xl:text-3xl" aria-hidden="true">{item.icon}</span>
            <span className="text-xs xl:text-sm font-bold">{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
