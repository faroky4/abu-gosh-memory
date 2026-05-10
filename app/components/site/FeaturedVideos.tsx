import Link from "next/link";
import Image from "next/image";
import { stories } from "@/data/stories";

const featured = stories.filter((s) => s.videoUrl).slice(0, 3);

export default function FeaturedVideos() {
  if (featured.length === 0) return null;

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {featured.map((s) => (
        <Link
          key={s.id}
          href={`/stories/${s.id}`}
          className="group rounded-xl bg-white border border-slate-100 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-200"
        >
          {/* Thumbnail */}
          <div className="relative aspect-video bg-slate-100 shrink-0">
            {s.coverImage ? (
              <Image
                src={s.coverImage}
                alt={s.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-amber-50">
                <svg
                  className="w-10 h-10 text-amber-300"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            )}
            {/* Play overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="w-11 h-11 rounded-full bg-black/40 flex items-center justify-center group-hover:bg-black/55 transition-colors duration-200">
                <svg
                  className="w-5 h-5 text-white translate-x-0.5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </div>
          </div>

          {/* Body */}
          <div className="p-4 flex flex-col flex-1">
            <h4 className="font-semibold text-sm leading-snug mb-1 text-slate-800 group-hover:text-amber-800 transition-colors duration-150">
              {s.title}
            </h4>

            <p className="text-xs text-slate-500 mb-2">{s.personLabel}</p>

            <p className="text-xs text-slate-600 leading-relaxed mb-3 flex-1">
              {s.excerpt}
            </p>

            {s.tags?.length ? (
              <div className="flex flex-wrap gap-1.5">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-500"
                  >
                    {t}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        </Link>
      ))}
    </div>
  );
}
