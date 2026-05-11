import Link from "next/link";

const quickLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/#about", label: "عن المدرسة" },
  { href: "/#news", label: "الأخبار" },
  { href: "/#students", label: "الطلاب" },
  { href: "/heritage", label: "حكاية أبو غوش" },
];

export default function SchoolFooter() {
  return (
    <footer className="bg-stone-900 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 pt-12 pb-8">

        {/* 3-column grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 mb-10">

          {/* Col 1: Identity */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-amber-700 flex items-center justify-center text-white font-bold text-sm shrink-0">
                م.أ
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
              روابط سريعة
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
              التواصل
            </p>
            <ul className="flex flex-col gap-4">
              <li>
                <p className="text-xs text-stone-500 mb-1">البريد الإلكتروني</p>
                <p className="text-sm text-stone-300">info@abugoshschool.org</p>
              </li>
              <li>
                <p className="text-xs text-stone-500 mb-1">الهاتف</p>
                <p className="text-sm text-stone-400">سيتم التحديث لاحقًا</p>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6">
          <p className="text-xs text-stone-500 text-center">
            © 2026 مدرسة أبو غوش الثانوية. جميع الحقوق محفوظة.
          </p>
        </div>

      </div>
    </footer>
  );
}
