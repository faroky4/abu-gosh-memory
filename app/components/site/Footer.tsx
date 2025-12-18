export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-white/80">
      <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-xs text-slate-500">
          مشروع طلاب <span className="font-semibold">مدرسة أبو غوش الثانوية</span>
        </p>
        <p className="text-xs text-slate-400">
          السنة الدراسية {year} / {year + 1}
        </p>
      </div>
    </footer>
  );
}