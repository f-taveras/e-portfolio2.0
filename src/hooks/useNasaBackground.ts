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
        const response = await fetch(
          'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'
        );
        const data: NasaApod = await response.json();

        if (data.media_type === 'image') {
          setBackgroundUrl(data.hdurl || data.url);
        }
        setIsLoading(false);
      } catch (err) {
        setError('Failed to load NASA image');
        setIsLoading(false);
      }
    };

    fetchNasaImage();
  }, []);

  return { backgroundUrl, isLoading, error };
}
