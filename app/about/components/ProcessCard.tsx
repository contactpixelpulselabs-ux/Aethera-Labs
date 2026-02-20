import Image from "next/image";

function ProcessCard({
  image,
  title,
  description,
  icon,
}: {
  image: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="group bg-white rounded-2xl border border-slate-100 p-4 hover:shadow-xl transition-all duration-300">
      <div className="relative aspect-[4/3] w-full bg-slate-50 rounded-xl overflow-hidden mb-6">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>
      <div className="px-2 pb-4">
        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default ProcessCard;
