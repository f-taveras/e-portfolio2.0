import { useState, useEffect } from 'react';

interface NasaApod {
  url: string;
  hdurl?: string;
  media_type: string;
  title: string;
  explanation: string;
}

export function useNasaBackground() {
  const [backgroundUrl, setBackgroundUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNasaImage = async () => {
      try {
        const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/nasa-apod`;

        const response = await fetch(apiUrl, {
          headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch NASA image');
        }

        const data: NasaApod = await response.json();

        if (data.media_type === 'image') {
          setBackgroundUrl(data.hdurl || data.url);
        }
        setIsLoading(false);
      } catch (err) {
        console.error('Error loading NASA background:', err);
        setError('Failed to load NASA image');
        setIsLoading(false);
      }
    };

    fetchNasaImage();
  }, []);

  return { backgroundUrl, isLoading, error };
}
