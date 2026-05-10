// app/layout.tsx
import type { Metadata } from "next";
import "leaflet/dist/leaflet.css";

import "./globals.css";

export const metadata: Metadata = {
  title: "حكاية أبو غوش",
  description: "مشروع طلاب مدرسة أبو غوش الثانوية لحفظ ذاكرة البلد وربط الأجيال.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-slate-50 text-slate-900 text-[16px] sm:text-[17px]">
        {children}
      </body>
    </html>
  );
}