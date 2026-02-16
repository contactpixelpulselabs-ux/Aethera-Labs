// components/NavButton.tsx
'use client';
import Link from 'next/link';

interface NavButtonProps {
  name: string;
  link: string;
  className?: string; 
}

const Button = ({ name, link, className = "" }: NavButtonProps) => {
  // Check if "w-full" was passed in the className prop
  const isFullWidth = className.includes('w-full');

  return (
    <Link 
      href={link} 
    
      className={isFullWidth ? "block w-full" : "inline-block"}
    >
      <button 
        className={`bg-[#1d5bf0] hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors shadow-sm ${className}`}
      >
        {name}
      </button>
    </Link>
  );
};

export default Button;