import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

interface NasaApod {
  url: string;
  hdurl?: string;
  media_type: string;
  title: string;
  explanation: string;
  date?: string;
}

export function useNasaBackground() {
  const [backgroundUrl, setBackgroundUrl] = useState<string>('');
  const [apodData, setApodData] = useState<NasaApod | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNasaImage = async (retries = 2) => {
      try {
        const today = new Date().toISOString().split('T')[0];

        // Check cache first for instant loading
        const { data: cached } = await supabase
          .from('nasa_apod_cache')
          .select('*')
          .eq('date', today)
          .maybeSingle();

        if (cached) {
          setApodData(cached);
          const imageUrl = cached.hdurl || cached.url;
          setBackgroundUrl(imageUrl);
          setIsLoading(false);
          return;
        }

        // Not cached - call edge function (may be slow)
        const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/nasa-apod`;

        const response = await fetch(apiUrl, {
          headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          },
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.error || 'Failed to fetch NASA image');
        }

        const nasaData: NasaApod = await response.json();
        setApodData(nasaData);

        if (nasaData.media_type === 'image') {
          const imageUrl = nasaData.hdurl || nasaData.url;
          setBackgroundUrl(imageUrl);
          setIsLoading(false);
        } else {
          setIsLoading(false);
        }
      } catch (err) {
        console.error('Error loading NASA background:', err);

        // Retry on failure
        if (retries > 0) {
          setTimeout(() => fetchNasaImage(retries - 1), 2000);
        } else {
          // Use a fallback background
          const fallbackUrl = 'https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&w=1920';
          const img = new Image();
          img.onload = () => {
            setBackgroundUrl(fallbackUrl);
            setError('Using fallback background image');
            setIsLoading(false);
          };
          img.src = fallbackUrl;
        }
      }
    };

    fetchNasaImage();
  }, []);

  return { backgroundUrl, apodData, isLoading, error };
}
