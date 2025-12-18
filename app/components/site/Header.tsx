export default function Header() {
  return (
    <header className="w-full border-b bg-white/80 backdrop-blur sticky top-0 z-20">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-amber-700/90 flex items-center justify-center text-white text-sm font-bold">
            AG
          </div>
          <div className="leading-tight">
            <h1 className="text-base font-semibold">حكاية أبو غوش</h1>
            <p className="text-xs text-slate-500">بين الماضي والحاضر</p>
          </div>
        </div>

        <nav className="hidden sm:flex gap-4 text-sm">
          <a href="#past" className="hover:text-amber-700 transition">أبو غوش زمان</a>
          <a href="#present" className="hover:text-amber-700 transition">أبو غوش اليوم</a>
          <a href="#stories" className="hover:text-amber-700 transition">قصص أهل البلد</a>
          <a href="/stories" className="hover:text-amber-700 transition">كل القصص</a>
          <a href="#map" className="hover:text-amber-700 transition">الخريطة</a>
          <a href="#future" className="hover:text-amber-700 transition">المستقبل</a>
        </nav>
      </div>
    </header>
  );
}