import Image from "next/image";
import React from "react";

function LeaderCard({
  name,
  role,
  education,
  description,
  image,
}: {
  name: string;
  role: string;
  education: string[];
  description: string[];
  image: string;
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="rounded-3xl border border-slate-100 bg-white overflow-hidden hover:shadow-lg transition-shadow">
      {/* Top: Image + key identity details */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-0">
        {/* Photo */}
        <div className="relative sm:col-span-2 h-56 sm:h-full bg-slate-50">
          <Image src={image} alt={name} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </div>

        {/* Identity block */}
        <div className="sm:col-span-3 p-7">
          <h3 className="text-xl font-bold text-slate-900">{name}</h3>
          <p className="text-blue-600 font-semibold mt-1">{role}</p>

          {/* Education (short) */}
          <div className="mt-5">
  <p className="text-[11px] uppercase tracking-widest text-slate-500 font-bold">
    Education
  </p>
  <ul className="mt-2 space-y-1 text-sm text-slate-600">
    {education.slice(0, 2).map((e, index) => (
      <li key={e} className="flex items-start gap-2">
        <span
          className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${
            index === 0 ? "bg-blue-600" : "invisible"
          }`}
        />
        <span className="leading-relaxed">{e}</span>
      </li>
    ))}
  </ul>
</div>

          {/* CTA */}
          <div className="mt-6">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
              aria-expanded={open}
            >
              {open ? "Hide details" : "View more details"}
              <span
                className={`transition-transform duration-200 ${
                  open ? "rotate-180" : ""
                }`}
              >
                ▾
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom: expandable details */}
      <div
        className={`border-t border-slate-100 bg-slate-50/50 transition-all duration-300 ${
          open ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="p-7 space-y-3 text-sm text-slate-700 leading-relaxed">
          {description.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LeaderCard;
