"use client";

import { useEffect, useId, useRef, useState } from "react";

type Props = {
  beforeSrc: string; // صورة زمان
  afterSrc: string;  // صورة اليوم
  alt?: string;
  initial?: number;  // 0..100
  className?: string;
};

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  alt = "قبل وبعد",
  initial = 50,
  className = "",
}: Props) {
  const [value, setValue] = useState(initial);
  const id = useId();
  const containerRef = useRef<HTMLDivElement | null>(null);

  // دعم السحب بالمؤشر (اختياري بس حلو)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onPointerMove = (e: PointerEvent) => {
      if (!(e.buttons === 1)) return; // لازم كبسة
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setValue(pct);
    };

    el.addEventListener("pointermove", onPointerMove);
    return () => el.removeEventListener("pointermove", onPointerMove);
  }, []);

  return (
    <div className={`w-full ${className}`}>
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm select-none"
      >
        {/* صورة اليوم (after) تحت */}
        <img
          src={afterSrc}
          alt={alt}
          className="block w-full h-[260px] sm:h-[320px] object-cover"
          draggable={false}
        />

        {/* صورة زمان (before) فوق ولكن مقصوصة حسب value */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${value}%` }}
        >
          <img
            src={beforeSrc}
            alt={alt}
            className="block w-full h-[260px] sm:h-[320px] object-cover"
            draggable={false}
          />
        </div>

        {/* خط الفاصل + المقبض */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-white/90 shadow"
          style={{ left: `calc(${value}% - 1px)` }}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 border border-slate-200 shadow grid place-items-center"
          style={{ left: `calc(${value}% - 20px)` }}
        >
          <div className="text-slate-700 text-xs font-bold">↔</div>
        </div>

        {/* labels */}
        <div className="absolute top-3 right-3 text-[11px] px-2 py-1 rounded-full bg-white/80 border border-slate-200">
          زمان
        </div>
        <div className="absolute top-3 left-3 text-[11px] px-2 py-1 rounded-full bg-white/80 border border-slate-200">
          
          اليوم
        </div>
      </div>

      {/* slider control */}
      <div className="mt-3 flex items-center gap-3">
        <label htmlFor={id} className="text-xs text-slate-500 whitespace-nowrap">
          مقارنة
        </label>
        <input
          id={id}
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="w-full"
          aria-label="قبل وبعد"
        />
        <span className="text-xs text-slate-500 w-10 text-left">{Math.round(value)}%</span>
      </div>
    </div>
  );
}