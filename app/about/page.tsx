"use client";

import {
  Lightbulb,
  Box,
  Settings,
  ShieldCheck,
  BrainCircuit,
  GraduationCap,
  CheckCircle2,
  MapPin,
  Cpu,
  Factory,
  Gauge,
  FlaskConical,
  Wrench,
} from "lucide-react";

import { Germania_One } from "next/font/google";
import ProcessCard from "./components/ProcessCard";
import PrincipleItem from "./components/PrincipleItem";
import DivisionShowcase from "./components/DivisionShowcase";
import StepsFlow from "./components/StepsFlow";
import InfoCard from "./components/InfoCard";
import LeaderCard from "./components/LeaderCard";

const germaniaOne = Germania_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 pb-24">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 pt-28 pb-16 text-center">
        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-8 leading-tight text-slate-900">
          From Abstract Ideas to <br />
          <span className="text-blue-600">Engineered Reality.</span>
        </h1>
        <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
          We transform complex concepts into tangible, high-performance
          solutions.{" "}
          <span className="font-bold hover:text-blue-600">Aethera Labs</span> is
          driven by precision, innovation, and the advancement of technology
          through engineering excellence.
        </p>
      </section>

      {/* Who We Are */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-widest pl-1">
              Who We Are
            </span>
            <h2 className="text-3xl font-bold text-slate-900 mt-2">
              Innovation-focused electronics development
            </h2>

            <div className="mt-6 space-y-5 text-slate-600 leading-relaxed">
              <p>
                Aethera Labs is an innovation-focused electronics development
                company dedicated to designing, prototyping, and manufacturing
                reliable technology solutions.
              </p>
              <p>
                Founded with a passion for engineering precision and real-world
                performance validation, we operate at the intersection of
                creativity and technical discipline.
              </p>
              <p>
                Our work spans across high-performance audio systems,
                educational technology platforms, and precision manufacturing
                solutions — all unified by a commitment to quality and
                functional excellence.
              </p>
              <p>
                Based in Sri Lanka, we serve both local and international
                markets with scalable engineering solutions.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-slate-300 bg-slate-100 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-blue-600">
                  <ShieldCheck size={20} />
                </div>
                <p className="font-semibold text-slate-900">
                  Built for reliability
                </p>
              </div>

              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex gap-3">
                  <CheckCircle2 className="text-blue-600 mt-0.5" size={18} />
                  Engineering precision + measurable performance validation
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-blue-600 mt-0.5" size={18} />
                  Scalable development for local and international markets
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-blue-600 mt-0.5" size={18} />
                  Cross-domain expertise: audio, ed-tech, manufacturing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Structure */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-12">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest pl-1">
            Our Structure
          </span>
          <h2 className="text-3xl font-bold text-slate-900 mt-2">
            Two specialized divisions
          </h2>
          <p className="text-slate-500 mt-3 max-w-3xl">
            Aethera Labs operates through three specialized divisions, each
            focused on a distinct technology domain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProcessCard
            image="/CrystalXS500.jpg"
            title="Premium Audio Engineering"
            description="High-performance audio systems engineered with measurable metrics and real-world validation."
            icon={<Lightbulb size={20} className="text-blue-600" />}
          />
          <ProcessCard
            image="/Evoluto_Product(2).png"
            title="Product Development & Manufacturing"
            description="From concept to production-ready design—buildable, scalable, and manufacturable."
            icon={<Box size={20} className="text-blue-600" />}
          />
        </div>
      </section>

      {/* Division Showcases (with “two shapes + timed display” + text overlay on photo) */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <DivisionShowcase
            brandTitle="Crystal X"
            brandSubtitle="Premium Audio Engineering Division"
            image="/CrystalXS200.jpg"
            slides={[
              {
                headline:
                  "Crystal X represents our commitment to uncompromised audio performance.",
                body: "Every product under Crystal X is engineered with measurable performance metrics, laboratory testing, and real-world acoustic validation.",
              },
              {
                headline: "Engineered for measurable performance.",
                body: "Performance testing, calibration, and validation across budget-to-premium audio product ranges.",
              },
            ]}
            bullets={[
              "High-performance amplifier systems",
              "Subwoofer design & acoustic optimization",
              "Audio signal engineering",
              "Performance testing & calibration",
              "Budget-to-premium audio product validation",
            ]}
            accent="blue"
            brandTitleClassName={"font-ethno"} // Germania One for “Evoluto”
          />

          <DivisionShowcase
            brandTitle="Evoluto"
            brandSubtitle="Product Development & Manufacturing Division"
            image="/Evoluto_Product(1).png"
            slides={[
              {
                headline:
                  "Evoluto focuses on transforming concepts into production-ready products.",
                body: "Evoluto bridges innovation and manufacturability, ensuring designs are not only creative — but buildable and scalable.",
              },
              {
                headline: "From prototype to small-batch production.",
                body: "We plan manufacturing processes early—reducing risk, cost, and iteration cycles.",
              },
            ]}
            bullets={[
              "Hardware prototyping",
              "PCB design & development",
              "Product validation & testing",
              "Manufacturing process planning",
              "Small-batch production solutions",
            ]}
            accent="slate"
            brandTitleClassName={germaniaOne.className} // Germania One for “Evoluto”
          />
        </div>
      </section>

      {/* Our Engineering Approach (7 steps in a styled flow) */}

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest pl-1">
            Our Engineering Approach
          </span>
          <h2 className="text-3xl font-bold text-slate-900 mt-2">
            A structured development cycle
          </h2>
          <p className="text-slate-500 mt-3 max-w-3xl">
            This structured approach ensures reliability, efficiency, and
            measurable performance outcomes.
          </p>
        </div>

        <StepsFlow
          steps={[
            {
              title: "Concept & System Design",
              image: "/Steps/1. Concept & System Design.jpg",
              icon: <Lightbulb size={20} />,
            },
            {
              title: "Simulation & Feasibility Validation",
              image: "/Steps/2. Simulation & Feasibility Validation.jpg",
              icon: <BrainCircuit size={20} />,
            },
            {
              title: "Circuit & PCB Development",
              image: "/Steps/3. Circuit & PCB Development.jpg",
              icon: <Cpu size={20} />,
            },
            {
              title: "Prototype Fabrication",
              image: "/Steps/4. Prototype Fabrication.jpg",
              icon: <Wrench size={20} />,
            },
            {
              title: "Testing & Calibration",
              image: "/Steps/5. Testing & Calibration.jpg",
              icon: <FlaskConical size={20} />,
            },
            {
              title: "Performance Optimization",
              image: "/Steps/6. Performance Optimization.jpg",
              icon: <Gauge size={20} />,
            },
            {
              title: "Production & Deployment",
              image: "/Steps/7. Production & Deployment.jpg",
              icon: <Factory size={20} />,
            },
          ]}
        />
      </section>

      {/* What Makes Us Different */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-bold text-slate-900">
              What Makes Us Different
            </h2>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Engineering-first mindset",
                "In-house prototyping capability",
                "Performance-based validation",
                "Scalable product architecture",
                "Transparent development process",
                "Cross-domain innovation expertise",
              ].map((t) => (
                <div
                  key={t}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 hover:bg-slate-50 transition-colors"
                >
                  <CheckCircle2 className="text-blue-600 mt-0.5" size={18} />
                  <p className="text-slate-700 text-sm leading-relaxed">{t}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-slate-300 bg-slate-100 p-8">
              <p className="text-sm uppercase tracking-widest text-slate-500 font-semibold">
                Our Standard
              </p>
              <p className="mt-3 text-2xl font-bold leading-snug">
                <span className="text-slate-900">
                  We do not build concepts —
                </span>{" "}
                <span className="text-blue-600">
                  we build tested, working systems.
                </span>
              </p>
              <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                Every build is validated for performance, reliability, and
                real-world usability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles (kept from your original, matches doc intent) */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Core Principles</h2>
          <p className="text-slate-500 mt-4 max-w-lg mx-auto">
            The foundational pillars that guide every decision, design, and line
            of code at Aethera.
          </p>
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

      {/* Mission / Vision */}
      <section className="max-w-7xl mx-auto px-6 py-20 bg-slate-200 rounded-3xl border border-slate-300">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <InfoCard
            label="Mission"
            title="Reliable, high-performance technology"
            body="To engineer reliable, high-performance technologies that combine innovation, precision, and practical usability."
          />
          <InfoCard
            label="Vision"
            title="A trusted technology development house"
            body="To become a trusted technology development house recognized for excellence in audio engineering, educational innovation, and precision manufacturing."
          />
        </div>
      </section>

      {/* Leadership */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest pl-1">
            Leadership
          </span>
          <h2 className="text-3xl font-bold text-slate-900 mt-2">
            Engineering-led direction
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <LeaderCard
            name="Anjana Siriwardhana"
            role="Founder & Lead Engineer"
            education={[
              "B.Sc. (Hons) in Electrical and Electronics Engineering.",
              "Sri Lanka Institute of Information Technology (SLIIT).",
            ]}
            description={[
              "Anjana founded Aethera Labs with a vision to transform ambitious ideas into precision-engineered realities.",
              "With a strong focus on performance validation, system optimization, and scalable hardware design, he leads the company’s innovation across audio engineering, educational technology, and advanced product development.",
              "His approach combines technical depth, hands-on prototyping, and measurable engineering standards to ensure every solution delivers reliability, efficiency, and real-world impact.",
            ]}
            image="/Anjana Siriwardhana.png" // placeholder
          />

          <LeaderCard
            name="Sandika Kulasinghe"
            role="Product Testing & Validation Engineer | Marketing Lead"
            education={[
              "Bachelor of Engineering Technology (Hons) in Instrumentation and Automation.",
              "University of Colombo.",
            ]}
            description={[
              "Sandika plays a crucial role in ensuring the performance, reliability, and market readiness of Aethera Labs products.",
              "As the Product Testing and Validation Engineer, he oversees system evaluation, calibration, and performance benchmarking across all development stages.",
              "In addition, he leads marketing strategy and market positioning, translating complex engineering solutions into clear value propositions for customers and partners.",
              "His combined expertise in instrumentation, automation, and market strategy strengthens the bridge between technical excellence and real-world application.",
            ]}
            image="/Sandika Kulasinghe.jpeg" // placeholder
          />
        </div>
      </section>

      {/* Location */}
      <section className="max-w-7xl mx-auto px-6 pb-8">
        <div className="rounded-3xl border border-slate-100 bg-white p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-slate-900">Location</h3>
            <p className="text-slate-600 mt-2 leading-relaxed">
              Based in Sri Lanka <br />
              Serving clients globally through remote collaboration and scalable
              manufacturing solutions.
            </p>
          </div>
          <div className="flex items-center gap-3 text-slate-700">
            <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-blue-600">
              <MapPin size={20} />
            </div>
            <div>
              <p className="font-semibold">Sri Lanka</p>
              <p className="text-sm text-slate-500">Global delivery-ready</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
