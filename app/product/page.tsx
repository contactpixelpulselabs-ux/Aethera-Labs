import React from 'react';
import Image from 'next/image';
import { Bluetooth, ShieldCheck, Cpu, Download, Play, CheckCircle2 } from 'lucide-react';

export default function ProductDetailPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-12 lg:pt-32 lg:pb-24">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-8">
            <div>
              <span className="text-orange-500 font-bold tracking-widest text-xs uppercase mb-2 block">Model: Crystal X</span>
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight">
                Pure Power.<br />
                <span className="text-blue-600">Precisely Tuned.</span>
              </h1>
            </div>
            <p className="text-lg text-slate-500 max-w-md leading-relaxed">
              The 200W Class-D heart of your home audio system. Engineered for transparency and dynamic range.
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium shadow-xl shadow-blue-600/20 transition-all">
                Add to Cart $499
              </button>
              <button className="text-blue-600 font-medium px-4 py-3 hover:text-blue-700 flex items-center gap-2">
                <Download size={20} />
                Download Spec Sheet
              </button>
            </div>
          </div>

          <div className="flex-1 w-full flex justify-center">
            <div className="relative w-full max-w-lg aspect-[4/3]">
              {/* Floating Device Image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-100 to-white rounded-[3rem] -rotate-3 transform scale-95 opacity-50"></div>
              <Image
                src="/detail_device_white.png"
                alt="Crystal X Controller"
                fill
                className="object-contain drop-shadow-2xl z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Guts Section */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">The Guts.</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Software is great. Hardware is forever. We don&apos;t use off-the-shelf modules. Everything is custom.</p>
          </div>

          <div className="relative aspect-[21/9] w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl mb-12 group">
            <Image
              src="/product_circuit_green.png"
              alt="Circuit Board"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute top-6 right-6 flex gap-2">
              <div className="bg-black/50 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Dual Op-Amps
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="bg-slate-50 p-10 rounded-3xl hover:shadow-lg transition-shadow h-full">
              <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-8">
                <Bluetooth size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Bluetooth 5.1 + AUX</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Seamless low-latency wireless streaming combined with a pure analog signal path for your legacy gear.
              </p>
            </div>
            

            <div className="space-y-6">
              <div className="bg-slate-50 p-6 rounded-3xl hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-600 text-white flex items-center justify-center flex-shrink-0">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Protection Circuits</h3>
                    <p className="text-sm text-slate-600">Short-circuit and thermal overload protection.</p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-50 p-6 rounded-3xl hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center flex-shrink-0">
                    <Cpu size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">ZeroControl</h3>
                    <p className="text-sm text-slate-600">New feedback-based distortion monitoring.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-slate-950 text-white px-10 py-7 rounded-3xl flex flex-col md:flex-row justify-between items-center">
            <div className="mb-3 md:mb-0">
              <h4 className="text-xs uppercase tracking-widest text-slate-500 mb-1.5">Industrial Design</h4>
              <p className="font-bold text-lg">CNC-Machined Aluminum Chassis</p>
            </div>
            <div className="hidden md:block h-12 w-[1px] bg-slate-800 mx-6"></div>
            <div className="text-center md:text-right">
              <p className="text-sm text-slate-400">Extruded from solid blocks of aviation-grade alloy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cinematic Section */}
      <section className="relative h-[600px] w-full bg-slate-950 flex items-center justify-center text-center px-6">
        <div className="absolute inset-0">
          <Image
            src="/detail_listening_room.png"
            alt="Listening Room"
            fill
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-2xl">
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">&quot;Hearing is Believing.&quot;</h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            Experience soundstages that extend well beyond the walls of your room. The Crystal X doesn&apos;t just amplify sound; it reveals the emotion hidden within the silence between the notes.
          </p>
        </div>
      </section>

      {/* Specs Section */}
      
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h3 className="text-2xl font-bold text-slate-900 text-center mb-12">Technical Specifications</h3>

        <div className="space-y-4">
          {[
            { label: 'Power Output', value: '2 x 200W   ( 8 Ohm / 4 Ohm )' },
            { label: 'THD + N', value: '< 0.0001% @ 1kHz 200W' },
            { label: 'Signal-to-Noise Ratio', value: '112dB' },
            { label: 'Frequency Response', value: '5Hz - 100kHz  -3dB' },
            { label: 'Dimensions', value: '180mm x 80mm x 220mm' },
            { label: 'Inputs', value: 'RCA Unbalanced, XLR Balanced, USB-C' },
          ].map((spec, i) => (
            <div key={i} className="flex justify-between items-center py-4 border-b border-slate-100 last:border-0 hover:bg-slate-50 px-4 rounded-lg transition-colors leading-loose">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400 w-1/3">{spec.label}</span>
              <span className="font-bold text-slate-900 text-right w-2/3">{spec.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Assurance / Footer-ish */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">The Aethera Standard.</h3>
              <p className="text-slate-600 text-base leading-relaxed max-w-lg">
                We stand behind our engineering. Each device is hand-tested in our labs for 48 hours before shipment. We only ship perfection.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="bg-white px-5 py-3 rounded-xl border-2 border-slate-200 text-slate-700 text-sm font-semibold flex items-center gap-3 hover:border-green-500 transition-colors">
                <CheckCircle2 size={20} className="text-green-600" />
                <span>5-Year Warranty</span>
              </div>
              <div className="bg-white px-5 py-3 rounded-xl border-2 border-slate-200 text-slate-700 text-sm font-semibold flex items-center gap-3 hover:border-blue-500 transition-colors">
                <CheckCircle2 size={20} className="text-blue-600" />
                <span>30-Day Returns</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}