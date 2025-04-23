// pages/index.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function LegacyHome() {
  const router = useRouter();
  
  useEffect(() => {
    router.replace('/');
  }, [router]);
  
  return <div>Redirigiendo...</div>;
}
