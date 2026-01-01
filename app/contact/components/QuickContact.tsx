import { MessageCircle, Mail } from 'lucide-react';

const QuickContact = () => {
  return (
    <section className="bg-white pb-24 px-6">
      <div className="max-w-7xl mx-auto text-center space-y-10">
        <h2 className="text-2xl font-bold text-zinc-900">Need an answer faster?</h2>
        
        <div className="flex flex-wrap justify-center gap-6">
          {/* WhatsApp Card */}
          <button className="flex items-center gap-4 bg-white border border-zinc-100 p-6 rounded-2xl hover:shadow-lg transition-all w-full max-w-xs group">
            <div className="bg-green-50 p-3 rounded-xl group-hover:scale-110 transition-transform">
              <MessageCircle className="text-green-600 w-6 h-6" />
            </div>
            <div className="text-left">
              <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Messaging</p>
              <p className="text-lg font-bold text-zinc-900">Talk on WhatsApp</p>
            </div>
          </button>

          {/* Email Card */}
          <button className="flex items-center gap-4 bg-white border border-zinc-100 p-6 rounded-2xl hover:shadow-lg transition-all w-full max-w-xs group">
            <div className="bg-blue-50 p-3 rounded-xl group-hover:scale-110 transition-transform">
              <Mail className="text-blue-600 w-6 h-6" />
            </div>
            <div className="text-left">
              <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Engineering</p>
              <p className="text-lg font-bold text-zinc-900">Email the Team</p>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
export default QuickContact;