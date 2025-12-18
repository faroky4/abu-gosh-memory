export default function Hero() {
  return (
    <section className="border-b bg-gradient-to-b from-amber-50/70 to-slate-50">
      <div className="max-w-5xl mx-auto px-4 py-10 sm:py-16 flex flex-col gap-8 sm:flex-row sm:items-center">
        <div className="flex-1">
          <p className="text-xs font-semibold tracking-wide text-amber-700 mb-2">
            مشروع طلاب مدرسة أبو غوش الثانوية
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-relaxed">
            نحفظ حكايات البلد، <span className="text-amber-700">ونربط بين الأجيال.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 mb-6 leading-relaxed">
            نجمع صورًا قديمة وحديثة، قصصًا من كبار السن، وذكريات الطلاب عن الحياة في أبو غوش – زمان واليوم.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#past"
              className="px-4 py-2 rounded-full text-sm font-semibold bg-amber-700 text-white hover:bg-amber-800 transition"
            >
              ابدأ من الماضي
            </a>
            <a
              href="#present"
              className="px-4 py-2 rounded-full text-sm font-semibold border border-amber-700/30 text-amber-800 hover:bg-amber-50 transition"
            >
              شاهد الحاضر
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="relative w-full max-w-sm">
            <div className="aspect-[4/3] rounded-2xl bg-slate-200 overflow-hidden shadow-md border border-white/60">
              <div className="w-full h-full grid grid-cols-2">
                <div className="h-full bg-[url('/images/old-placeholder.jpg')] bg-cover bg-center opacity-90" />
                <div className="h-full bg-[url('/images/new-placeholder.jpg')] bg-cover bg-center" />
              </div>
            </div>
            <div className="absolute -bottom-4 left-4 bg-white/90 rounded-xl px-3 py-2 shadow text-xs text-slate-700">
              مثال: صورة لنفس المكان زمان واليوم
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}