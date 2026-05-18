interface Props {
  badge: string;
  title: string;
}

export default function PlaceholderSection({ badge, title }: Props) {
  return (
    <section className="bg-stone-50 flex-1 flex items-center justify-center py-28 px-5">
      <div className="text-center max-w-md">
        <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold tracking-widest bg-amber-100 text-amber-700 mb-7 uppercase">
          {badge}
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-5">
          {title}
        </h1>
        <p className="text-base text-stone-500 leading-relaxed">
          سيتم تطوير هذا القسم قريبًا.
        </p>
      </div>
    </section>
  );
}
