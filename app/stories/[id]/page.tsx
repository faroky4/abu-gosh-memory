import Link from "next/link";
import Header from "@/app/components/site/Header";
import Footer from "@/app/components/site/Footer";
import Section from "@/app/components/site/Section";
import { stories } from "@/data/stories";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function StoryDetailsPage({ params }: Props) {
  const { id } = await params;

  const story = stories.find((s) => s.id === id);

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
            {story.videoUrl ? (
              <div
                className={[
                  "mb-6 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100",
                  story.isShort
                    ? "mx-auto aspect-[9/16] w-full max-w-sm"
                    : "aspect-video w-full",
                ].join(" ")}
              >
                <iframe
                  src={story.videoUrl}
                  title={story.videoTitle ?? story.title}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            ) : null}
            {story.coverImage ? (
              <img
                src={story.coverImage}
                alt={story.title}
                className="mb-6 h-full w-full rounded-2xl object-cover border border-slate-200"
              />
            ) : null}
            {story.content.map((p, idx) => (
              <p
                key={idx}
                className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4"
              >
                {p}
              </p>
            ))}
            {story.images?.length ? (
              <div className="mt-8">
                <h4 className="text-lg font-bold mb-3">صور من القصة</h4>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {story.images.map((image) => (
                    <img
                      key={image}
                      src={image}
                      alt={story.title}
                      className="h-36 sm:h-44 w-full rounded-xl object-cover border border-slate-200"
                    />
                  ))}
                </div>
              </div>
            ) : null}
          </article>
        </Section>
      </div>

      <Footer />
    </main>
  );
}
