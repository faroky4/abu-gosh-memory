import Link from "next/link";
import { Newspaper, Sparkles, Landmark, BookOpen, FileText, Clock3, LucideIcon } from "lucide-react";
import type { Locale } from "@/lib/i18n";

interface CardDict {
  title: string;
  description: string;
}

interface GridDict {
  enterLabel: string;
  cards: CardDict[];
}

interface CardConfig {
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  // href is computed from lang
  hrefKey: string;
  coming: boolean;
}

const CARD_CONFIGS: CardConfig[] = [
  { icon: Newspaper, iconBg: "bg-amber-50",  iconColor: "text-amber-600", hrefKey: "news",               coming: false },
  { icon: Sparkles,  iconBg: "bg-amber-100", iconColor: "text-amber-700", hrefKey: "students-projects",  coming: false },
  { icon: Landmark,  iconBg: "bg-stone-100", iconColor: "text-stone-700", hrefKey: "heritage",            coming: false },
  { icon: BookOpen,  iconBg: "bg-amber-50",  iconColor: "text-amber-600", hrefKey: "resources",           coming: false },
  { icon: FileText,  iconBg: "bg-stone-100", iconColor: "text-stone-500", hrefKey: "forms",               coming: false },
  { icon: Clock3,    iconBg: "bg-stone-50",  iconColor: "text-stone-400", hrefKey: "",                    coming: true  },
];

const defaultDict: GridDict = {
  enterLabel: "الدخول",
  cards: [
    { title: "أخبار المدرسة",  description: "آخر التحديثات، الفعاليات، والإعلانات." },
    { title: "مشاريع الطلاب", description: "أعمال ومبادرات الطلاب داخل المدرسة." },
    { title: "حكاية أبو غوش", description: "الدخول إلى مشروع التراث والأرشيف الرقمي." },
    { title: "روابط تعليمية", description: "منصات تعليمية وروابط مفيدة للطلاب." },
    { title: "نماذج وملفات",  description: "روابط ونماذج سيتم إضافتها لاحقًا." },
    { title: "قريبًا",         description: "سيتم إضافة خدمات رقمية جديدة مستقبلًا." },
  ],
};

function buildHref(hrefKey: string, lang?: Locale): string {
  if (!hrefKey) return "";
  // Heritage always stays at /heritage regardless of locale
  if (hrefKey === "heritage") return lang ? `/${lang}/heritage` : "/heritage";
  return lang ? `/${lang}/${hrefKey}` : `/${hrefKey}`;
}

export default function PortalGrid({
  dict = defaultDict,
  lang,
}: {
  dict?: GridDict;
  lang?: Locale;
}) {
  return (
    <section className="bg-stone-50 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {CARD_CONFIGS.map((cfg, i) => {
            const card = dict.cards[i] ?? defaultDict.cards[i];
            const href = buildHref(cfg.hrefKey, lang);
            const cardClass = `group relative bg-white rounded-2xl shadow-sm border border-stone-100 p-7 flex flex-col gap-4 transition-all duration-200`;

            const inner = (
              <>
                {/* Icon container */}
                <div className={`w-11 h-11 rounded-xl ${cfg.iconBg} flex items-center justify-center shrink-0`}>
                  <cfg.icon size={20} className={cfg.iconColor} strokeWidth={1.75} />
                </div>

                {/* Text */}
                <div className="flex flex-col gap-1.5 flex-1">
                  <h2 className="text-base sm:text-lg font-bold text-stone-900 leading-snug">
                    {card.title}
                  </h2>
                  <p className="text-sm text-stone-500 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Arrow indicator */}
                {!cfg.coming && (
                  <span className="text-xs font-semibold text-amber-600 group-hover:text-amber-700 transition-colors duration-150 mt-1">
                    {dict.enterLabel} ←
                  </span>
                )}
              </>
            );

            if (cfg.coming) {
              return (
                <div key={card.title} className={`${cardClass} opacity-60 cursor-default`}>
                  {inner}
                </div>
              );
            }

            return (
              <Link key={card.title} href={href} className={`${cardClass} hover:-translate-y-1 hover:shadow-md`}>
                {inner}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
