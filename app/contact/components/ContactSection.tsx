"use client"
import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="bg-white py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Side: Contact Info */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-5xl font-bold text-zinc-900 leading-tight">
                Let&apos;s build the future <br />
                <span className="text-blue-600">together.</span>
              </h2>
              <p className="text-zinc-500 text-lg max-w-md">
                Reach out to our engineering team to discuss your next breakthrough. We are here to listen.
              </p>
            </div>

            <div className="space-y-8 pt-8 border-t border-zinc-100">
              <div className="flex gap-4">
                <MapPin className="text-blue-600 w-5 h-5 shrink-0" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Headquarters</p>
                  <p className="text-zinc-800 leading-relaxed">408, Siyonwatta, Ambagasthanna, Raththota, Sri Lanka.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="text-blue-600 w-5 h-5 shrink-0" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Contact</p>
                  <p className="text-zinc-800">+1 (555) 012-3456</p>
                  <p className="text-zinc-800">hello@aetheralabs.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="text-blue-600 w-5 h-5 shrink-0" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Hours</p>
                  <p className="text-zinc-800">Mon - Fri, 9am - 6pm PST</p>
                  <p className="text-zinc-400 text-sm">Weekends by appointment</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="bg-white border border-zinc-100 shadow-2xl shadow-zinc-200/50 rounded-3xl p-8 md:p-10">
            <h3 className="text-xl font-bold text-zinc-900 mb-8">Send us a message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Name</label>
                  <input type="text" placeholder="Jane Doe" className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Work Email</label>
                  <input type="email" placeholder="name@company.com" className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Subject</label>
                <input type="text" placeholder="Project Inquiry" className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Describe your Project</label>
                <textarea rows={4} placeholder="Tell us about the goals and timeline..." className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none"></textarea>
              </div>
              <button className="w-full md:w-auto ml-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all group">
                Send Request
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;