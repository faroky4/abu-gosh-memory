"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import { type MapPlace } from "@/data/mapPlaces";

const MuseumMapLeaflet = dynamic(() => import("./MuseumMapLeaflet"), {
  ssr: false,
  loading: () => (
    <div className="flex-1 bg-stone-900 flex items-center justify-center">
      <p className="text-stone-500 text-xl">جارٍ تحميل الخريطة…</p>
    </div>
  ),
});

const NAV_ITEMS = [
  { label: "الرئيسية", href: "/museum", icon: "🏠" },
  { label: "زمان واليوم", href: "/museum/compare", icon: "⏳" },
  { label: "القصص", href: "/museum/stories", icon: "🎙️" },
  { label: "المستقبل", href: "/museum/future", icon: "✨" },
];

export default function MuseumMapPage() {
  const [selected, setSelected] = useState<MapPlace | null>(null);

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
            اكتشف أبو غوش
          </h1>
          <p className="text-xs sm:text-sm text-stone-400 mt-0.5 hidden sm:block">
            اضغط على مكان في الخريطة لتبدأ الحكاية
          </p>
        </div>

        {/* Spacer to balance back button */}
        <div className="w-[148px] shrink-0" />
      </header>

      {/* Main content: map + side panel */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden min-h-0">

        {/* Map area */}
        <div className="flex-1 min-h-[50vh] md:min-h-0 relative">
          <MuseumMapLeaflet
            onSelect={setSelected}
            selectedId={selected?.id ?? null}
          />
        </div>

        {/* Side panel */}
        <aside className="md:w-[380px] lg:w-[440px] xl:w-[480px] bg-stone-900 border-t border-stone-800 md:border-t-0 md:border-r shrink-0 flex flex-col overflow-y-auto">
          <div className="flex-1 flex flex-col justify-center p-8 xl:p-10">
            {selected ? (
              <div className="space-y-6">
                <div className="h-1 w-14 bg-amber-500 rounded-full" />

                <h2 className="text-2xl xl:text-3xl font-bold text-white leading-snug">
                  {selected.title}
                </h2>

                {selected.shortDescription && (
                  <p className="text-base xl:text-lg text-stone-300 leading-relaxed">
                    {selected.shortDescription}
                  </p>
                )}

                <div className="flex flex-col gap-3 pt-2">
                  <Link
                    href={`/places/${selected.placeId}`}
                    className="block w-full text-center py-4 xl:py-5 rounded-2xl bg-amber-600 hover:bg-amber-500 active:scale-[0.98] transition-all text-white text-base xl:text-lg font-bold"
                  >
                    افتح صفحة المكان
                  </Link>
                  <button
                    onClick={() => setSelected(null)}
                    className="w-full text-center py-4 xl:py-5 rounded-2xl bg-stone-800 hover:bg-stone-700 active:scale-[0.98] transition-all text-stone-300 text-base xl:text-lg font-semibold"
                  >
                    العودة للتجربة
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center space-y-5">
                <span className="text-6xl xl:text-7xl" aria-hidden="true">🗺️</span>
                <h2 className="text-xl xl:text-2xl font-bold text-white">
                  اختر مكانًا من الخريطة
                </h2>
                <p className="text-sm xl:text-base text-stone-500 leading-relaxed max-w-xs mx-auto">
                  اضغط على أي نقطة على الخريطة لعرض معلومات المكان وبدء رحلتك.
                </p>
              </div>
            )}
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
