import { createClient } from 'npm:@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Client-Info, Apikey',
};

interface NasaApod {
  url: string;
  hdurl?: string;
  media_type: string;
  title: string;
  explanation: string;
  date: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const today = new Date().toISOString().split('T')[0];

    const { data: cached, error: cacheError } = await supabase
      .from('nasa_apod_cache')
      .select('*')
      .eq('date', today)
      .maybeSingle();

    if (cached) {
      return new Response(JSON.stringify(cached), {
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      });
    }

    const nasaApiKey = Deno.env.get('NASA_API_KEY') || 'DEMO_KEY';
    const nasaResponse = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${nasaApiKey}`
    );

    if (!nasaResponse.ok) {
      throw new Error(`NASA API error: ${nasaResponse.status}`);
    }

    const nasaData: NasaApod = await nasaResponse.json();

    if (nasaData.media_type === 'image') {
      const { data: inserted, error: insertError } = await supabase
        .from('nasa_apod_cache')
        .insert({
          date: nasaData.date,
          url: nasaData.url,
          hdurl: nasaData.hdurl,
          title: nasaData.title,
          explanation: nasaData.explanation,
          media_type: nasaData.media_type,
        })
        .select()
        .single();

      if (insertError && insertError.code !== '23505') {
        console.error('Error caching NASA APOD:', insertError);
      }

      return new Response(JSON.stringify(inserted || nasaData), {
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      });
    }

    return new Response(JSON.stringify(nasaData), {
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error in nasa-apod function:', error);
    return new Response(
      JSON.stringify({ error: error.message || 'Internal server error' }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  }
});