"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import BeforeAfterSlider from "./BeforeAfterSlider";
import { places } from "@/data/places";

function buildTags() {
  const set = new Set<string>();
  for (const p of places) for (const t of p.tags ?? []) set.add(t);
  return ["الكل", ...Array.from(set)];
}

export default function ComparePlacesGallery() {
  const tags = useMemo(() => buildTags(), []);
  const [activeTag, setActiveTag] = useState("الكل");

  const comparePlaces = useMemo(() => {
    const list = places.filter((p) => p.beforeSrc && p.afterSrc);
    if (activeTag === "الكل") return list;
    return list.filter((p) => (p.tags ?? []).includes(activeTag));
  }, [activeTag]);

  return (
    <div className="space-y-6">
      {/* فلترة */}
      <div className="flex flex-wrap gap-2">
        {tags.map((t) => {
          const isActive = t === activeTag;
          return (
            <button
              key={t}
              onClick={() => setActiveTag(t)}
              className={[
                "text-sm px-4 py-2 rounded-full border transition font-semibold",
                isActive
                  ? "bg-amber-700 text-white border-amber-700"
                  : "bg-white text-slate-700 border-slate-200 hover:border-amber-200",
              ].join(" ")}
            >
              {t}
            </button>
          );
        })}
      </div>

      {/* النتائج */}
      {comparePlaces.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-5 text-slate-600">
          ما في أماكن بهالتصنيف عندها صور “زمان/اليوم” حاليًا.
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-2">
          {comparePlaces.map((p) => (
            <div
              key={p.id}
              id={p.id}
              className="rounded-2xl bg-white border border-slate-200 shadow-sm p-5 scroll-mt-24"
            >
              <div className="mb-3 flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-bold">{p.title}</h3>
                  {p.description ? (
                    <p className="text-sm text-slate-600 mt-1">{p.description}</p>
                  ) : null}

                  {p.tags?.length ? (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {p.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>

                <Link
                  href={`/places/${p.id}`}
                  className="text-sm font-semibold text-emerald-700 hover:text-emerald-800 whitespace-nowrap"
                >
                  صفحة المكان →
                </Link>
              </div>

              <BeforeAfterSlider
                beforeSrc={p.beforeSrc!}
                afterSrc={p.afterSrc!}
                initial={p.compareInitial ?? 50}
                alt={`مقارنة: ${p.title}`}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}