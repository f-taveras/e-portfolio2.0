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
    const loadImageData = async () => {
      const today = new Date().toISOString().split('T')[0];

      // Load cached data immediately (today's or most recent)
      const loadFromCache = async () => {
        // Try today's cache first
        const { data: todayCache } = await supabase
          .from('nasa_apod_cache')
          .select('*')
          .eq('date', today)
          .maybeSingle();

        if (todayCache) {
          return todayCache;
        }

        // Fall back to most recent cache
        const { data: recentCache } = await supabase
          .from('nasa_apod_cache')
          .select('*')
          .order('date', { ascending: false })
          .limit(1)
          .maybeSingle();

        return recentCache;
      };

      // Fetch fresh data from NASA API in background
      const fetchFromNasa = async () => {
        try {
          const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/nasa-apod`;

          const response = await fetch(apiUrl, {
            headers: {
              'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
            },
          });

          if (!response.ok) {
            throw new Error('Failed to fetch from NASA');
          }

          const nasaData: NasaApod = await response.json();
          return nasaData;
        } catch (err) {
          console.error('Error fetching from NASA API:', err);
          return null;
        }
      };

      // Load cache immediately
      const cachedData = await loadFromCache();
      if (cachedData) {
        setApodData(cachedData);
        const imageUrl = cachedData.hdurl || cachedData.url;
        setBackgroundUrl(imageUrl);
        setIsLoading(false);
      }

      // Fetch from NASA in background - don't wait
      fetchFromNasa().then((nasaData) => {
        if (nasaData && nasaData.media_type === 'image') {
          // Only update if it's different from cached data
          if (!cachedData || cachedData.date !== nasaData.date) {
            setApodData(nasaData);
            const imageUrl = nasaData.hdurl || nasaData.url;
            setBackgroundUrl(imageUrl);
          }
        }
      });

      // If no cache, use fallback while waiting for NASA
      if (!cachedData) {
        const fallbackUrl = 'https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&w=1920';
        const img = new Image();
        img.onload = () => {
          setBackgroundUrl(fallbackUrl);
          setIsLoading(false);
        };
        img.src = fallbackUrl;
      }
    };

    loadImageData();
  }, []);

  return { backgroundUrl, apodData, isLoading, error };
}
