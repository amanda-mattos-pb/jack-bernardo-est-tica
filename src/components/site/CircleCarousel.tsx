export interface CarouselItem {
  image: string;
  title: string;
  description: string;
}

export function CircleCarousel({
  title,
  subtitle,
  items
}: {
  title: string;
  subtitle: string;
  items: CarouselItem[];
}) {
  return (
    <section className="py-24 bg-paper relative overflow-hidden border-y border-gold/15">
       <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
             <span className="font-mono text-[9px] text-terracotta uppercase tracking-[0.25em] font-bold mb-3 block">
               {subtitle}
             </span>
             <h2 className="font-display text-4xl md:text-5xl text-cocoa font-semibold mb-6">
               {title}
             </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4">
             {items.map((item, idx) => (
               <div key={idx} className="flex flex-col items-center text-center group cursor-pointer">
                 <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden shadow-lg border border-gold/20 mb-6 bg-peach">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1512496015851-a1c8f1922c06?auto=format&fit=crop&q=80&w=200'; }}
                    />
                 </div>
                 <h3 className="font-display text-sm md:text-[15px] text-cocoa font-bold uppercase tracking-wider mb-3 leading-snug">
                   {item.title}
                 </h3>
                 <div className="w-8 h-px bg-terracotta/40 mb-3" />
                 <p className="text-[10px] md:text-[11px] text-ink/70 leading-relaxed mb-6 h-12 hidden sm:block">
                   {item.description}
                 </p>
                 <button className="px-5 py-2 border border-terracotta/30 text-terracotta text-[9px] uppercase font-bold tracking-widest rounded-md group-hover:bg-terracotta group-hover:text-paper transition-colors shadow-sm">
                   Saiba Mais
                 </button>
               </div>
             ))}
          </div>
       </div>
    </section>
  );
}
