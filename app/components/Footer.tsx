'use client';

import React from 'react';
import Link from 'next/link';
import { Globe, Share2 } from 'lucide-react';
import { getAllProducts } from '@/lib/products';

const Footer: React.FC = () => {
  // Dynamically load products from JSON
  const allProducts = getAllProducts();

  // Create product links dynamically - limit to first 6 products
  const productLinks = allProducts.slice(0, 6).map(product => ({
    name: product.shortName || product.name,
    href: `/product/${product.slug}`
  }));

  const companyLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'News', href: '/news' },
    { name: 'Contact', href: '/contact' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
  ];

  const FooterHeading: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
      {children}
    </h3>
  );

  const FooterLinkList: React.FC<{ links: { name: string; href: string }[] }> = ({ links }) => (
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link.name}>
          <Link
            href={link.href}
            className="text-base text-gray-500 hover:text-gray-900 transition-colors"
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <footer className="bg-white border-t border-gray-100" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Logo and Tagline Section */}
          <div className="space-y-8 xl:col-span-1">
            <Link href="/" className="flex items-center gap-3 w-fit">
              {/* Reusing the Logo SVG for consistency */}
              <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4Z" />
                </svg>
              </div>
              <span className="text-gray-900 font-bold text-lg tracking-tight">
                Aethera Labs
              </span>
            </Link>
            <p className="text-base text-gray-500 leading-relaxed max-w-xs">
              Bridging the gap between tomorrow's ideas and today's reality through
              precision engineering.
            </p>
          </div>

          {/* Links Section */}
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-y-0 sm:gap-x-8 xl:mt-0 xl:col-span-2">
            <div className="mt-12 sm:mt-0">
              <FooterHeading>Company</FooterHeading>
              <FooterLinkList links={companyLinks} />
            </div>
            <div className="mt-12 sm:mt-0">
              <FooterHeading>Products</FooterHeading>
              <FooterLinkList links={productLinks} />
              {allProducts.length > 6 && (
                <div className="mt-4">
                  <Link
                    href="/products"
                    className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                  >
                    View All Products →
                  </Link>
                </div>
              )}
            </div>
            <div className="mt-12 sm:mt-0">
              <FooterHeading>Legal</FooterHeading>
              <FooterLinkList links={legalLinks} />
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Icons Section */}
        <div className="mt-12 border-t border-gray-200 pt-8 flex flex-col-reverse sm:flex-row justify-between items-center">
          <p className="text-base text-gray-400 mt-4 sm:mt-0">
            &copy; 2026 Aethera Labs Inc. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Global</span>
              <Globe className="h-6 w-6" aria-hidden="true" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Share</span>
              <Share2 className="h-6 w-6" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;