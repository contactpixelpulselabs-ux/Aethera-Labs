function PrincipleItem({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-slate-200 hover:bg-slate-100 transition-colors">
      <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-blue-600 mb-6">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
        {description}
      </p>
    </div>
  );
}

export default PrincipleItem;
