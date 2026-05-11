import Link from "next/link";

const highlights = [
  { icon: "📖", label: "قصص أهل البلد" },
  { icon: "🖼️", label: "صور زمان واليوم" },
  { icon: "🗺️", label: "خريطة تفاعلية" },
];

export default function HeritageCTA() {
  return (
    <section className="bg-stone-900">
      <div className="max-w-3xl mx-auto px-4 py-16 sm:py-24 text-center">

        {/* Badge */}
        <span className="inline-block text-xs font-semibold tracking-widest text-amber-400 bg-amber-400/10 border border-amber-400/20 px-4 py-1.5 rounded-full mb-7">
          التراث
        </span>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-snug mb-5">
          حكاية أبو غوش
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-stone-300 leading-relaxed mb-10">
          مشروع طلابي يوثّق ذاكرة البلدة من خلال القصص، الصور،
          المقابلات، والخريطة التفاعلية.
        </p>

        {/* Highlight chips */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {highlights.map((h) => (
            <span
              key={h.label}
              className="inline-flex items-center gap-2 text-sm text-stone-200 bg-white/10 border border-white/15 px-4 py-2 rounded-full"
            >
              <span aria-hidden="true">{h.icon}</span>
              {h.label}
            </span>
          ))}
        </div>

        {/* CTA button */}
        <Link
          href="/heritage"
          className="inline-block px-8 py-3.5 rounded-full text-sm sm:text-base font-bold bg-amber-600 text-white hover:bg-amber-700 transition-colors duration-150 shadow-lg shadow-amber-900/30"
        >
          الدخول إلى الأرشيف الرقمي
        </Link>

      </div>
    </section>
  );
}
