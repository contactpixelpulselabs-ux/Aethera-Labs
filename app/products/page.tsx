import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Download, FlaskConical, Layers, Thermometer } from 'lucide-react';
import { getAllProducts, getFeaturedProducts, getAllCategories } from '@/lib/products';

export default function ProductsPage() {
    const allProducts = getAllProducts();
    const featuredProduct = getFeaturedProducts()[0]; // Get the first featured product for hero
    const categories = getAllCategories();

    return (
        <div className="min-h-screen bg-white pb-20">

            {/* Hero Section - Dynamically populated from featured product */}
            {featuredProduct && (
                <section className="max-w-7xl mx-auto px-6 py-20 lg:py-24">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        <div className="flex-1 space-y-8">
                            <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">New Release</span>
                            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight">
                                {featuredProduct.name}<br />Amp
                            </h1>
                            <p className="text-lg text-slate-500 max-w-lg leading-relaxed">
                                {featuredProduct.longDescription}
                            </p>

                            <div className="flex gap-8 py-2">
                                {featuredProduct.highlights.map((highlight, index) => (
                                    <div key={index} className="flex items-center gap-2 text-slate-700 text-sm font-medium">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                                        {highlight}
                                    </div>
                                ))}
                            </div>

                            <div className="flex items-center gap-6 pt-2">
                                <Link href={`/product/${featuredProduct.slug}`}>
                                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-colors">
                                        View Specs
                                    </button>
                                </Link>
                                <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2">
                                    Purchase Now <ArrowRight size={18} />
                                </button>
                            </div>
                        </div>
                        <div className="flex-1 w-full relative">
                            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-50">
                                <Image
                                    src={featuredProduct.images.hero}
                                    alt={featuredProduct.name}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Collection Section - Dynamically populated from products.json */}
            <section className="max-w-7xl mx-auto px-6 py-16">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold text-slate-900">The Collection</h2>
                        <p className="text-slate-500">Explore our range of precision engineering tools and devices.</p>
                    </div>

                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                        <button className="px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors bg-slate-900 text-white">
                            All
                        </button>
                        {categories.map((category) => (
                            <button
                                key={category}
                                className="px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors bg-slate-100 text-slate-600 hover:bg-slate-200"
                            >
                                {category.split(' ')[0]}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            slug={product.slug}
                            image={product.images.hero}
                            category={product.category}
                            name={product.name}
                            description={product.description}
                            sku={product.sku}
                        />
                    ))}
                </div>

                <div className="flex justify-center mt-12">
                    <button className="text-slate-500 font-medium hover:text-slate-900 underline underline-offset-4 decoration-2">
                        View Archived Products
                    </button>
                </div>
            </section>

            {/* Feature Section */}
            <section className="max-w-7xl mx-auto px-6 py-16">
                <div className="bg-slate-950 rounded-3xl overflow-hidden shadow-2xl text-white">
                    <div className="flex flex-col lg:flex-row h-full">
                        <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center space-y-8">
                            <span className="text-blue-500 font-bold tracking-wider text-xs uppercase">Excellence</span>
                            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">Engineered for<br />Perfection.</h2>
                            <p className="text-slate-400 text-lg leading-relaxed">
                                Every component is selected from the finest manufacturers globally. Our strict quality control ensures that what you build is built to last.
                            </p>

                            <div className="space-y-6 pt-4">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 text-blue-500">
                                        <Layers size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Multi-Layer PCB</h4>
                                        <p className="text-slate-400 text-sm">Military-grade signal isolation.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 text-blue-500">
                                        <Thermometer size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Thermal Management</h4>
                                        <p className="text-slate-400 text-sm">Passive cooling for silent operation.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative bg-slate-900 min-h-[400px]">
                            {/* Used a darker overlay on the image to blend it */}
                            <Image
                                src="/Background.png" // Reusing amp image as placeholder for exploded view if not generated yet.
                                alt="Engineering Detail"
                                fill
                                className="object-cover opacity-80 mix-blend-overlay"
                            />
                            <div className="absolute inset-0 bg-gradient-to-l from-slate-950/0 to-slate-950"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="max-w-4xl mx-auto px-6 py-24 text-center">
                <div className="bg-gradient-to-b from-white to-slate-50 border border-slate-100 p-12 rounded-3xl shadow-sm">
                    <div className="w-16 h-16 mx-auto bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 text-slate-700">
                        <FlaskConical size={32} />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Need a Custom Solution?</h2>
                    <p className="text-slate-500 max-w-xl mx-auto mb-8">
                        Our labs are open for collaboration. Leverage our R&D expertise to build products that are tailored to your specific industrial needs.
                    </p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium shadow-lg shadow-blue-600/20 transition-all transform hover:scale-105">
                        Start a Project
                    </button>
                </div>
            </section>

        </div>
    );
}


function ProductCard({ slug, image, category, name, description, sku }: { slug: string, image: string, category: string, name: string, description: string, sku?: string }) {
    return (
        <Link href={`/product/${slug}`} className="block h-full">
            <div className="bg-white rounded-2xl border border-slate-100 p-4 hover:shadow-xl hover:border-slate-200 transition-all duration-300 group cursor-pointer flex flex-col h-full">
                <div className="relative aspect-square w-full rounded-xl bg-slate-50 overflow-hidden mb-5">
                    {sku && (
                        <span className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur text-[10px] font-bold px-2 py-1 rounded text-slate-900 uppercase tracking-widest">
                            {sku}
                        </span>
                    )}
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                </div>
                <div className="px-2 pb-2 flex-1 flex flex-col">
                    <span className="text-blue-600 text-[10px] font-bold uppercase tracking-widest mb-2">{category}</span>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{name}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">{description}</p>

                    <button className="w-full py-3 rounded-lg border border-slate-200 text-slate-600 text-sm font-semibold group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-colors flex items-center justify-center gap-2">
                        <Download size={16} /> Technical Sheet
                    </button>
                </div>
            </div>
        </Link>
    )
}

