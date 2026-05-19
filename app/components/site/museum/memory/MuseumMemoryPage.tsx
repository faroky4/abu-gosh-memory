import Link from "next/link";

// ─── Static data ─────────────────────────────────────────────────────────────

const SECTIONS = [
  {
    id: "beginnings",
    year: "١٩٥٠",
    yearRange: "١٩٥٠ – ١٩٧٠",
    title: "البدايات",
    memory:
      "في تلك الأيام البسيطة، كان الفصل يضم حفنة من الأطفال يجلسون على مقاعد خشبية، وصوت المعلم هو كل ما يملؤ المكان. لم تكن الجدران مكتملة دائمًا، لكن الرغبة في التعلم كانت أقوى من أي بناء.",
    icon: "🏫",
    glow: "rgba(180,83,9,0.18)",
    flip: false,
  },
  {
    id: "classrooms",
    year: "١٩٧٠",
    yearRange: "١٩٧٠ – ١٩٩٠",
    title: "الصفوف القديمة",
    memory:
      "كانت الكتب ثمينة، وكان الطلاب يتناقلونها من جيل إلى جيل. على السبورة السوداء كُتبت حروف عربية أولى لا تُنسى. تلك الصفوف شكّلت أطباء، مهندسين، ومعلمين حملوا أبو غوش في قلوبهم إلى كل مكان.",
    icon: "📖",
    glow: "rgba(161,61,7,0.15)",
    flip: true,
  },
  {
    id: "teachers",
    year: "—",
    yearRange: "عبر الأجيال",
    title: "المعلمون",
    memory:
      "لم يكن المعلم مجرد شخص يقف أمام الطلاب، بل كان أبًا وأمًا ومرشدًا. يعرف أسماء آباء طلابه وأجدادهم. ذاكرته كانت ذاكرة البلدة كلها، وحضوره في المدرسة كان حضور التاريخ بعينه.",
    icon: "🎓",
    glow: "rgba(217,119,6,0.12)",
    flip: false,
  },
  {
    id: "activities",
    year: "١٩٩٥",
    yearRange: "١٩٩٠ – ٢٠١٠",
    title: "النشاطات",
    memory:
      "المسرحيات المدرسية، حصص الرياضة في الفناء الترابي، رحلات إلى مواقع أبو غوش التاريخية. كانت تلك اللحظات خارج الفصل هي أعمق ما علّمته المدرسة — روح الفريق والانتماء للمكان.",
    icon: "🎭",
    glow: "rgba(180,83,9,0.14)",
    flip: true,
  },
  {
    id: "today",
    year: "٢٠٢٤",
    yearRange: "٢٠١٠ – اليوم",
    title: "جيل اليوم",
    memory:
      "يحمل طلاب اليوم كاميرات بدل الدفاتر القديمة، ويوثّقون ذاكرة البلدة بأصابعهم. هذا المشروع نفسه — ما تراه الآن — من صنع أيديهم. الماضي والحاضر يلتقيان هنا، في هذه الشاشة.",
    icon: "✨",
    glow: "rgba(251,191,36,0.10)",
    flip: false,
  },
] as const;

const QUOTES = [
  "هنا بدأت أولى الحكايات.",
  "كل جيل ترك أثرًا لا يُمحى.",
  "المعلم الحقيقي يعيش في ذاكرة طلابه.",
  "الذاكرة لا تشيخ — وأبو غوش لا تُنسى.",
];

const NAV_ITEMS = [
  { label: "الرئيسية", href: "/museum", icon: "🏠" },
  { label: "الخريطة", href: "/museum/map", icon: "🗺️" },
  { label: "زمان واليوم", href: "/museum/compare", icon: "⏳" },
  { label: "القصص", href: "/museum/stories", icon: "🎙️" },
];

// ─── Image placeholder ────────────────────────────────────────────────────────

