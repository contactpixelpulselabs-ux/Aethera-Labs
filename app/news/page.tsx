
import Image from 'next/image';
import { ArrowRight, Clock } from 'lucide-react';

export default function NewsPage() {
    return (
        <div className="min-h-screen bg-white text-slate-900 pb-20">

        

        
            <section className="max-w-7xl mx-auto px-6 py-12">
                
 <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight  mb-4">
          
          The Feed
        </h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Card 1: Product Launch */}
                    <div className="bg-white border border-slate-100 rounded-2xl p-4 hover:shadow-xl transition-shadow cursor-pointer group">
                        <div className="relative aspect-video w-full rounded-xl bg-slate-100 overflow-hidden mb-6">
                            <Image src="/Blog1.png" alt="Speaker Detail" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="px-2">
                            {/* <div className="flex gap-2 text-[10px] font-bold uppercase tracking-wider mb-3">
                                <span className="text-blue-600">Product Launch</span>
                                <span className="text-slate-400">#AudioEngineering</span>
                            </div> */}
                            <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">BLE Audio vs Wi-Fi Audio: The Complete Technical Comparison</h3>
                            <p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-3">
                               Wireless audio is everywhere today, from earbuds and headphones to smart speakers and home theater systems. But behind these devices are two fundamentally different wireless technologies: Bluetooth Low Energy (BLE) Audio and Wi-Fi Audio.
                            </p>
                            <a href='https://medium.com/@anjana3056260/ble-audio-vs-wi-fi-audio-the-complete-technical-comparison-d3e0d6457f8d' target='_blank'><div className="flex items-center text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                Read More <ArrowRight size={12} className="ml-1" />
                            </div></a>
                        </div>
                        
                    </div>


                    <div className="bg-white border border-slate-100 rounded-2xl p-4 hover:shadow-xl transition-shadow cursor-pointer group">
                        <div className="relative aspect-video w-full rounded-xl bg-slate-100 overflow-hidden mb-6">
                            <Image src="/Blog2.png" alt="Speaker Detail" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="px-2">
                            {/* <div className="flex gap-2 text-[10px] font-bold uppercase tracking-wider mb-3">
                                <span className="text-blue-600">Product Launch</span>
                                <span className="text-slate-400">#AudioEngineering</span>
                            </div> */}
                            <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">LDAC vs aptX: The Ultimate Bluetooth Codec Showdown</h3>
                            <p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-3">
                                You’re shopping for wireless headphones. You find a pair you love, but the box is plastered with a confusing alphabet soup: LDAC, aptX, aptX Adaptive. They all promise “high quality” or “Hi-Res” audio but they are not the same.
                            </p>
                           <a href='https://medium.com/@anjana3056260/ldac-vs-aptx-the-ultimate-bluetooth-codec-showdown-b3c684315bd5' target='_blank'> <div className="flex items-center text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                Read More <ArrowRight size={12} className="ml-1" />
                            </div></a>
                        </div>
                        
                    </div>
                    </div>

                  

           </section>

           

        </div>
    )
}
