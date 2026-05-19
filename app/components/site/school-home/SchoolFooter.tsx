import Link from "next/link";
import Image from "next/image";
import type { Locale, NavDictionary } from "@/lib/i18n";

interface FooterDict {
  quickLinksLabel: string;
  contactLabel: string;
  emailLabel: string;
  phoneLabel: string;
  phonePlaceholder: string;
  copyright: string;
}

const defaultFooterDict: FooterDict = {
  quickLinksLabel: "روابط سريعة",
  contactLabel: "التواصل",
  emailLabel: "البريد الإلكتروني",
  phoneLabel: "الهاتف",
  phonePlaceholder: "سيتم التحديث لاحقًا",
  copyright: "© 2026 مدرسة أبو غوش الثانوية. جميع الحقوق محفوظة.",
};

const defaultNavDict: NavDictionary = {
  home: "الرئيسية",
  about: "عن المدرسة",
  news: "الأخبار",
  students: "الطلاب",
  heritage: "حكاية أبو غوش",
  contact: "تواصل",
  portal: "البوابة الإلكترونية",
};

interface FooterProps {
  lang?: Locale;
  navDict?: NavDictionary;
  footerDict?: FooterDict;
}

export default function SchoolFooter({
  lang,
  navDict = defaultNavDict,
  footerDict = defaultFooterDict,
}: FooterProps) {
  // Build hrefs that are lang-aware when a locale is provided
  const homeHref = lang ? `/${lang}` : "/";
  const anchorPrefix = lang ? `/${lang}` : "";

  const quickLinks = [
    { href: homeHref, label: navDict.home },
    { href: `${anchorPrefix}/#about`, label: navDict.about },
    { href: `${anchorPrefix}/#news`, label: navDict.news },
    { href: `${anchorPrefix}/#students`, label: navDict.students },
    { href: lang ? `/${lang}/heritage` : "/heritage", label: navDict.heritage },
  ];

  return (
    <footer className="bg-stone-900 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 pt-12 pb-8">

        {/* 3-column grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 mb-10">

          {/* Col 1: Identity */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative h-9 w-24 shrink-0">
                <Image
                  src="/images/branding/school-logo.png"
                  alt="شعار مدرسة أبو غوش الثانوية"
                  fill
                  sizes="96px"
                  className="object-contain opacity-70"
                />
              </div>
              <div className="leading-tight">
                <p className="text-sm font-bold text-white">مدرسة أبو غوش الثانوية</p>
                <p className="text-xs text-stone-400 mt-0.5">أبو غوش - القدس</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              موقع المدرسة الرسمي ومنصة لعرض أخبار المدرسة، مشاريع الطلاب،
              وحكاية أبو غوش.
            </p>
          </div>

          {/* Col 2: Quick links */}
          <div>
            <p className="text-xs font-semibold tracking-widest text-amber-500 mb-5">
              {footerDict.quickLinksLabel}
            </p>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-stone-400 hover:text-amber-400 transition-colors duration-150"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <p className="text-xs font-semibold tracking-widest text-amber-500 mb-5">
              {footerDict.contactLabel}
            </p>
            <ul className="flex flex-col gap-4">
              <li>
                <p className="text-xs text-stone-500 mb-1">{footerDict.emailLabel}</p>
                <p className="text-sm text-stone-300">info@abugoshschool.org</p>
              </li>
              <li>
                <p className="text-xs text-stone-500 mb-1">{footerDict.phoneLabel}</p>
                <p className="text-sm text-stone-400">{footerDict.phonePlaceholder}</p>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6">
          <p className="text-xs text-stone-500 text-center">
            {footerDict.copyright}
          </p>
        </div>

      </div>
    </footer>
  );
}
