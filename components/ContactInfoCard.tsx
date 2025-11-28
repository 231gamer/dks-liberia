import { ReactNode } from 'react';

interface ContactInfoCardProps {
  icon: ReactNode;
  title: string;
  lines: string[];
  cta: { label: string; href?: string };
}

export default function ContactInfoCard({ icon, title, lines, cta }: ContactInfoCardProps) {
  return (
    <div className="group flex flex-col items-center gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-md text-center transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl">
      <div
        aria-label={title}
        className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-blue-600 shadow-inner ring-4 ring-white transition group-hover:scale-105 group-hover:bg-primary group-hover:text-white"
      >
        <span className="text-3xl text-blue-600 transition-colors group-hover:text-white">
          {icon}
        </span>
      </div>
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <div className="text-gray-600 leading-relaxed">
          {lines.map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </div>
      </div>
      <a
        href={cta.href ?? '#'}
        className="text-primary font-semibold transition-colors group-hover:text-primary/80"
      >
        {cta.label}
      </a>
    </div>
  );
}
