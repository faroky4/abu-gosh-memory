import Link from "next/link";
import type { Locale } from "@/lib/i18n";

interface CTADict {
  title: string;
  text: string;
  button: string;
}

const defaultDict: CTADict = {
  title: "المستقبل الرقمي للمدرسة",
  text: "نسعى إلى تطوير منصة تعليمية وتفاعلية حديثة تربط الطلاب، المدرسة، والمجتمع.",
  button: "العودة إلى الرئيسية",
};

export default function PortalCTA({
  dict = defaultDict,
  lang,
}: {
  dict?: CTADict;
  lang?: Locale;
}) {
  const homeHref = lang ? `/${lang}` : "/";

  return (
    <section className="bg-stone-50 pb-20 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-stone-800 rounded-2xl px-8 sm:px-14 py-12 sm:py-16 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="text-center sm:text-right max-w-lg">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
              {dict.title}
            </h2>
            <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
              {dict.text}
            </p>
          </div>

          <Link
            href={homeHref}
            className="shrink-0 px-7 py-3 rounded-xl text-sm font-semibold bg-amber-600 text-white hover:bg-amber-700 transition-colors duration-150 whitespace-nowrap"
          >
            {dict.button}
          </Link>
        </div>
      </div>
    </section>
  );
}
