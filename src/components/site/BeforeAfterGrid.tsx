interface BeforeAfterItem {
  title: string;
  beforeImg?: string;
  afterImg?: string;
}

export function BeforeAfterGrid({ items }: { items: BeforeAfterItem[] }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
      {items.map((item, idx) => (
        <div key={idx} className="bg-paper rounded-[1.5rem] border border-gold/20 overflow-hidden shadow-sm flex flex-col group">
          <div className="grid grid-cols-2 h-40 md:h-48 relative">
             <div className="absolute top-2 left-2 bg-paper/90 text-[8px] font-mono font-bold uppercase px-2 py-0.5 rounded backdrop-blur-sm z-10 text-cocoa">Antes</div>
             <div className="absolute top-2 right-2 bg-paper/90 text-[8px] font-mono font-bold uppercase px-2 py-0.5 rounded backdrop-blur-sm z-10 text-cocoa">Depois</div>
             <div className="w-full h-full relative overflow-hidden border-r border-gold/20">
               {item.beforeImg ? (
                 <img src={item.beforeImg} alt="Antes" className="absolute inset-0 w-full h-full object-cover" />
               ) : (
                 <div className="absolute inset-0 w-full h-full bg-peach/50 flex items-center justify-center text-[10px] text-cocoa/50 font-mono">Sem Foto</div>
               )}
             </div>
             <div className="w-full h-full relative overflow-hidden">
               {item.afterImg ? (
                 <img src={item.afterImg} alt="Depois" className="absolute inset-0 w-full h-full object-cover" />
               ) : (
                 <div className="absolute inset-0 w-full h-full bg-peach/30 flex items-center justify-center text-[10px] text-cocoa/50 font-mono">Sem Foto</div>
               )}
             </div>
          </div>
          <div className="p-3.5 text-center bg-gradient-to-b from-paper to-beige/50">
            <h4 className="font-display text-sm text-cocoa font-semibold uppercase tracking-wider">{item.title}</h4>
          </div>
        </div>
      ))}
    </div>
  );
}
