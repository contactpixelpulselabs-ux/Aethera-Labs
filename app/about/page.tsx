import React from 'react';
import Image from 'next/image';
import { Lightbulb, Box, Settings, ShieldCheck, BrainCircuit, GraduationCap } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 pb-20">

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 pt-32 pb-20 text-center">
        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-8 leading-tight text-slate-900">
          From Abstract Ideas to <br />
          <span className="text-blue-600">Reliable Technologies.</span>
        </h1>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
          We bridge the gap between abstract concepts and tangible, reliable engineering solutions. Aethera Labs is dedicated to precision, innovation, and educational growth in technology.
        </p>
      </section>

      {/* Methodology System */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-12">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest pl-1">Methodology</span>
          <h2 className="text-3xl font-bold text-slate-900 mt-2">The Lab Process</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <ProcessCard
            image="/ideation.png"
            title="Ideation & Research"
            description="Exploring feasibility and abstract concepts through rigorous brainstorming and feasibility studies."
            icon={<Lightbulb size={20} className="text-blue-600" />}
          />
          {/* Step 2 */}
          <ProcessCard
            image="/proto.png"
            title="Prototyping"
            description="Transforming ideas into interactive 3D models and functional proofs of concept for testing."
            icon={<Box size={20} className="text-blue-600" />}
          />
          {/* Step 3 */}
          <ProcessCard
            image="/precision.png"
            title="Precision Manufacturing"
            description="High-quality engineering and production using state of the art machinery."
            icon={<Settings size={20} className="text-blue-600" />}
          />
        </div>
      </section>

      {/* Principles Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Core Principles</h2>
          <p className="text-slate-500 mt-4 max-w-lg mx-auto">The foundational pillars that guide every decision, design, and line of code at Aethera.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <PrincipleItem
            icon={<ShieldCheck size={32} />}
            title="Reliability"
            description="We build systems that endure. Trust is engineered into every interaction."
          />
          <PrincipleItem
            icon={<BrainCircuit size={32} />}
            title="Innovation"
            description="Pushing boundaries isn't optional. It's the standard operating procedure."
          />
          <PrincipleItem
            icon={<GraduationCap size={32} />}
            title="Education"
            description="Knowledge sharing empowers our community and future-proofs our industry."
          />
        </div>
      </section>

    </div>
  )
}

function ProcessCard({ image, title, description, icon }: { image: string, title: string, description: string, icon: React.ReactNode }) {
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
        <p className="text-slate-500 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}

function PrincipleItem({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-slate-50 transition-colors">
      <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-blue-600 mb-6">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
        {description}
      </p>
    </div>
  )
}