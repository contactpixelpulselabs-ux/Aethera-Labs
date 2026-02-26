'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function NotFound() {
    const router = useRouter();

  useEffect(() => {
        const timer = setTimeout(() => {
            router.push('/');
        }, 1000); 

    
        return () => clearTimeout(timer);
    }, [router]);


    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-7xl font-bold text-blue-700 mb-4">404</h1>
                <p className="text-xl text-gray-600 mb-8">Page Not Found</p>
                <p className="text-2xl  text-gray-500">Redirecting to home page...</p>
            </div>
        </div>
    );
}