function MemoryImagePlaceholder({
  year,
  icon,
  glow,
}: {
  year: string;
  icon: string;
  glow: string;
}) {
  return (
    <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-stone-900 group">
      {/* Ambient amber glow */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-700 group-hover:opacity-150"
        style={{ background: `radial-gradient(ellipse 60% 60% at 40% 50%, ${glow}, transparent)` }}
        aria-hidden="true"
      />

      {/* Large year watermark */}
      <div
        className="absolute bottom-5 right-6 font-bold text-stone-700/60 leading-none select-none transition-all duration-500 group-hover:text-stone-700/80"
        style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
        aria-hidden="true"
      >
        {year}
      </div>

      {/* Icon */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-stone-700/30 select-none transition-all duration-500 group-hover:text-stone-700/50"
        style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}
        aria-hidden="true"
      >
        {icon}
      </div>

      {/* Subtle border glow on hover */}
      <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/5 group-hover:ring-amber-500/20 transition-all duration-500" />
    </div>
  );
}

// ─── Quote card ───────────────────────────────────────────────────────────────

function QuoteCard({ quote }: { quote: string }) {
  return (
    <div className="py-16 xl:py-20 px-8 text-center">
      <p className="text-2xl xl:text-3xl font-bold text-stone-400 leading-relaxed max-w-2xl mx-auto">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="w-12 h-px bg-amber-500/60 mx-auto mt-8" />
    </div>
  );
}

// ─── Timeline section ─────────────────────────────────────────────────────────

function TimelineSection({
  section,
}: {
  section: (typeof SECTIONS)[number];
}) {
  return (
    <section className="px-6 sm:px-10 xl:px-20 py-16 xl:py-24">
      <div
        className={[
          "flex flex-col gap-10 xl:gap-16 items-center",
          section.flip ? "md:flex-row-reverse" : "md:flex-row",
        ].join(" ")}
      >
        {/* Image placeholder */}
        <div className="w-full md:flex-1">
          <MemoryImagePlaceholder
            year={section.year}
            icon={section.icon}
            glow={section.glow}
          />
        </div>

        {/* Text content */}
        <div className="w-full md:flex-1 flex flex-col justify-center gap-6">
          {/* Year badge */}
          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-stone-800" />
            <span className="text-xs font-semibold tracking-widest text-amber-600 whitespace-nowrap">
              {section.yearRange}
            </span>
            <div className="h-px flex-1 bg-stone-800" />
          </div>

          {/* Amber accent + title */}
          <div>
            <div className="h-1 w-10 bg-amber-500 rounded-full mb-5" />
            <h2 className="text-3xl xl:text-4xl font-bold text-white leading-snug">
              {section.title}
            </h2>
          </div>

          {/* Memory text */}
          <p className="text-lg xl:text-xl text-stone-300 leading-relaxed">
            {section.memory}
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default function MuseumMemoryPage() {
  return (
    <div dir="rtl" className="min-h-screen bg-stone-950 flex flex-col">

      {/* Sticky kiosk header */}
      <header className="sticky top-0 z-20 shrink-0 bg-stone-900/95 backdrop-blur border-b border-stone-800 px-6 py-4 flex items-center gap-5">
        <Link
          href="/museum"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-stone-800 hover:bg-stone-700 active:scale-95 transition-all text-stone-300 text-base font-bold shrink-0"
        >
          <span aria-hidden="true">←</span>
          <span>رئيسية المتحف</span>
        </Link>

        <div className="flex-1 text-center">
          <h1 className="text-xl sm:text-2xl xl:text-3xl font-bold text-white">
            ذاكرة المدرسة
          </h1>
          <p className="text-xs sm:text-sm text-stone-400 mt-0.5 hidden sm:block">
            صور، لحظات، وذكريات من أجيال مدرسة أبو غوش
          </p>
        </div>

        {/* Balance spacer */}
        <div className="w-[148px] shrink-0" />
      </header>

      {/* Scrollable main content */}
      <main className="flex-1">

        {/* Atmospheric intro */}
        <div className="relative py-24 xl:py-36 text-center px-6 overflow-hidden">
          {/* Background glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse 70% 50% at 50% 60%, rgba(180,83,9,0.14) 0%, transparent 70%)",
            }}
          />

          {/* Year range watermark */}
          <p
            className="font-bold text-stone-800 select-none mb-10 leading-none"
            style={{ fontSize: "clamp(3rem, 10vw, 8rem)" }}
            aria-hidden="true"
          >
            ١٩٥٠ — ٢٠٢٤
          </p>

          <p className="relative text-lg xl:text-xl text-stone-400 max-w-2xl mx-auto leading-relaxed">
            هذه الصفحة وثيقة حية للذاكرة المشتركة لأجيال مدرسة أبو غوش.
            كل لحظة هنا أمانة، وكل اسم كان يومًا طالبًا يجلس على هذه المقاعد.
          </p>
        </div>

        {/* Divider */}
        <div className="px-10 xl:px-20">
          <div className="h-px bg-stone-800" />
        </div>

        {/* Timeline sections interleaved with quotes */}
        {SECTIONS.map((section, i) => (
          <div key={section.id}>
            <TimelineSection section={section} />

            {/* Quote between sections (not after the last) */}
            {i < SECTIONS.length - 1 && (
              <>
                <div className="px-10 xl:px-20">
                  <div className="h-px bg-stone-800/60" />
                </div>
                <QuoteCard quote={QUOTES[i]} />
                <div className="px-10 xl:px-20">
                  <div className="h-px bg-stone-800/60" />
                </div>
              </>
            )}
          </div>
        ))}

        {/* Closing tribute */}
        <div className="relative py-24 xl:py-32 text-center px-6 overflow-hidden border-t border-stone-800">
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse 50% 60% at 50% 50%, rgba(217,119,6,0.08), transparent)",
            }}
          />
          <div className="relative max-w-2xl mx-auto">
            <p className="text-5xl xl:text-6xl mb-8 select-none" aria-hidden="true">🏫</p>
            <h2 className="text-2xl xl:text-3xl font-bold text-white mb-6 leading-snug">
              هذا المشروع من صنع طلاب أبو غوش
            </h2>
            <p className="text-base xl:text-lg text-stone-400 leading-relaxed mb-10">
              ما تراه هنا هو جهد طلاب جمعوا الصور، أجروا المقابلات، ووثّقوا الذاكرة.
              شكرًا لكل من ساهم في حفظ هذا الإرث.
            </p>
            <Link
              href="/museum"
              className="inline-block px-8 py-4 rounded-full bg-amber-600 hover:bg-amber-500 active:scale-95 transition-all text-white font-bold text-base xl:text-lg"
            >
              العودة إلى المتحف
            </Link>
          </div>
        </div>
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
