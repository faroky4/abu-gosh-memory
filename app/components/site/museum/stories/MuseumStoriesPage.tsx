"use client";

import Link from "next/link";
import { useState } from "react";
import { stories, type Story } from "@/data/stories";

// Video stories first, then text-only
const sortedStories = [...stories].sort((a, b) => {
  if (a.videoUrl && !b.videoUrl) return -1;
  if (!a.videoUrl && b.videoUrl) return 1;
  return 0;
});

const NAV_ITEMS = [
  { label: "الرئيسية", href: "/museum", icon: "🏠" },
  { label: "الخريطة", href: "/museum/map", icon: "🗺️" },
  { label: "زمان واليوم", href: "/museum/compare", icon: "⏳" },
  { label: "المستقبل", href: "/museum/future", icon: "✨" },
];

function StoryCard({
  story,
  isActive,
  onSelect,
}: {
  story: Story;
  isActive: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      onClick={onSelect}
      className={[
        "w-full text-right p-5 xl:p-6 transition-all active:scale-[0.99] border-b border-stone-800 flex flex-col gap-2",
        isActive
          ? "bg-stone-800 border-r-4 border-r-amber-500"
          : "hover:bg-stone-800/60",
      ].join(" ")}
    >
      {/* Header row */}
      <div className="flex items-start justify-between gap-3">
        <span className="text-base xl:text-lg font-bold text-white leading-snug text-right flex-1">
          {story.title}
        </span>
        {story.videoUrl && (
          <span className="shrink-0 mt-0.5 px-2.5 py-1 rounded-full bg-amber-600/20 text-amber-400 text-xs font-bold flex items-center gap-1">
            <span aria-hidden="true">▶</span>
            فيديو
          </span>
        )}
      </div>

      {/* Person label */}
      <p className="text-xs text-stone-500 font-medium">{story.personLabel}</p>

      {/* Excerpt */}
      <p className="text-sm text-stone-400 leading-relaxed line-clamp-2">
        {story.excerpt}
      </p>

      {/* Tags */}
      {story.tags && story.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-1">
          {story.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-2 py-0.5 rounded-full bg-stone-700 text-stone-400"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </button>
  );
}

function FeaturedPanel({
  story,
  onReset,
}: {
  story: Story;
  onReset: () => void;
}) {
  return (
    <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
      {/* Story meta */}
      <div className="shrink-0 px-7 xl:px-10 pt-7 xl:pt-9 pb-5 border-b border-stone-800">
        <div className="h-1 w-14 bg-amber-500 rounded-full mb-4" />
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h2 className="text-2xl xl:text-3xl font-bold text-white leading-snug mb-1">
              {story.title}
            </h2>
            <p className="text-sm xl:text-base text-stone-400">{story.personLabel}</p>
            {story.dateApprox && (
              <p className="text-xs text-stone-600 mt-0.5">{story.dateApprox}</p>
            )}
          </div>
          {story.videoUrl && (
            <span className="shrink-0 px-3 py-1.5 rounded-full bg-amber-600/20 text-amber-400 text-xs font-bold flex items-center gap-1.5 mt-1">
              <span aria-hidden="true">▶</span>
              فيديو
            </span>
          )}
        </div>
        {story.tags && story.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {story.tags.map((tag) => (
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

      {/* Main content area */}
      <div className="flex-1 min-h-0 flex items-center justify-center p-6 xl:p-8 overflow-hidden">
        {story.videoUrl ? (
          <iframe
            key={story.id}
            src={story.videoUrl}
            title={story.videoTitle ?? story.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full rounded-2xl shadow-2xl bg-stone-900"
            style={{
              aspectRatio: story.isShort ? "9/16" : "16/9",
              maxHeight: "100%",
            }}
          />
        ) : (
          <div className="w-full max-w-2xl space-y-5">
            <p className="text-lg xl:text-xl text-stone-300 leading-relaxed">
              {story.excerpt}
            </p>
            {story.content.slice(0, 2).map((para, i) => (
              <p key={i} className="text-base text-stone-500 leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        )}
      </div>

      {/* Action buttons */}
      <div className="shrink-0 px-7 xl:px-10 py-6 border-t border-stone-800 flex gap-4">
        <Link
          href={`/stories/${story.id}`}
          className="flex-1 text-center py-4 xl:py-5 rounded-2xl bg-amber-600 hover:bg-amber-500 active:scale-[0.98] transition-all text-white text-base xl:text-lg font-bold"
        >
          افتح القصة كاملة
        </Link>
        <button
          onClick={onReset}
          className="flex-1 text-center py-4 xl:py-5 rounded-2xl bg-stone-800 hover:bg-stone-700 active:scale-[0.98] transition-all text-stone-300 text-base xl:text-lg font-semibold"
        >
          العودة للتجربة
        </button>
      </div>
    </div>
  );
}

export default function MuseumStoriesPage() {
  const [selected, setSelected] = useState<Story>(sortedStories[0]);

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
            أصوات من أبو غوش
          </h1>
          <p className="text-xs sm:text-sm text-stone-400 mt-0.5 hidden sm:block">
            شاهد مقابلات وقصصًا تحفظ ذاكرة البلدة
          </p>
        </div>

        {/* Balance spacer */}
        <div className="w-[148px] shrink-0" />
      </header>

      {/* Main: featured + sidebar */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden min-h-0">

        {/* Featured panel — RIGHT in RTL (dominant) */}
        <div className="flex-1 min-h-[55vh] lg:min-h-0 bg-stone-950 flex flex-col overflow-hidden">
          <FeaturedPanel
            story={selected}
            onReset={() => setSelected(sortedStories[0])}
          />
        </div>

        {/* Story list sidebar — LEFT in RTL */}
        <aside className="lg:w-[380px] xl:w-[420px] bg-stone-900 border-t border-stone-800 lg:border-t-0 lg:border-r shrink-0 overflow-y-auto">
          <div className="px-5 py-4 border-b border-stone-800">
            <p className="text-xs font-semibold text-stone-500 tracking-widest">
              اختر قصة أو فيديو
            </p>
          </div>
          {sortedStories.map((story) => (
            <StoryCard
              key={story.id}
              story={story}
              isActive={story.id === selected.id}
              onSelect={() => setSelected(story)}
            />
          ))}
        </aside>
      </div>

      {/* Bottom navigation */}
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
