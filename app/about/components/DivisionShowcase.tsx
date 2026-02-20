import TimedOverlayImage from "./TimedOverlayImage";

function DivisionShowcase({
  brandTitle,
  brandSubtitle,
  image,
  slides,
  bullets,
  accent = "blue",
  brandTitleClassName,
}: {
  brandTitle: string;
  brandSubtitle: string;
  image: string;
  slides: { headline: string; body: string }[];
  bullets: string[];
  accent?: "blue" | "slate";
  brandTitleClassName?: string;
}) {
  const accentText = accent === "blue" ? "text-blue-600" : "text-slate-900";
  const accentBg = accent === "blue" ? "bg-blue-600" : "bg-slate-900";

  return (
    <div className="rounded-3xl border border-slate-300 bg-slate-100 overflow-hidden">
      <TimedOverlayImage
        image={image}
        slides={slides}
        accentBg={accentBg}
        accentText={accentText}
        brandTitle={brandTitle}
        brandSubtitle={brandSubtitle}
        brandTitleClassName={brandTitleClassName}
      />

      <div className="p-8">
        <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">
          This division focuses on
        </p>
        <ul className="mt-4 space-y-2 text-sm text-slate-700">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-3">
              <span className={`mt-1.5 w-2 h-2 rounded-full ${accentBg}`} />
              <span className="leading-relaxed">{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DivisionShowcase;
