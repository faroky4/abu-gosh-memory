"use client";

import dynamic from "next/dynamic";

const LeafletMapInner = dynamic(
  () => import("./LeafletMapInner"),
  {
    ssr: false,
    loading: () => (
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
        جارٍ تحميل الخريطة…
      </div>
    ),
  }
);

export default function InteractiveMap() {
  return <LeafletMapInner />;
}