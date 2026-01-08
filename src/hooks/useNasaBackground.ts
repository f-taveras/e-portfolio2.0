import { useState, useEffect } from 'react';

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
        // Call the edge function to get NASA APOD
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
          setBackgroundUrl(nasaData.hdurl || nasaData.url);
        }

        setIsLoading(false);
      } catch (err) {
        console.error('Error loading NASA background:', err);

        // Retry on failure
        if (retries > 0) {
          setTimeout(() => fetchNasaImage(retries - 1), 2000);
        } else {
          // Use a fallback background from NASA's image library
          setBackgroundUrl('https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&w=1920');
          setError('Using fallback background image');
          setIsLoading(false);
        }
      }
    };

    fetchNasaImage();
  }, []);

  return { backgroundUrl, apodData, isLoading, error };
}
