import Image from "next/image";
import React from "react";

function TimedOverlayImage({
  image,
  slides,
  accentBg,
  accentText,
  brandTitle,
  brandSubtitle,
  brandTitleClassName,
}: {
  image: string;
  slides: { headline: string; body: string }[];
  accentBg: string;
  accentText: string;
  brandTitle: string;
  brandSubtitle: string;
  brandTitleClassName?: string;
}) {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    if (slides.length <= 1) return;
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4200);
    return () => clearInterval(t);
  }, [slides.length]);

  const current = slides[index];

  return (
    <div className="relative h-[360px] bg-slate-50 overflow-hidden">
      <Image src={image} alt={brandTitle} fill className="object-cover" />

      {/* Darken for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/45 to-transparent" />

      {/* Two shapes */}
      <div className="absolute -top-10 -left-10 w-44 h-44 rounded-[44px] bg-white/10 backdrop-blur-sm border border-white/15 rotate-12" />
      <div className="absolute -bottom-12 -right-10 w-56 h-56 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 -rotate-12" />

      {/* Top badge */}
      <div className="absolute top-6 left-6 right-6 flex items-start justify-between gap-4">
        <div className="rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm px-4 py-3">
          <p className="text-[11px] uppercase tracking-widest text-white/80 font-bold drop-shadow-md">
            {brandSubtitle}
          </p>
          <p
            className={`mt-1 text-2xl font-bold text-black ${
              brandTitleClassName ?? ""
            }`}
          >
            {brandTitle}
          </p>
        </div>

        <div className="hidden sm:flex items-center gap-2">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === index ? "bg-white" : "bg-white/35"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Timed text overlay on product photo */}
      <div className="absolute bottom-7 left-6 right-6">
        <div className="max-w-xl rounded-3xl bg-white/10 border border-white/15 backdrop-blur-sm p-5">
          <p className={`text-sm font-bold ${accentText} drop-shadow`}>
            {current.headline}
          </p>
          <p className="text-sm text-white/85 mt-2 leading-relaxed">
            {current.body}
          </p>

          <div className="mt-4 flex items-center gap-2">
            <span className={`w-10 h-1.5 rounded-full ${accentBg}`} />
            <span className="text-xs text-white/70 font-semibold tracking-wide">
              performance • validation • scalability
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimedOverlayImage;
