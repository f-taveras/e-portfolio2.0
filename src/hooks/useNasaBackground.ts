import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

interface NasaApod {
  url: string;
  hdurl?: string;
  media_type: string;
  title: string;
  explanation: string;
  date?: string;
}

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export function useNasaBackground() {
  const [backgroundUrl, setBackgroundUrl] = useState<string>('');
  const [apodData, setApodData] = useState<NasaApod | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNasaImage = async () => {
      try {
        const today = new Date().toISOString().split('T')[0];

        // First, check if today's data exists in Supabase
        const { data: cached, error: cacheError } = await supabase
          .from('nasa_apod_cache')
          .select('*')
          .eq('date', today)
          .maybeSingle();

        if (cached) {
          // Use cached data
          setApodData(cached);
          if (cached.media_type === 'image') {
            setBackgroundUrl(cached.hdurl || cached.url);
          }
          setIsLoading(false);
          return;
        }

        // If not cached, fetch from NASA API
        const nasaApiKey = import.meta.env.VITE_NASA_API_KEY || 'DEMO_KEY';
        const nasaResponse = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${nasaApiKey}`
        );

        if (!nasaResponse.ok) {
          throw new Error('Failed to fetch NASA image');
        }

        const nasaData: NasaApod = await nasaResponse.json();
        setApodData(nasaData);

        if (nasaData.media_type === 'image') {
          setBackgroundUrl(nasaData.hdurl || nasaData.url);

          // Try to cache the data for future use
          const { error: insertError } = await supabase
            .from('nasa_apod_cache')
            .insert({
              date: nasaData.date,
              url: nasaData.url,
              hdurl: nasaData.hdurl,
              title: nasaData.title,
              explanation: nasaData.explanation,
              media_type: nasaData.media_type,
            });

          if (insertError) {
            console.warn('Could not cache NASA data:', insertError.message);
          }
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

  return { backgroundUrl, apodData, isLoading, error };
}
