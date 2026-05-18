interface FeatureCard {
  title: string;
  text: string;
}

const defaultCards: FeatureCard[] = [
  { title: "البيوت والبناء", text: "صور للبيوت الحجرية القديمة، الساحات، والأزقة مع وصف لكل صورة." },
  { title: "الحياة اليومية", text: "كيف كان الناس يتسوقون، يتنقلون، ويلتقون في الحارة والمضافات." },
  { title: "التعليم والمدرسة", text: "قصص وصور عن أولى الصفوف والمعلمين وكيف كانت الدراسة زمان." },
];

export default function FeatureCards({ cards = defaultCards }: { cards?: FeatureCard[] }) {
  return (
    <div className="grid sm:grid-cols-3 gap-4">
      {cards.map((card) => (
        <div key={card.title} className="rounded-xl bg-white shadow-sm p-4 border border-slate-100">
          <h4 className="font-semibold text-sm mb-2">{card.title}</h4>
          <p className="text-xs text-slate-600">{card.text}</p>
        </div>
      ))}
    </div>
  );
}
