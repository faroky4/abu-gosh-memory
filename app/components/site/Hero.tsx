import Link from "next/link";

export default function Hero() {
  return (
    <section className="border-b bg-gradient-to-b from-amber-50/70 to-slate-50">
      <div className="max-w-6xl mx-auto px-4 py-12 sm:py-20 grid gap-10 lg:grid-cols-2 lg:items-center">
        {/* نص الهيرو */}
        <div>
          <p className="text-sm font-semibold tracking-wide text-amber-700 mb-3">
            مشروع طلاب مدرسة أبو غوش الثانوية
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.15] mb-6">
            حكاية أبو غوش{" "}
            <span className="text-amber-700">بين الماضي والحاضر</span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed mb-8">
            نجمع صورًا قديمة وحديثة، قصصًا من كبار السن، وذكريات الطلاب عن
            الحياة في أبو غوش — لتكون ذاكرة حيّة تكبر سنة بعد سنة.
          </p>

          <div className="flex flex-wrap gap-3">
            <div className="flex flex-wrap gap-3">
              <Link
                href="/#past"
                className="px-5 py-2.5 rounded-full text-sm sm:text-base font-semibold bg-amber-700 text-white hover:bg-amber-800 transition"
              >
                ابدأ من الماضي
              </Link>

              <Link
                href="/compare"
                className="px-5 py-2.5 rounded-full text-sm sm:text-base font-semibold border border-amber-700/30 text-amber-800 hover:bg-amber-50 transition"
              >
                شاهد زمان/اليوم
              </Link>

              <Link
                href="/stories"
                className="px-5 py-2.5 rounded-full text-sm sm:text-base font-semibold border border-slate-200 text-slate-700 hover:bg-white transition"
              >
                قصص أهل البلد
              </Link>
            </div>
          </div>

          {/* سطر “تنفيذ الطلاب” تحت الأزرار */}
          <div className="mt-8 rounded-2xl bg-white/70 border border-slate-200 p-4">
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              ✅ هذا الموقع من تنفيذ{" "}
              <span className="font-semibold">طلاب مدرسة أبو غوش الثانوية</span>
              ، ضمن مشروع يجمع بين الماضي والحاضر، تمهيدًا لإقامة{" "}
              <span className="font-semibold"> متحف مدرسي </span>
              يعرض القصص والصور والتوثيق.
            </p>
          </div>
        </div>

        {/* صورة الهيرو */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-xl">
            <div className="aspect-[16/10] rounded-3xl bg-slate-200 overflow-hidden shadow-lg border border-white/70">
              <div className="w-full h-full grid grid-cols-2">
                <div className="h-full bg-[url('/images/old-placeholder.jpg')] bg-cover bg-center opacity-95" />
                <div className="h-full bg-[url('/images/new-placeholder.jpg')] bg-cover bg-center" />
              </div>
            </div>

            <div className="absolute -bottom-5 left-5 bg-white/90 rounded-2xl px-4 py-3 shadow text-sm text-slate-700 border border-slate-100">
             نفس المكان زمان واليوم
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
