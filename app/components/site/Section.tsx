import type { ReactNode } from "react";

type Props = {
  id?: string;
  title: string;
  subtitle?: string;
  className?: string;
  children: ReactNode;
};

export default function Section({ id, title, subtitle, className = "", children }: Props) {
  return (
    <section id={id} className={`max-w-5xl mx-auto px-4 py-10 sm:py-14 ${className}`}>
      <h3 className="text-xl sm:text-2xl font-bold mb-3">{title}</h3>
      {subtitle ? (
        <p className="text-sm sm:text-base text-slate-600 mb-6">{subtitle}</p>
      ) : null}
      {children}
    </section>
  );
}