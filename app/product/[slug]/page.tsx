
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Bluetooth, ShieldCheck, Cpu, Download, CheckCircle2 } from 'lucide-react';
import { getProductBySlug, getAllProductSlugs } from '@/lib/products';

// Generate static params for all product slugs
export async function generateStaticParams() {
    const slugs = getAllProductSlugs();
    return slugs.map((slug) => ({
        slug: slug,
    }));
}

interface ProductPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
    const resolvedParams = await params;
    const product = getProductBySlug(resolvedParams.slug);

    if (!product) {
        notFound();
    }

    const getIcon = (iconName: string) => {
        const icons: { [key: string]: React.ReactNode } = {
            bluetooth: <Bluetooth size={28} />,
            shield: <ShieldCheck size={24} />,
            cpu: <Cpu size={24} />,
        };
        return icons[iconName] || <Cpu size={24} />;
    };

    // ✅ UPDATED COLOR LOGIC
    const getIconColor = (feature: any, index: number): string => {
        if (feature.icon === 'bluetooth') {
            return 'bg-blue-600';
        }

        const colors = ['bg-orange-600', 'bg-slate-200'];
        return colors[index % colors.length];
    };

    const getTextColor = (feature: any, index: number): string => {
        if (feature.icon === 'bluetooth') {
            return 'text-white';
        }

        const colors = ['text-white', 'text-slate-700'];
        return colors[index % colors.length];
    };

    return (
        <div className="min-h-screen bg-white">

            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-6 pt-20 pb-12 lg:pt-32 lg:pb-24">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
                    <div className="flex-1 space-y-8">
                        <div>
                            {product.sku && (
                                <span className="text-orange-500 font-bold tracking-widest text-xs uppercase mb-2 block">
                                    Model: {product.sku}
                                </span>
                            )}
                            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight">
                                {product.tagline ? (
                                    <>
                                        {product.tagline.split('.')[0]}.<br />
                                        <span className="text-blue-600">
                                            {product.tagline.split('.')[1]}.
                                        </span>
                                    </>
                                ) : (
                                    <>
                                        {product.name}.<br />
                                        <span className="text-blue-600">Excellence.</span>
                                    </>
                                )}
                            </h1>
                        </div>

                        <p className="text-lg text-slate-500 max-w-md leading-relaxed">
                            {product.longDescription}
                        </p>

                        <div className="flex gap-4">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium shadow-xl shadow-blue-600/20 transition-all cursor-pointer">
                                Add to Cart ${product.price}
                            </button>

                           {/* <button className="text-blue-600 font-medium px-4 py-3 hover:text-blue-700 flex items-center gap-2 cursor-pointer">
                                <Download size={20} />
                                Download Spec Sheet
                            </button> */}
                        </div>
                    </div>

                    <div className="flex-1 w-full flex justify-center">
                        <div className="relative w-full max-w-lg aspect-[4/3]">
                            <div className="absolute inset-0 bg-gradient-to-tr from-slate-100 to-white rounded-[3rem] -rotate-3 transform scale-95 opacity-50"></div>
                            <Image
                                src={product.images.detail || product.images.hero}
                                alt={product.name}
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

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                        {product.features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-slate-50 p-8 rounded-3xl hover:shadow-lg transition-shadow"
                            >
                                <div
                                    className={`w-14 h-14 rounded-2xl ${getIconColor(feature, index)} ${getTextColor(feature, index)} flex items-center justify-center mb-6`}
                                >
                                    {getIcon(feature.icon)}
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mb-3">
                                    {feature.title}
                                </h3>

                                <p className="text-sm text-slate-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
 {/* Cinematic Section */}
            {product.quote && (
                <section className="relative h-[600px] w-full bg-slate-950 flex items-center justify-center text-center px-6">
                    <div className="absolute inset-0">
                        {product.images.lifestyle && (
                            <Image
                                src={product.images.lifestyle}
                                alt="Lifestyle"
                                fill
                                className="object-cover opacity-60"
                            />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                    </div>

                    <div className="relative z-10 max-w-2xl">
                        <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">&quot;{product.quote}&quot;</h2>
                        {product.quoteDescription && (
                            <p className="text-slate-300 text-lg leading-relaxed">
                                {product.quoteDescription}
                            </p>
                        )}
                    </div>
                </section>
            )}
{/* Specs Section */}
            <section className="max-w-4xl mx-auto px-6 py-24">
  <h3 className="text-2xl font-bold text-slate-900 text-center mb-12">Technical Specifications</h3>

  <div className="space-y-4">
    {Object.entries(product.specifications).map(([key, value], i) => {
      // Convert camelCase to Title Case with spaces
      const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());

      return (
        <div
          key={i}
          className="flex justify-between items-start py-4 border-b border-slate-100 last:border-0 hover:bg-slate-50 px-4 rounded-lg transition-colors leading-loose"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400 w-1/3">{label}</span>
          <div className="font-bold text-slate-900 w-2/3 text-right space-y-1 break-words">
            {Array.isArray(value)
              ? value.map((item, idx) => <div key={idx}>{item}</div>)
              : value}
          </div>
        </div>
      );
    })}
  </div>
</section>

            {/* Assurance / Footer-ish */}
            <section className="bg-slate-50 py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                        <div className="flex-1">
                            <h3 className="text-3xl font-bold text-slate-900 mb-4">The Aethera Standard.</h3>
                            <p className="text-slate-600 text-base leading-relaxed max-w-lg">
                                We stand behind our engineering. Each device is hand-tested in our labs for 24 hours before shipment. We only ship perfection.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="bg-white px-5 py-3 rounded-xl border-2 border-slate-200 text-slate-700 text-sm font-semibold flex items-center gap-3 hover:border-green-500 transition-colors">
                                <CheckCircle2 size={20} className="text-green-600" />
                                <span>6 Months Warranty</span>
                            </div>
                            {/*<div className="bg-white px-5 py-3 rounded-xl border-2 border-slate-200 text-slate-700 text-sm font-semibold flex items-center gap-3 hover:border-blue-500 transition-colors">
                                <CheckCircle2 size={20} className="text-blue-600" />
                                <span>30-Day Returns</span>
                            </div>*/}
                        </div>
                    </div>
                </div>
            </section>

            {/* Back to Products Link */}
            <section className="max-w-7xl mx-auto px-6 py-8">
                <Link href="/products" className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2 w-fit">
                    ← Back to All Products
                </Link>
            </section>
        </div>
    );
}