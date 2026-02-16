import React from 'react';
import Image from 'next/image';
import { ArrowRight, Clock } from 'lucide-react';

export default function NewsPage() {
    return (
        <div className="min-h-screen bg-white text-slate-900 pb-20">

            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    <div className="flex-1 space-y-6">
                        <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-slate-400">
                            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-sm">Featured Story</span>
                            <span>Oct 24, 2024 • 5 Min Read</span>
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1] text-slate-900">
                            The Future of <br />
                            <span className="text-blue-600">Tactile Audio Engineering</span>
                        </h1>
                        <p className="text-xl text-slate-500 leading-relaxed max-w-lg">
                            We&apos;re redefining how sound is felt, not just heard. Explore the engineering marvels behind the new Aethera One haptic engine.
                        </p>
                        <button className="bg-slate-900 text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-slate-800 transition-colors">
                            Read Story <ArrowRight size={18} />
                        </button>
                    </div>
                    <div className="flex-1 w-full">
                        <div className="relative aspect-[16/9] w-full bg-slate-100 rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="/News_Hero.png"
                                alt="Tactile Audio Chip"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Feed Section */}
            <section className="max-w-7xl mx-auto px-6 py-12">
                <div className="flex justify-between items-center mb-10">
                    <h2 className="text-3xl font-bold">The Feed</h2>
                    <div className="hidden md:flex gap-2">
                        {['All', 'Events', 'Product', 'Research'].map((filter, i) => (
                            <button
                                key={filter}
                                className={`text-xs font-bold px-4 py-2 rounded-full border transition-colors ${i === 0 ? 'bg-slate-900 text-white border-slate-900' : 'bg-white border-transparent text-slate-500 hover:bg-slate-50'}`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Card 1: Product Launch */}
                    <div className="bg-white border border-slate-100 rounded-2xl p-4 hover:shadow-xl transition-shadow cursor-pointer group">
                        <div className="relative aspect-video w-full rounded-xl bg-slate-100 overflow-hidden mb-6">
                            <Image src="/News1.png" alt="Speaker Detail" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="px-2">
                            <div className="flex gap-2 text-[10px] font-bold uppercase tracking-wider mb-3">
                                <span className="text-blue-600">Product Launch</span>
                                <span className="text-slate-400">#AudioEngineering</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">Meet the Aethera One: Precision Sound Redefined</h3>
                            <p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-3">
                                Experience the pinnacle of acoustic fidelity with our newest flagship model.
                            </p>
                            <div className="flex items-center text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                Read More <ArrowRight size={12} className="ml-1" />
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Stacked Cards (Events + Firmware) */}
                    <div className="flex flex-col gap-8">
                        {/* Top: CES Event (simulated with standard blocks as I don't have CES pics, or using generic) */}
                        <div className="bg-white border border-slate-100 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                            <h4 className="font-bold text-slate-900 mb-2">Live from CES 2024</h4>
                            <p className="text-xs text-slate-500 mb-4">Our booth attracted over 5,000 visitors this weekend.</p>
                            <div className="grid grid-cols-2 gap-2 h-32">
                                <div className="relative rounded-lg overflow-hidden bg-slate-100">
                                    {/* Reusing existing assets to fake a gallery */}
                                    <Image src="/detail_listening_room.png" fill alt=" CES" className="object-cover" />
                                </div>
                                <div className="relative rounded-lg overflow-hidden bg-slate-100">
                                    <Image src="/detail_device_whites.png" fill alt=" CES" className="object-cover" />
                                </div>
                            </div>
                        </div>

                        {/* Bottom: Firmware Update */}
                        <div className="flex-1 bg-white border border-slate-100 rounded-2xl p-6 hover:shadow-lg transition-shadow flex flex-col justify-center">
                            <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                                <Clock size={20} />
                            </div>
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-lg font-bold text-slate-900">Firmware 2.0 Released</h3>
                                <span className="text-[10px] text-slate-400 font-medium">2 hrs ago</span>
                            </div>
                            <p className="text-sm text-slate-500">Major performance improvements for all Aethera devices.</p>
                        </div>
                    </div>

                    {/* Card 3: Research Whitepaper */}
                    <div className="bg-white border border-slate-100 rounded-2xl p-4 hover:shadow-xl transition-shadow cursor-pointer group">
                        <div className="relative aspect-square w-full rounded-xl bg-slate-900 overflow-hidden mb-6">
                            {/* Simulated Waveform abstract */}
                            <div className="absolute inset-0 opacity-50 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]"></div>
                            <Image src="/news_hero_chip.png" alt="Abstract" fill className="object-cover opacity-50 mix-blend-overlay" />
                            <div className="absolute bottom-4 left-4 right-4">
                                <span className="bg-white/10 backdrop-blur text-white text-[10px] font-bold px-2 py-1 rounded">Whitepaper</span>
                            </div>
                        </div>
                        <div className="px-2">
                            <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">The Science of Sound</h3>
                            <p className="text-sm text-slate-500 leading-relaxed mb-4">
                                Our research team just published a deep dive into the psychoacoustics of haptic feedback.
                            </p>
                            <div className="flex items-center text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                Download PDF <ArrowRight size={12} className="ml-1" />
                            </div>
                        </div>
                    </div>

                </div>

                {/* Big Feature Card: Community */}
                <div className="bg-slate-900 rounded-3xl mt-8 overflow-hidden relative min-h-[400px] flex items-end p-8 group cursor-pointer">
                    <Image
                        src="/news_stem_illustration.png"
                        alt="STEM Education"
                        fill
                        className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent"></div>

                    <div className="relative z-10 max-w-xl">
                        <span className="bg-white/20 backdrop-blur text-white px-3 py-1 rounded-sm text-[10px] font-bold uppercase tracking-widest mb-4 inline-block">Community</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Inspiring the Next Gen: Kids & STEM</h2>
                        <p className="text-slate-300 mb-6 max-w-md">We partnered with 50 schools to bring tactile audio kits to classrooms.</p>
                        <button className="bg-white text-slate-900 px-6 py-2 rounded-lg text-sm font-bold">Read Full Report</button>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="max-w-2xl mx-auto px-6 py-24 text-center">
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Stay in the loop.</h2>
                <p className="text-slate-500 mb-8">Get the latest from Aethera Labs, delivered weekly.</p>

                <div className="flex relative">
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className="w-full px-6 py-4 rounded-full bg-slate-50 border border-slate-200 focus:outline-none focus:border-blue-500 pr-16"
                    />
                    <button className="absolute right-2 top-2 bottom-2 w-12 bg-white rounded-full border border-slate-100 flex items-center justify-center text-slate-500 hover:text-blue-600 transition-colors shadow-sm">
                        <ArrowRight size={20} />
                    </button>
                </div>
                <p className="text-[10px] text-slate-400 mt-4">By signing up, you agree to our Terms and Privacy Policy. Unsubscribe anytime.</p>
            </section>

        </div>
    )
}
