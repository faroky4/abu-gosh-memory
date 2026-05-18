import Link from "next/link";
import { Newspaper, Sparkles, Landmark, BookOpen, FileText, Clock3, LucideIcon } from "lucide-react";

interface Service {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  coming: boolean;
}

const services: Service[] = [
  {
    title: "أخبار المدرسة",
    description: "آخر التحديثات، الفعاليات، والإعلانات.",
    href: "/news",
    icon: Newspaper,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    coming: false,
  },
  {
    title: "مشاريع الطلاب",
    description: "أعمال ومبادرات الطلاب داخل المدرسة.",
    href: "/students-projects",
    icon: Sparkles,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-700",
    coming: false,
  },
  {
    title: "حكاية أبو غوش",
    description: "الدخول إلى مشروع التراث والأرشيف الرقمي.",
    href: "/heritage",
    icon: Landmark,
    iconBg: "bg-stone-100",
    iconColor: "text-stone-700",
    coming: false,
  },
  {
    title: "روابط تعليمية",
    description: "منصات تعليمية وروابط مفيدة للطلاب.",
    href: "/resources",
    icon: BookOpen,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    coming: false,
  },
  {
    title: "نماذج وملفات",
    description: "روابط ونماذج سيتم إضافتها لاحقًا.",
    href: "/forms",
    icon: FileText,
    iconBg: "bg-stone-100",
    iconColor: "text-stone-500",
    coming: false,
  },
  {
    title: "قريبًا",
    description: "سيتم إضافة خدمات رقمية جديدة مستقبلًا.",
    href: "",
    icon: Clock3,
    iconBg: "bg-stone-50",
    iconColor: "text-stone-400",
    coming: true,
  },
];

export default function PortalGrid() {
  return (
    <section className="bg-stone-50 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((s) => {
            const cardClass = `group relative bg-white rounded-2xl shadow-sm border border-stone-100 p-7 flex flex-col gap-4 transition-all duration-200`;
            const inner = (
              <>
                {/* Icon container */}
                <div
                  className={`w-11 h-11 rounded-xl ${s.iconBg} flex items-center justify-center shrink-0`}
                >
                  <s.icon size={20} className={s.iconColor} strokeWidth={1.75} />
                </div>

                {/* Text */}
                <div className="flex flex-col gap-1.5 flex-1">
                  <h2 className="text-base sm:text-lg font-bold text-stone-900 leading-snug">
                    {s.title}
                  </h2>
                  <p className="text-sm text-stone-500 leading-relaxed">
                    {s.description}
                  </p>
                </div>

                {/* Arrow indicator */}
                {!s.coming && (
                  <span className="text-xs font-semibold text-amber-600 group-hover:text-amber-700 transition-colors duration-150 mt-1">
                    الدخول ←
                  </span>
                )}
              </>
            );

            if (s.coming) {
              return (
                <div key={s.title} className={`${cardClass} opacity-60 cursor-default`}>
                  {inner}
                </div>
              );
            }

            return (
              <Link
                key={s.title}
                href={s.href}
                className={`${cardClass} hover:-translate-y-1 hover:shadow-md`}
              >
                {inner}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
