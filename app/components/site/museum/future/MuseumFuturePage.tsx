import Link from "next/link";
import Image from "next/image";

// ─── Static data ──────────────────────────────────────────────────────────────

const VISION_CARDS = [
  {
    id: "coding",
    icon: "⌨️",
    title: "البرمجة",
    description:
      "طلاب يتعلمون كتابة الكود لبناء مواقع، تطبيقات، وأدوات رقمية تخدم مجتمعهم مباشرة.",
    accent: "bg-amber-600",
    glow: "hover:shadow-amber-950/60",
    border: "hover:border-amber-700/40",
    tint: "",
  },
  {
    id: "ai",
    icon: "🤖",
    title: "الذكاء الاصطناعي",
    description:
      "توظيف أدوات الذكاء الاصطناعي لتصنيف الصور القديمة، تحليل الذكريات، وإتاحة الأرشيف للأجيال القادمة.",
    accent: "bg-sky-700",
    glow: "hover:shadow-sky-950/60",
    border: "hover:border-sky-800/40",
    tint: "bg-sky-950/20",
  },
  {
    id: "archive",
    icon: "🗂️",
    title: "التوثيق الرقمي",
    description:
      "تحويل الصور، المقابلات، والوثائق الورقية إلى أرشيف رقمي دائم يمكن الوصول إليه من أي مكان.",
    accent: "bg-amber-700",
    glow: "hover:shadow-amber-950/60",
    border: "hover:border-amber-700/40",
    tint: "",
  },
  {
    id: "media",
    icon: "🎥",
    title: "الإعلام والتصوير",
    description:
      "طلاب يمسكون الكاميرا ليوثّقوا حياة البلدة — مقابلات، تقارير مصورة، وقصص تُروى بلغة الصورة.",
    accent: "bg-stone-600",
    glow: "hover:shadow-stone-950/60",
    border: "hover:border-stone-600/40",
    tint: "",
  },
  {
    id: "museum",
    icon: "🖥️",
    title: "المتحف التفاعلي",
    description:
      "شاشات لمس في قاعات المدرسة تُتيح لزوار أبو غوش تصفح التاريخ، الخرائط، والقصص بأصابعهم.",
    accent: "bg-amber-500",
    glow: "hover:shadow-amber-900/60",
    border: "hover:border-amber-500/40",
    tint: "",
  },
] as const;

const MILESTONES = [
  {
    id: "photos",
    step: "01",
    icon: "📷",
    title: "أرشفة الصور",
    description: "توثيق صور قديمة وحديثة لكل مكان في البلدة",
    done: true,
  },
  {
    id: "website",
    step: "02",
    icon: "🌐",
    title: "بناء الموقع",
    description: "منصة رقمية تجمع التاريخ والحاضر في مكان واحد",
    done: true,
  },
  {
    id: "screens",
    step: "03",
    icon: "📱",
    title: "الشاشات التفاعلية",
    description: "تجربة متحفية حية داخل المدرسة نفسها",
    done: true,
  },
  {
    id: "ai",
    step: "04",
    icon: "🤖",
    title: "الذكاء الاصطناعي",
    description: "توظيف التقنية لتصنيف الذكريات وتحليلها",
    done: false,
  },
  {
    id: "permanent",
    step: "05",
    icon: "🏛️",
    title: "متحف دائم",
    description: "أرشيف موثّق يخدم الأجيال القادمة إلى الأبد",
    done: false,
  },
] as const;

const NAV_ITEMS = [
  { label: "الرئيسية", href: "/museum", icon: "🏠" },
  { label: "الخريطة", href: "/museum/map", icon: "🗺️" },
  { label: "زمان واليوم", href: "/museum/compare", icon: "⏳" },
  { label: "القصص", href: "/museum/stories", icon: "🎙️" },
];

// ─── Vision card ──────────────────────────────────────────────────────────────

