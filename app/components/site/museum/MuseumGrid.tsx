import Link from "next/link";

interface Card {
  title: string;
  tagline: string;
  icon: string;
  href: string;
  accentBg: string;
}

const CARDS: Card[] = [
  {
    title: "اكتشف أبو غوش",
    tagline: "خريطة تفاعلية",
    icon: "🗺️",
    href: "/museum/map",
    accentBg: "bg-amber-600",
  },
  {
    title: "زمان واليوم",
    tagline: "مقارنة الماضي والحاضر",
    icon: "⏳",
    href: "/museum/compare",
    accentBg: "bg-amber-700",
  },
  {
    title: "أصوات من أبو غوش",
    tagline: "قصص ومقابلات",
    icon: "🎙️",
    href: "/museum/stories",
    accentBg: "bg-amber-500",
  },
  {
    title: "ذاكرة المدرسة",
    tagline: "أرشيف تعليمي",
    icon: "📚",
    href: "/museum/memory",
    accentBg: "bg-amber-800",
  },
  {
    title: "جيل المستقبل",
    tagline: "رؤية الطلاب",
    icon: "✨",
    href: "/museum/future",
    accentBg: "bg-stone-700",
  },
];

function MuseumCard({ card }: { card: Card }) {
  return (
    <Link
      href={card.href}
      className="group relative bg-stone-900 rounded-3xl overflow-hidden flex flex-col min-h-64 xl:min-h-80 transition-all duration-200 hover:bg-stone-800 hover:-translate-y-1 active:scale-[0.98] select-none"
    >
      {/* Color accent bar */}
      <div className={`h-1.5 w-full ${card.accentBg} shrink-0`} />

      <div className="flex flex-col flex-1 p-8 xl:p-10 justify-between">
        {/* Icon */}
        <div className="text-5xl xl:text-6xl leading-none mb-6" aria-hidden="true">
          {card.icon}
        </div>

        {/* Text */}
        <div>
          <h2 className="text-2xl xl:text-3xl font-bold text-white leading-snug mb-2">
            {card.title}
          </h2>
          <p className="text-sm xl:text-base text-stone-400 font-light">
            {card.tagline}
          </p>
        </div>
      </div>

      {/* Hover arrow */}
      <div className="absolute bottom-6 left-6 text-stone-600 group-hover:text-amber-500 transition-colors duration-150" aria-hidden="true">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </div>
    </Link>
  );
}

export default function MuseumGrid() {
  const [row1, row2] = [CARDS.slice(0, 3), CARDS.slice(3)];

  return (
    <section className="bg-stone-950 px-6 sm:px-10 xl:px-16 pb-20">
      <div className="max-w-7xl mx-auto space-y-5">

        {/* Row 1: 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {row1.map((card) => (
            <MuseumCard key={card.href} card={card} />
          ))}
        </div>

        {/* Row 2: 2 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {row2.map((card) => (
            <MuseumCard key={card.href} card={card} />
          ))}
        </div>

      </div>
    </section>
  );
}
