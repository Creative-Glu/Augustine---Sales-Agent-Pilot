'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function NotFoundPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/login'); // Redirect to /login after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timer
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-xl mb-2">Page Not Found</p>
      <p className="text-gray-400">Redirecting to login in 3 seconds...</p>
    </div>
  );
}
