import { ReactNode } from "react";

interface Benefit {
  icon: ReactNode;
  title: string;
  description: string;
}

export function BenefitGrid({ benefits }: { benefits: Benefit[] }) {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8`}>
      {benefits.map((benefit, idx) => (
        <div key={idx} className="flex flex-col items-center text-center space-y-3">
          <div className="size-14 rounded-full border border-gold/40 bg-paper shadow-sm flex items-center justify-center text-gold mb-2">
            {benefit.icon}
          </div>
          <h4 className="font-display text-[15px] text-cocoa font-semibold leading-tight uppercase tracking-wide">
            {benefit.title}
          </h4>
          <p className="text-[11px] text-ink/80 leading-relaxed max-w-[180px]">
            {benefit.description}
          </p>
        </div>
      ))}
    </div>
  );
}
