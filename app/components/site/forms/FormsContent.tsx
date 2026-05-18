const schoolForms = [
  {
    title: "نموذج غياب طالب",
    description: "يُستخدم للإبلاغ عن غياب الطالب وتوثيقه رسميًا لدى الإدارة.",
  },
  {
    title: "موافقة ولي أمر على نشاط",
    description: "نموذج الموافقة الرسمية للمشاركة في الرحلات والأنشطة المدرسية.",
  },
  {
    title: "تسجيل للمشاركة في فعالية",
    description: "نموذج التسجيل للانضمام إلى فعاليات وبرامج المدرسة المختلفة.",
  },
];

const importantFiles = [
  {
    title: "قوانين المدرسة",
    description: "وثيقة تحتوي على الأنظمة والسياسات المدرسية المعمول بها.",
  },
  {
    title: "رزنامة السنة الدراسية",
    description: "جدول العطل الرسمية والمناسبات للعام الدراسي الحالي.",
  },
  {
    title: "جدول الامتحانات",
    description: "مواعيد الاختبارات الفصلية والسنوية لجميع المراحل.",
  },
];

const heritageContributions = [
  {
    title: "أرسل صورة قديمة",
    description: "شارك صورًا تاريخية من أرشيفك الشخصي لإثراء مشروع التراث الرقمي.",
  },
  {
    title: "أرسل قصة أو معلومة",
    description: "أضف رواية شفهية أو معلومة تاريخية تخص أبو غوش وذاكرتها.",
  },
  {
    title: "اقترح مكانًا على الخريطة",
    description: "رشّح موقعًا ذا قيمة تراثية ليُضاف إلى الخريطة التفاعلية.",
  },
];

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="mb-8">
      <h2 className="text-xl sm:text-2xl font-bold text-stone-900">{title}</h2>
      <div className="mt-2.5 w-10 h-0.5 bg-amber-500 rounded-full" />
    </div>
  );
}

function DisabledButton({ label }: { label: string }) {
  return (
    <span className="inline-block mt-4 px-4 py-2 rounded-lg text-xs font-semibold bg-stone-100 text-stone-400 cursor-default select-none">
      {label}
    </span>
  );
}

export default function FormsContent() {
  return (
    <div className="flex-1 bg-stone-50">

      {/* Hero */}
      <section className="border-b border-stone-200/60">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 py-20 sm:py-24 text-center">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold tracking-widest bg-amber-100 text-amber-700 mb-7 uppercase">
            الخدمات
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-stone-900 mb-5 leading-tight">
            نماذج وملفات
          </h1>
          <p className="text-base sm:text-lg text-stone-500 leading-relaxed max-w-xl mx-auto">
            مركز للوصول إلى النماذج المدرسية، الملفات المهمة، وروابط المشاركة في مشروع حكاية أبو غوش.
          </p>
        </div>
      </section>

      {/* School forms */}
      <section className="py-14 sm:py-16">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <SectionHeading title="نماذج مدرسية" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {schoolForms.map((f) => (
              <div
                key={f.title}
                className="bg-white rounded-2xl border border-stone-100 shadow-sm p-6 flex flex-col"
              >
                <h3 className="text-base font-bold text-stone-900 mb-2">{f.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed flex-1">{f.description}</p>
                <DisabledButton label="سيتم إضافة الرابط قريبًا" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important files */}
      <section className="py-14 sm:py-16 border-t border-stone-200/50">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <SectionHeading title="ملفات مهمة" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {importantFiles.map((f) => (
              <div
                key={f.title}
                className="bg-white rounded-2xl border border-stone-100 shadow-sm p-6 flex flex-col"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-base font-bold text-stone-900">{f.title}</h3>
                  <span className="shrink-0 px-2 py-0.5 rounded text-xs font-semibold bg-amber-100 text-amber-700">
                    PDF
                  </span>
                </div>
                <p className="text-sm text-stone-500 leading-relaxed flex-1">{f.description}</p>
                <DisabledButton label="قريبًا" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage contributions */}
      <section className="py-14 sm:py-16 bg-stone-100/60 border-t border-stone-200/50">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <SectionHeading title="شارك بذاكرة أبو غوش" />
          <p className="text-sm text-stone-500 mb-8 -mt-4 leading-relaxed max-w-lg">
            ساهم في الحفاظ على تراث المدينة من خلال إرسال صور، قصص، أو اقتراحات لمشروع حكاية أبو غوش.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {heritageContributions.map((f) => (
              <div
                key={f.title}
                className="bg-white rounded-2xl border border-stone-100 shadow-sm p-6 flex flex-col"
              >
                <h3 className="text-base font-bold text-stone-900 mb-2">{f.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed flex-1">{f.description}</p>
                <DisabledButton label="قريبًا" />
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
