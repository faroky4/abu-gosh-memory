import { Cairo, Heebo } from "next/font/google";
import { notFound } from "next/navigation";
import { locales, isValidLocale, type Locale } from "@/lib/i18n";

const cairo = Cairo({
  subsets: ["arabic"],
  display: "swap",
});

const heebo = Heebo({
  subsets: ["hebrew"],
  display: "swap",
});

const fontClass: Record<Locale, string> = {
  ar: cairo.className,
  he: heebo.className,
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  return <div className={fontClass[lang]}>{children}</div>;
}
