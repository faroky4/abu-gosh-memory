"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  beforeSrc: string;
  afterSrc: string;
  alt?: string;
  initial?: number;
};

export default function MuseumSlider({
  beforeSrc,
  afterSrc,
  alt = "قديم / حديث",
  initial = 50,
}: Props) {
  const [pos, setPos] = useState(initial);
  const [hasMoved, setHasMoved] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePos = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = Math.max(2, Math.min(98, ((clientX - rect.left) / rect.width) * 100));
    setPos(pct);
    if (!hasMoved) setHasMoved(true);
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onDown = (e: PointerEvent) => {
      dragging.current = true;
      el.setPointerCapture(e.pointerId);
      updatePos(e.clientX);
    };
    const onMove = (e: PointerEvent) => {
      if (!dragging.current) return;
      updatePos(e.clientX);
    };
    const onUp = () => {
      dragging.current = false;
    };

    el.addEventListener("pointerdown", onDown);
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerup", onUp);
    el.addEventListener("pointercancel", onUp);

    return () => {
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerup", onUp);
      el.removeEventListener("pointercancel", onUp);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full bg-stone-950 select-none cursor-col-resize touch-none overflow-hidden"
      aria-label={alt}
    >
      {/* After image — حديث (base layer, full width) */}
      <img
        src={afterSrc}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />

      {/* Before image — قديم (clipped from physical left) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${pos}%` }}
      >
        <img
          src={beforeSrc}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
          style={{ minWidth: "100vw" }}
        />
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-px bg-white/80 shadow-lg pointer-events-none"
        style={{ left: `calc(${pos}% - 0.5px)` }}
      />

      {/* Drag handle — 80px, touch-friendly */}
      <div
        className="absolute top-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-white/95 shadow-2xl flex items-center justify-center pointer-events-none"
        style={{ left: `calc(${pos}% - 40px)` }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#44403c"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="15 18 9 12 15 6" />
          <polyline points="9 18 15 12 9 6" transform="translate(0,0) scale(-1,1) translate(-24,0)" />
        </svg>
      </div>

      {/* Labels */}
      <div className="absolute top-6 right-6 px-5 py-2.5 rounded-full bg-stone-950/85 border border-stone-700/80 text-white text-base font-bold backdrop-blur-sm pointer-events-none">
        قديم
      </div>
      <div className="absolute top-6 left-6 px-5 py-2.5 rounded-full bg-stone-950/85 border border-stone-700/80 text-white text-base font-bold backdrop-blur-sm pointer-events-none">
        حديث
      </div>

      {/* Touch hint — fades after first interaction */}
      {!hasMoved && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 px-5 py-3 rounded-full bg-amber-600/90 text-white text-sm font-bold pointer-events-none animate-pulse">
          <span aria-hidden="true">↔</span>
          <span>حرّك للمقارنة</span>
        </div>
      )}
    </div>
  );
}
