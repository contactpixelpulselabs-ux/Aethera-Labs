function InfoCard({
  label,
  title,
  body,
}: {
  label: string;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-8 hover:bg-slate-50 transition-colors shadow-xl">
      <p className="text-xs uppercase tracking-widest font-bold text-blue-600">
        {label}
      </p>
      <h3 className="text-xl font-bold text-slate-900 mt-3">{title}</h3>
      <p className="text-slate-600 mt-3 leading-relaxed">{body}</p>
    </div>
  );
}

export default InfoCard;
