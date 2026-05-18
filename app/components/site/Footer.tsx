interface FooterDict {
  projectLabel: string;
  schoolName: string;
  yearLabel: string;
}

const defaultDict: FooterDict = {
  projectLabel: "مشروع طلاب",
  schoolName: "مدرسة أبو غوش الثانوية",
  yearLabel: "السنة الدراسية",
};

export default function Footer({ dict = defaultDict }: { dict?: FooterDict }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-white/80">
      <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-xs text-slate-500">
          {dict.projectLabel} <span className="font-semibold">{dict.schoolName}</span>
        </p>
        <p className="text-xs text-slate-400">
          {dict.yearLabel} {year} / {year + 1}
        </p>
      </div>
    </footer>
  );
}
