interface AboutDict {
  badge: string;
  title: string;
  para1: string;
  para2: string;
  cards: Array<{ title: string; text: string }>;
}

const CARD_ICONS = ["📖", "🤝", "🏘️"];

const defaultDict: AboutDict = {
  badge: "مدرستنا",
  title: "مدرسة أبو غوش الثانوية",
  para1: "مدرستنا ليست مجرد مكان للتعلّم — إنها فضاء يجمع بين الهوية والانتماء والتطلع نحو المستقبل.",
  para2: "نسعى إلى تخريج جيل يحمل قيم مجتمعه، يفخر بتراث أبو غوش، ويمتلك المهارات والمعرفة اللازمة لبناء غدٍ أفضل.",
  cards: [
    {
      title: "رؤية تربوية",
      text: "نؤمن بأن التعليم الحقيقي يبني الشخصية ويرسّخ القيم، ولا يقتصر على المناهج وحدها.",
    },
    {
      title: "بيئة داعمة",
      text: "نوفّر بيئة آمنة ومحفّزة يشعر فيها كل طالب وطالبة بالانتماء والاهتمام.",
    },
    {
      title: "ارتباط بالمجتمع",
      text: "نربط طلابنا بجذورهم وتراثهم، ونشركهم في صناعة مستقبل أبو غوش.",
    },
  ],
};

export default function AboutSchool({ dict = defaultDict }: { dict?: AboutDict }) {
  return (
    <section id="about" className="bg-stone-50 border-t border-stone-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          {/* Right: text content */}
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest text-amber-700 bg-amber-100 px-3 py-1 rounded-full mb-6">
              {dict.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 leading-snug mb-5">
              {dict.title}
            </h2>
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed mb-4">
              {dict.para1}
            </p>
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
              {dict.para2}
            </p>
          </div>

          {/* Left: feature cards */}
          <div className="flex flex-col gap-5">
            {dict.cards.map((card, i) => (
              <div
                key={card.title}
                className="flex items-start gap-4 bg-white rounded-2xl border border-stone-100 shadow-sm px-5 py-5"
              >
                <div className="w-11 h-11 rounded-xl bg-amber-100 flex items-center justify-center text-xl shrink-0">
                  {CARD_ICONS[i]}
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-stone-800 mb-1">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-500 leading-relaxed">
                    {card.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
