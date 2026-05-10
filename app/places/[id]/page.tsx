import Header from "../../components/site/Header";
import Footer from "../../components/site/Footer";
import Section from "../../components/site/Section";
import BeforeAfterSlider from "../../components/site/BeforeAfterSlider";
import InteractiveMap from "../../components/site/InteractiveMap";

import { places } from "@/data/places";
import { stories } from "@/data/stories";

type Props = {
  params: { id: string };
};

export default async function PlacePage({ params }: Props) {
  const { id } = await params;

  const place = places.find((p) => p.id === id);
  
  if (!place) {
    return (
      <main className="min-h-screen flex flex-col">
        <Header />
        <Section title="المكان غير موجود">
          <p className="text-sm text-slate-600">
            لم يتم العثور على هذا المكان.
          </p>
        </Section>
        <Footer />
      </main>
    );
  }

  const relatedStories = stories.filter((s) =>
    place.storyIds?.includes(s.id)
  );

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1">
        {/* عنوان المكان */}
        <Section title={place.title} subtitle={place.description}>
          {place.tags?.length && (
            <div className="flex flex-wrap gap-2 mb-4">
              {place.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </Section>

        {/* مقارنة زمان / اليوم */}
        {place.beforeSrc && place.afterSrc && (
          <Section
            title="زمان واليوم"
            subtitle="اسحب الشريط وشوف كيف تغيّر المكان"
            className="border-t bg-slate-50/60"
          >
            <BeforeAfterSlider
              beforeSrc={place.beforeSrc}
              afterSrc={place.afterSrc}
              initial={place.compareInitial ?? 50}
              alt={`مقارنة ${place.title}`}
            />
          </Section>
        )}

        {/* الخريطة */}
        <Section
          title="الموقع على الخريطة"
          subtitle="موقع المكان داخل أبو غوش"
          className="border-t"
        >
          <InteractiveMap />
        </Section>

        {/* القصص المرتبطة */}
        {relatedStories.length > 0 && (
          <Section
            title="قصص مرتبطة بالمكان"
            subtitle="مقابلات وذكريات مرتبطة بهذا المكان"
            className="border-t bg-slate-50/60"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              {relatedStories.map((story) => (
                <a
                  key={story.id}
                  href={`/stories/${story.id}`}
                  className="rounded-xl bg-white border border-slate-100 p-4 shadow-sm hover:shadow transition"
                >
                  <h4 className="font-semibold text-sm mb-1">
                    {story.title}
                  </h4>
                  <p className="text-xs text-slate-600">
                    {story.excerpt}
                  </p>
                </a>
              ))}
            </div>
          </Section>
        )}
      </div>

      <Footer />
    </main>
  );
}