"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { mapPlaces, MapPlace } from "@/data/mapPlaces";

// نخلي مكوّنات الخريطة تتحمّل فقط على المتصفح (بدون SSR)
const MapContainer = dynamic(
  () => import("react-leaflet").then((m) => m.MapContainer),
  { ssr: false }
);

const TileLayer = dynamic(
  () => import("react-leaflet").then((m) => m.TileLayer),
  { ssr: false }
);

const Marker = dynamic(() => import("react-leaflet").then((m) => m.Marker), {
  ssr: false,
});

const Popup = dynamic(() => import("react-leaflet").then((m) => m.Popup), {
  ssr: false,
});

export default function InteractiveMap() {
  const [active, setActive] = useState<MapPlace | null>(null);

  // مركز تقريبي لأبو غوش – تقدري تعدّليه
  const center: [number, number] = [31.808, 35.098];

  // أثناء الـ SSR أو قبل تحميل الخريطة، Next رح يرندر بس div فاضي
  return (
    <div className="space-y-4">
      <div className="w-full max-w-3xl mx-auto rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
        <MapContainer
          center={center}
          zoom={15}
          style={{ width: "100%", height: "350px" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {mapPlaces.map((place) => (
            <Marker
              key={place.id}
              position={[place.lat, place.lng]}
              eventHandlers={{
                click: () => setActive(place),
              }}
            >
              <Popup>
                <div style={{ textAlign: "right" }}>
                  <strong>{place.title}</strong>
                  {place.shortDescription && (
                    <p style={{ fontSize: "11px", marginTop: "4px" }}>
                      {place.shortDescription}
                    </p>
                  )}
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* معلومات المكان المختار تحت الخريطة */}
      <div className="max-w-3xl mx-auto">
        {active ? (
          <div className="rounded-2xl bg-white border border-slate-200 shadow-sm p-4">
            <h4 className="text-sm font-semibold mb-1">{active.title}</h4>
            {active.shortDescription && (
              <p className="text-xs sm:text-sm text-slate-600 mb-2">
                {active.shortDescription}
              </p>
            )}

            <div className="flex flex-wrap gap-3 text-xs">
              {active.compareId && (
                <a
                  href={`/compare#${active.compareId}`}
                  className="px-3 py-1 rounded-full bg-amber-700 text-white font-semibold hover:bg-amber-800 transition"
                >
                  عرض مقارنة زمان/اليوم لهذا المكان
                </a>
              )}

              {active.storyId && (
                <a
                  href={`/stories/${active.storyId}`}
                  className="px-3 py-1 rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-800 transition"
                >
                  قراءة القصة المرتبطة
                </a>
              )}
            </div>
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-4 text-xs sm:text-sm text-slate-600">
            اضغط على أي ماركر على الخريطة لعرض معلومات المكان. مستقبلاً يمكن ربط
            كل مكان بصور قديمة/حديثة وقصص من أهل البلد.
          </div>
        )}
      </div>
    </div>
  );
}
