import Link from "next/link";
import Header from "@/app/components/site/Header";
import Footer from "@/app/components/site/Footer";
import Section from "@/app/components/site/Section";
import { stories } from "@/data/stories";

export default function StoriesPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1">
        <Section
          title="قصص أهل البلد"
          subtitle="هنا كل القصص التي جمعها الطلاب من كبار السن في أبو غوش. اضغطي على أي قصة لقراءتها كاملة."
        >
          <div className="grid sm:grid-cols-2 gap-4">
            {stories.map((s) => (
              <Link
                key={s.id}
                href={`/stories/${s.id}`}
                className="rounded-xl bg-white shadow-sm p-4 border border-slate-100 hover:border-amber-200 hover:shadow transition"
              >
                <h4 className="font-semibold text-sm mb-1">{s.title}</h4>
                <p className="text-xs text-slate-500 mb-2">
                  {s.personLabel}
                  {s.dateApprox ? <span> • {s.dateApprox}</span> : null}
                </p>
                <p className="text-xs text-slate-600">{s.excerpt}</p>

                {s.tags?.length ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] px-2 py-1 rounded-full bg-slate-100 text-slate-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                ) : null}

                <div className="mt-4 text-xs font-semibold text-amber-700">
                  اقرأ/ي القصة كاملة →
                </div>
              </Link>
            ))}
          </div>
        </Section>
      </div>

      <Footer />
    </main>
  );
}