function VisionCard({ card }: { card: (typeof VISION_CARDS)[number] }) {
  return (
    <div
      className={[
        "group relative rounded-3xl border border-stone-800/60 p-7 xl:p-9 flex flex-col gap-5 transition-all duration-300",
        "hover:shadow-xl hover:-translate-y-0.5",
        card.glow,
        card.border,
        card.tint || "bg-stone-900",
      ].join(" ")}
    >
      {/* Accent bar */}
      <div className={`h-1 w-12 rounded-full ${card.accent}`} />

      {/* Icon */}
      <div className="text-4xl xl:text-5xl leading-none" aria-hidden="true">
        {card.icon}
      </div>

      {/* Title */}
      <h3 className="text-xl xl:text-2xl font-bold text-white leading-snug">
        {card.title}
      </h3>

      {/* Description */}
      <p className="text-sm xl:text-base text-stone-400 leading-relaxed flex-1">
        {card.description}
      </p>
    </div>
  );
}

// ─── Milestone timeline ───────────────────────────────────────────────────────

function MilestoneTimeline() {
  return (
    <div className="relative px-6 sm:px-10 xl:px-20 py-16 xl:py-20">
      <p className="text-xs font-semibold tracking-widest text-amber-600 mb-10 text-center">
        خارطة الطريق
      </p>

      <div className="relative">
        {/* Connecting line */}
        <div
          className="absolute top-7 right-7 left-7 h-px bg-stone-800"
          aria-hidden="true"
        />

        {/* Milestones */}
        <div className="relative flex justify-between gap-3 overflow-x-auto pb-2">
          {MILESTONES.map((m) => (
            <div
              key={m.id}
              className="flex flex-col items-center text-center flex-1 min-w-[130px] xl:min-w-0"
            >
              {/* Circle — bg-stone-950 cuts the connecting line */}
              <div
                className={[
                  "w-14 h-14 rounded-full flex items-center justify-center text-2xl shrink-0 z-10 border-2 bg-stone-950 mb-4",
                  m.done ? "border-amber-500" : "border-stone-700",
                ].join(" ")}
              >
                {m.icon}
              </div>

              {/* Step number */}
              <span
                className={[
                  "text-[10px] font-bold tracking-widest mb-1",
                  m.done ? "text-amber-500" : "text-stone-600",
                ].join(" ")}
              >
                {m.step}
              </span>

              {/* Title */}
              <h4
                className={[
                  "text-sm xl:text-base font-bold mb-1 leading-snug",
                  m.done ? "text-white" : "text-stone-500",
                ].join(" ")}
              >
                {m.title}
              </h4>

              {/* Description */}
              <p className="text-[11px] xl:text-xs text-stone-600 leading-relaxed max-w-[140px]">
                {m.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default function MuseumFuturePage() {
  return (
    <div dir="rtl" className="min-h-screen bg-stone-950 flex flex-col">

      {/* Sticky kiosk header */}
      <header className="sticky top-0 z-20 bg-stone-900/95 backdrop-blur border-b border-stone-800 px-6 py-4 flex items-center gap-5 shrink-0">
        <Link
          href="/museum"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-stone-800 hover:bg-stone-700 active:scale-95 transition-all text-stone-300 text-base font-bold shrink-0"
        >
          <span aria-hidden="true">←</span>
          <span>رئيسية المتحف</span>
        </Link>

        <div className="flex-1 text-center">
          <h1 className="text-xl sm:text-2xl xl:text-3xl font-bold text-white">
            جيل المستقبل
          </h1>
          <p className="text-xs sm:text-sm text-stone-400 mt-0.5 hidden sm:block">
            كيف يبني طلاب أبو غوش الجيل القادم من المعرفة والتكنولوجيا
          </p>
        </div>

        {/* Logo — balances back button */}
        <div className="w-[148px] shrink-0 flex items-center justify-end">
          <div className="relative h-8 w-20 opacity-60">
            <Image
              src="/images/branding/school-logo.png"
              alt="شعار مدرسة أبو غوش الثانوية"
              fill
              sizes="80px"
              className="object-contain"
            />
          </div>
        </div>
      </header>

      {/* Scrollable main content */}
      <main className="flex-1">

        {/* Hero section */}
        <section className="relative py-24 xl:py-36 px-6 text-center overflow-hidden">
          {/* Amber glow from bottom */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse 80% 50% at 50% 90%, rgba(180,83,9,0.16), transparent)",
            }}
          />
          {/* Subtle sky tint from top — technology hint */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse 60% 30% at 50% 0%, rgba(56,189,248,0.05), transparent)",
            }}
          />

          <div className="relative max-w-4xl mx-auto">
            <p className="text-xs font-semibold tracking-widest text-amber-500/70 uppercase mb-10 select-none">
              مشروع طلاب مدرسة أبو غوش
            </p>

            <h2
              className="font-bold text-white leading-tight mb-8"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              من الذاكرة{" "}
              <span className="text-amber-500">إلى المستقبل</span>
            </h2>

            <p className="text-lg xl:text-xl text-stone-300 leading-relaxed max-w-3xl mx-auto">
              يبني طلاب مدرسة أبو غوش منصة رقمية تجمع الأرشيف التاريخي، الخرائط التفاعلية، القصص المسموعة، والذكاء الاصطناعي — كل ذلك لحفظ هوية البلدة ونقلها إلى الأجيال القادمة.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="px-10 xl:px-20">
          <div className="h-px bg-stone-800" />
        </div>

        {/* Vision cards */}
        <section className="px-6 sm:px-10 xl:px-20 py-16 xl:py-24 space-y-5">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold tracking-widest text-amber-600 mb-3">
              مجالات العمل
            </p>
            <h2 className="text-2xl xl:text-3xl font-bold text-white">
              رؤية الطلاب للمستقبل
            </h2>
          </div>

          {/* Row 1: 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {VISION_CARDS.slice(0, 3).map((card) => (
              <VisionCard key={card.id} card={card} />
            ))}
          </div>

          {/* Row 2: 2 cards, centered */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:w-2/3 mx-auto">
            {VISION_CARDS.slice(3).map((card) => (
              <VisionCard key={card.id} card={card} />
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="px-10 xl:px-20">
          <div className="h-px bg-stone-800" />
        </div>

        {/* Milestone timeline */}
        <MilestoneTimeline />

        {/* Divider */}
        <div className="px-10 xl:px-20">
          <div className="h-px bg-stone-800" />
        </div>

        {/* Closing section */}
        <section className="relative py-24 xl:py-36 px-6 text-center overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(217,119,6,0.09), transparent)",
            }}
          />

          <div className="relative max-w-2xl mx-auto">
            <p
              className="font-bold text-stone-700 select-none mb-10 leading-none"
              style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
              aria-hidden="true"
            >
              ∞
            </p>

            <h2 className="text-2xl xl:text-4xl font-bold text-white leading-relaxed mb-8">
              كل جيل يترك أثرًا...{" "}
              <span className="text-amber-500">وهذا الجيل يبني المستقبل.</span>
            </h2>

            <p className="text-base xl:text-lg text-stone-400 leading-relaxed mb-12 max-w-xl mx-auto">
              شكرًا لكل طالب، معلم، وأهل البلد الذين ساهموا في حفظ هذه الذاكرة وبناء هذا الأرشيف.
            </p>

            <Link
              href="/museum"
              className="inline-block px-10 py-4 xl:py-5 rounded-full bg-amber-600 hover:bg-amber-500 active:scale-95 transition-all text-white font-bold text-base xl:text-lg shadow-lg shadow-amber-950/40"
            >
              العودة إلى المتحف
            </Link>
          </div>
        </section>
      </main>

      {/* Sticky bottom navigation */}
      <nav className="sticky bottom-0 z-20 bg-stone-900/95 backdrop-blur border-t border-stone-800 grid grid-cols-4">
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
