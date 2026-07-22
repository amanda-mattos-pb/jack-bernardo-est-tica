import { useState, useRef, useEffect } from "react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Antes",
  afterLabel = "Depois",
  className = "",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0-100)
  const [isDragging, setIsDragging] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  // Track container width for non-squished image positioning
  useEffect(() => {
    if (!containerRef.current) return;

    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();

    // Listen to resize and use ResizeObserver for modern reactivity
    window.addEventListener("resize", updateWidth);
    const observer = new ResizeObserver(updateWidth);
    observer.observe(containerRef.current);

    return () => {
      window.removeEventListener("resize", updateWidth);
      observer.disconnect();
    };
  }, []);

  // Listen to mouse/touch drag globally
  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: globalThis.MouseEvent) => {
      handleMove(e.clientX);
    };

    const handleTouchMove = (e: globalThis.TouchEvent) => {
      if (e.touches.length > 0) {
        handleMove(e.touches[0].clientX);
      }
    };

    const handleMouseUp = () => setIsDragging(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full aspect-[3/4] overflow-hidden select-none rounded-[2rem] shadow-xl border border-gold/20 bg-paper cursor-ew-resize touch-pan-y ${className}`}
      onMouseDown={() => setIsDragging(true)}
      onTouchStart={() => setIsDragging(true)}
    >
      {/* After Image (Background) */}
      <img
        src={afterImage}
        alt="Depois do procedimento"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        loading="lazy"
      />
      <div className="absolute right-4 bottom-4 px-3 py-1 bg-cocoa/80 text-paper backdrop-blur-md rounded-full text-[9px] font-mono uppercase tracking-widest z-10 border border-gold/10">
        {afterLabel}
      </div>

      {/* Before Image (Foreground, clipped) */}
      <div
        className="absolute inset-y-0 left-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={beforeImage}
          alt="Antes do procedimento"
          className="absolute top-0 left-0 h-full object-cover max-w-none pointer-events-none"
          style={{ width: containerWidth ? `${containerWidth}px` : "100%" }}
          loading="lazy"
        />
        <div className="absolute left-4 bottom-4 px-3 py-1 bg-gold/90 text-paper backdrop-blur-md rounded-full text-[9px] font-mono uppercase tracking-widest z-10 border border-white/10">
          {beforeLabel}
        </div>
      </div>

      {/* Slider Line & Drag Handle */}
      <div
        className="absolute inset-y-0 w-0.5 bg-gradient-to-b from-gold/50 via-gold to-gold/50 pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-paper/95 text-cocoa shadow-2xl rounded-full border border-gold flex items-center justify-center backdrop-blur-sm pointer-events-none hover:scale-110 transition-transform">
          <svg
            className="w-5 h-5 text-gold animate-pulse"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 9l-3 3m0 0l3 3m-3-3h14m-4-3l3 3m0 0l-3 3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
