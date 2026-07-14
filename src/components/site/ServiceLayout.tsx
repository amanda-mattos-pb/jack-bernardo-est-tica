import { ReactNode } from "react";

export function ServiceLayout({ 
  title, 
  subtitle, 
  headerTags,
  description,
  leftContent, 
  rightContent,
  bottomContent,
  id
}: { 
  id: string;
  title: string; 
  subtitle: string; 
  headerTags: string[];
  description?: string;
  leftContent: ReactNode; 
  rightContent: ReactNode;
  bottomContent?: ReactNode;
}) {
  return (
    <section id={id} className="py-24 bg-gradient-to-b from-paper via-beige/30 to-paper overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 relative">
           <h2 className="font-display text-5xl md:text-7xl text-cocoa font-semibold tracking-tight uppercase mb-6">
             {title}
           </h2>
           <div className="flex items-center justify-center gap-4 mb-8">
             <div className="h-px w-16 md:w-32 bg-gold/50" />
             <span className="font-mono text-xs md:text-sm uppercase tracking-[0.25em] text-gold font-medium">
               {subtitle}
             </span>
             <div className="h-px w-16 md:w-32 bg-gold/50" />
           </div>

           <div className="flex flex-wrap justify-center gap-4 md:gap-6 font-mono text-[9px] md:text-[10px] text-cocoa uppercase tracking-widest font-semibold bg-beige/40 border border-gold/30 py-3.5 px-10 rounded-full max-w-fit mx-auto shadow-sm">
              {headerTags.map((tag, idx) => (
                <div key={idx} className="flex items-center gap-4 md:gap-6">
                  <span>{tag}</span>
                  {idx < headerTags.length - 1 && <span className="size-1 bg-gold rounded-full" />}
                </div>
              ))}
           </div>
           
           {description && (
             <p className="max-w-3xl mx-auto mt-12 text-base md:text-lg text-ink/90 leading-relaxed font-medium">
               {description}
             </p>
           )}
        </div>

        {/* Content Split */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-12">
          <div className="lg:col-span-5 space-y-10">
            {leftContent}
          </div>
          <div className="lg:col-span-7">
            {rightContent}
          </div>
        </div>

        {/* Bottom Benefits */}
        {bottomContent && (
          <div className="mt-24 pt-16 border-t border-gold/30 relative">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-paper px-4 text-gold">
               ✦
             </div>
             <h3 className="font-display text-2xl md:text-3xl text-center text-cocoa uppercase tracking-widest mb-12">
               Benefícios do Tratamento
             </h3>
             {bottomContent}
          </div>
        )}
      </div>
    </section>
  );
}
