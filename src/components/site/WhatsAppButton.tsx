export function WhatsAppButton() {
  const phone = "5581992939016";
  const text = encodeURIComponent("Olá Jack, gostaria de agendar uma avaliação.");
  return (
    <a
      href={`https://wa.me/${phone}?text=${text}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale comigo no WhatsApp"
      className="fixed bottom-6 right-6 z-[60] flex items-center gap-3 bg-[#25D366] text-white pl-3 pr-5 py-3 rounded-full shadow-2xl shadow-ink/20 hover:scale-105 transition-transform ring-1 ring-black/5"
    >
      <span className="bg-white/15 p-1.5 rounded-full">
        <svg className="size-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.417-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.305 1.652zm6.599-3.835l.354.21c1.471.875 3.184 1.337 4.933 1.339 5.432.003 9.853-4.418 9.856-9.85.002-2.633-1.025-5.107-2.892-6.975s-4.341-2.893-6.976-2.893c-5.433 0-9.854 4.419-9.857 9.852-.001 1.75.463 3.456 1.34 4.927l.231.387-1.011 3.691 3.784-.992z" />
        </svg>
      </span>
      <span className="text-xs font-medium tracking-wide">Fale comigo no WhatsApp</span>
    </a>
  );
}