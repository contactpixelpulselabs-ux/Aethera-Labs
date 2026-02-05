import React from "react";
import Image from "next/image";
import { MoveUpRight } from "lucide-react";

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  badge?: string;
}

const products: Product[] = [
  {
    id: 1,
    title: "Crystal X",
    description:
      "Transparent computing interfaces for seamless data integration.",
    image: "/CrystalX.jpg",
    badge: "FLAGSHIP",
  },
  {
    id: 2,
    title: "Crystal X S400",
    description: "Quantum processing units scaled for enterprise architecture.",
    image: "/Product2.jpg",
    badge: "COMING SOON",
  },
  // {
  //   id: 3,
  //   title: "Evoluto",
  //   description:
  //     "Adaptive AI cores that learn and evolve with your infrastructure.",
  //   image: "/Product3.jpg",
  //   badge: "NEW",
  // },
];

const Product: React.FC = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-24">
      {/* Header */}
      <div className="flex justify-between items-end mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">
          {/* The Vertical Trilogy */}
          Our Products
        </h2>
        <a
          href="#"
          className="group flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
        >
          View all products
          <MoveUpRight className="w-3 h-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-zinc-100 cursor-pointer"
          >
            {/* Background Image */}
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Content Container */}
            <div className="absolute bottom-0 left-0 p-8 w-full">
              {product.badge && (
                <span className="inline-block px-3 py-1 mb-4 text-[10px] font-bold tracking-widest text-white bg-blue-600 rounded-full">
                  {product.badge}
                </span>
              )}
              <h3
                className={`${
                  product.title === "Crystal X" ||
                  product.title === "Crystal X S400"
                    ? "font-ethno"
                    : ""
                } text-2xl font-bold text-white mb-2`}
              >
                {product.title}
              </h3>
              <p className="text-zinc-300 text-sm leading-relaxed max-w-[240px]">
                {product.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;
