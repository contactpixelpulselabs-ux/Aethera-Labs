import React from 'react';
import { MapPin, Phone, Clock, Send, MessageCircle, Mail, ArrowRight } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 pb-20 pt-20">

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

        {/* Left Column: Info */}
        <div className="space-y-12">
          <div>
            <h1 className="text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-6">
              Let&apos;s build the future <span className="text-blue-600">together.</span>
            </h1>
            <p className="text-lg text-slate-500 max-w-md">
              Reach out to our engineering team to discuss your next breakthrough. We are here to listen.
            </p>
          </div>

          <div className="space-y-10">
            {/* Headquarters */}
            <div className="flex gap-4">
              <div className="shrink-0 mt-1">
                <MapPin className="text-blue-600" size={24} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Headquarters</h4>
                <p className="font-medium text-slate-900 leading-relaxed">
                  408, Siyonwatta,<br />
                  Ambagasthanna,<br />
                  Raththota,<br />
                  Sri Lanka.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="flex gap-4">
              <div className="shrink-0 mt-1">
                <Phone className="text-blue-600" size={24} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Contact</h4>
                <p className="font-medium text-slate-900 leading-relaxed">
                  +1 (555) 012-3456<br />
                  hello@aetheralabs.com
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4">
              <div className="shrink-0 mt-1">
                <Clock className="text-blue-600" size={24} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Hours</h4>
                <p className="font-medium text-slate-900 leading-relaxed">
                  Mon - Fri, 9am - 6pm PST<br />
                  Weekends by appointment
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div>
          <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-2xl shadow-slate-200/50">
            <h3 className="text-xl font-bold mb-8">Send us a message</h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700">Name</label>
                  <input type="text" placeholder="Jane Doe" className="w-full px-4 py-3 bg-slate-50 rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 transition-colors text-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700">Work Email</label>
                  <input type="email" placeholder="name@company.com" className="w-full px-4 py-3 bg-slate-50 rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 transition-colors text-sm" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700">Subject</label>
                <input type="text" placeholder="Project Inquiry" className="w-full px-4 py-3 bg-slate-50 rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 transition-colors text-sm" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700">Describe your Project</label>
                <textarea rows={6} placeholder="Tell us about the goals and timeline..." className="w-full px-4 py-3 bg-slate-50 rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 transition-colors text-sm resize-none"></textarea>
              </div>

              <div className="flex justify-end pt-2">
                <button type="button" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium text-sm flex items-center gap-2 transition-all shadow-lg shadow-blue-600/20">
                  Send Request <ArrowRight size={16} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Fast Answer Section */}
      <div className="max-w-2xl mx-auto px-6 mt-32 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">Need an answer faster?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a href="#" className="flex items-center gap-4 p-4 border border-slate-100 rounded-xl hover:border-blue-200 hover:bg-blue-50/50 transition-all group">
            <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
              <MessageCircle size={24} />
            </div>
            <div className="text-left">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Messaging</span>
              <h4 className="font-bold text-slate-900 group-hover:text-blue-700">Talk on WhatsApp</h4>
            </div>
          </a>

          <a href="#" className="flex items-center gap-4 p-4 border border-slate-100 rounded-xl hover:border-blue-200 hover:bg-blue-50/50 transition-all group">
            <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
              <Mail size={24} />
            </div>
            <div className="text-left">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Engineering</span>
              <h4 className="font-bold text-slate-900 group-hover:text-blue-700">Email the Team</h4>
            </div>
          </a>
        </div>
      </div>

    </div>
  )
}