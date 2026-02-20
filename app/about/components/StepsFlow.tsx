import Image from "next/image";

function StepsFlow({
  steps,
}: {
  steps: {
    title: string;
    image: string;
    icon: React.ReactNode;
  }[];
}) {
  return (
    <div className="rounded-3xl border border-slate-300 bg-white p-6 md:p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {steps.map((step, idx) => (
          <div
            key={step.title}
            className="group relative rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300"
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={step.image}
                alt={step.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              {/* STEP Label */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-blue-600 shadow-sm">
                STEP {idx + 1}
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="flex items-center gap-3">
                  {/* Fixed size icon container */}
                  <div className="w-9 h-9 min-w-[36px] min-h-[36px] rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <div className="text-white flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-semibold leading-snug">
                    {step.title}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StepsFlow;
