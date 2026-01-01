import { Beaker } from 'lucide-react';
import Button from './Button';

export const CTA = () => (
  <section className="py-24 px-6">
    <div className="max-w-5xl mx-auto bg-white rounded-3xl p-12 text-center border border-zinc-100 shadow-2xl relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50" />
      
      <div className="relative z-10 flex flex-col items-center space-y-6">
        <Beaker size={40} className="text-zinc-800" strokeWidth={1.5} />
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900">Need a Custom Solution?</h2>
        <p className="text-zinc-500 max-w-xl mx-auto">Our labs are open for collaboration. Leverage our R&D expertise to build proprietary hardware tailored to your specific industrial needs.</p>
         <Button name="Start a Project" link="" />
        
      </div>
    </div>
  </section>
);