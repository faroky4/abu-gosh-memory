import Image from "next/image";

export default function MuseumFooter() {
  return (
    <footer className="bg-stone-900 border-t border-stone-700/50 px-6 py-8 text-center">
      <div className="relative h-8 w-20 mx-auto mb-4 opacity-50">
        <Image
          src="/images/branding/school-logo.png"
          alt="شعار مدرسة أبو غوش الثانوية"
          fill
          sizes="80px"
          className="object-contain"
        />
      </div>
      <p className="text-sm text-stone-500 leading-relaxed max-w-2xl mx-auto">
        يمكنك استكشاف الصور، القصص، الفيديوهات، والخريطة التفاعلية.
      </p>
      <p className="text-xs text-stone-700 mt-3 select-none">
        مشروع طلاب — مدرسة أبو غوش الثانوية
      </p>
    </footer>
  );
}
