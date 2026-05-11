// app/layout.tsx
import type { Metadata } from "next";
import "leaflet/dist/leaflet.css";

import "./globals.css";

export const metadata: Metadata = {
  title: "مدرسة أبو غوش الثانوية",
  description: "مدرسة أبو غوش الثانوية — أبو غوش، القدس. بين الماضي والحاضر نبني المستقبل.",
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