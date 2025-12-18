import Link from "next/link";
import Header from "@/app/components/site/Header";
import Footer from "@/app/components/site/Footer";
import Section from "@/app/components/site/Section";
import { stories } from "@/data/stories";

type Props = {
  params: { id: string };
};

export default function StoryDetailsPage({ params }: Props) {
  const story = stories.find((s) => s.id === params.id);

  if (!story) {
    return (
      <main className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1">
          <Section title="القصة غير موجودة">
            <p className="text-sm text-slate-600 mb-4">
              ما لقينا قصة بهذا الرابط.
            </p>
            <Link
              href="/stories"
              className="text-sm font-semibold text-amber-700 hover:text-amber-800"
            >
              ← رجوع لكل القصص
            </Link>
          </Section>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1">
        <Section title={`"${story.title}"`} subtitle={story.personLabel}>
          <div className="mb-4 flex items-center justify-between gap-3 flex-wrap">
            <Link
              href="/stories"
              className="text-sm font-semibold text-amber-700 hover:text-amber-800"
            >
              ← رجوع لكل القصص
            </Link>

            {story.dateApprox ? (
              <span className="text-xs text-slate-500">{story.dateApprox}</span>
            ) : null}
          </div>

          {story.tags?.length ? (
            <div className="mb-6 flex flex-wrap gap-2">
              {story.tags.map((t) => (
                <span
                  key={t}
                  className="text-[11px] px-2 py-1 rounded-full bg-slate-100 text-slate-600"
                >
                  {t}
                </span>
              ))}
            </div>
          ) : null}

          <article className="rounded-2xl bg-white border border-slate-100 shadow-sm p-5">
            {story.content.map((p, idx) => (
              <p key={idx} className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                {p}
              </p>
            ))}
          </article>
        </Section>
      </div>

      <Footer />
    </main>
  );
}