import { ReactNode } from "react";

export interface OrbitItem {
  image: string;
  label: string;
}

export function OrbitLayout({
  title,
  subtitle,
  tags,
  centralImage,
  leftItems,
  rightItems,
  footerText,
  id
}: {
  id: string;
  title: string;
  subtitle: string;
  tags?: string[];
  centralImage: string;
  leftItems: OrbitItem[];
  rightItems: OrbitItem[];
  footerText?: ReactNode;
}) {
  return (
    <section id={id} className="py-24 bg-paper relative overflow-hidden">
       {/* Background glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />
       
       <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-16 relative">
             <h2 className="font-display text-5xl md:text-7xl text-gold font-semibold tracking-widest uppercase mb-6 drop-shadow-sm">
               {title}
             </h2>
             <div className="flex items-center justify-center gap-4">
               <div className="hidden sm:block h-px w-8 md:w-16 bg-gold/50" />
               <span className="font-mono text-[9px] md:text-xs uppercase tracking-[0.25em] text-cocoa font-bold">
                 {subtitle}
               </span>
               <div className="hidden sm:block h-px w-8 md:w-16 bg-gold/50" />
             </div>
             {tags && (
               <div className="flex flex-wrap justify-center gap-4 mt-6 font-mono text-[9px] md:text-[10px] text-cocoa uppercase tracking-widest font-semibold bg-beige/40 py-2.5 px-8 rounded-full max-w-fit mx-auto">
                  {tags.map((tag, idx) => (
                    <div key={idx} className="flex items-center gap-4 md:gap-6">
                      <span>{tag}</span>
                      {idx < tags.length - 1 && <span className="size-1.5 bg-gold rounded-full" />}
                    </div>
                  ))}
               </div>
             )}
          </div>

          {/* Orbit Container */}
          <div className="hidden lg:grid grid-cols-12 gap-4 items-center relative py-12">
             <div className="absolute inset-0 rounded-full border border-gold/10 opacity-30 pointer-events-none scale-105" />
             
             {/* Left Items */}
             <div className="col-span-3 flex flex-col justify-between h-[650px] relative z-20">
               {leftItems.map((item, idx) => (
                 <OrbitCircle key={idx} item={item} align="right" offset={idx === 1 ? -40 : 0} />
               ))}
             </div>
             
             {/* Central Image */}
             <div className="col-span-6 flex justify-center relative z-10">
               <div className="w-[480px] aspect-[3/4] relative">
                 <div className="absolute -inset-6 border border-gold/30 rounded-[200px] pointer-events-none scale-95" />
                 <img 
                   src={centralImage} 
                   alt="Central" 
                   className="w-full h-full object-cover object-top rounded-[180px] shadow-2xl shadow-cocoa/20 ring-4 ring-paper"
                   onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600'; }}
                 />
               </div>
             </div>

             {/* Right Items */}
             <div className="col-span-3 flex flex-col justify-between h-[650px] relative z-20">
               {rightItems.map((item, idx) => (
                 <OrbitCircle key={idx} item={item} align="left" offset={idx === 1 ? -40 : 0} />
               ))}
             </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden flex flex-col items-center gap-12">
             <div className="w-full max-w-[320px] aspect-[3/4] relative">
               <img 
                 src={centralImage} 
                 alt="Central" 
                 className="w-full h-full object-cover object-top rounded-[100px] border-4 border-paper shadow-xl"
               />
             </div>
             <div className="grid grid-cols-2 gap-4 sm:gap-8 w-full">
               {[...leftItems, ...rightItems].map((item, idx) => (
                 <OrbitCircle key={idx} item={item} align="center" />
               ))}
             </div>
          </div>

          {/* Footer */}
          {footerText && (
            <div className="mt-20 text-center flex flex-col gap-2 font-mono text-[9px] uppercase tracking-widest text-gold/80 border-t border-gold/20 pt-8 max-w-4xl mx-auto">
              {footerText}
            </div>
          )}
       </div>
    </section>
  );
}

function OrbitCircle({ item, align, offset = 0 }: { item: OrbitItem, align: "left" | "right" | "center", offset?: number }) {
  return (
    <div 
      className={`flex flex-col items-center group cursor-pointer transition-transform duration-500 hover:scale-105`}
      style={{ transform: `translateX(${align === 'left' ? -offset : align === 'right' ? offset : 0}px)` }}
    >
      <div className="w-32 h-32 md:w-36 md:h-36 rounded-full shadow-2xl shadow-cocoa/30 relative overflow-hidden mb-3 bg-peach">
         <div className="absolute inset-0 border-4 border-gold rounded-full z-10 pointer-events-none" />
         <div className="absolute inset-0 border-2 border-paper rounded-full m-1 z-10 pointer-events-none" />
         <div className="absolute inset-0 bg-gradient-to-br from-gold/30 to-transparent mix-blend-overlay z-10 pointer-events-none" />
         <img 
           src={item.image} 
           alt={item.label} 
           className="w-full h-full object-cover"
           onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1512496015851-a1c8f1922c06?auto=format&fit=crop&q=80&w=200'; }}
         />
      </div>
      <div className="bg-paper border border-gold/30 px-3 md:px-5 py-2 rounded-xl shadow-md relative overflow-hidden max-w-[140px] md:max-w-[160px]">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        <span className="font-display text-[11px] md:text-[13px] text-cocoa font-bold uppercase tracking-wider text-center block leading-tight">
          {item.label}
        </span>
      </div>
    </div>
  );
}
