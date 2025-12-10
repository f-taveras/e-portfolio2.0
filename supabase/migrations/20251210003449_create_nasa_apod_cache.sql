/*
  # NASA APOD Cache Table

  1. New Tables
    - `nasa_apod_cache`
      - `id` (uuid, primary key)
      - `date` (date, unique) - The date of the APOD
      - `url` (text) - Image URL
      - `hdurl` (text, nullable) - HD image URL
      - `title` (text) - Image title
      - `explanation` (text) - Image description
      - `media_type` (text) - Type of media (image/video)
      - `created_at` (timestamptz) - When cached
      
  2. Security
    - Enable RLS on `nasa_apod_cache` table
    - Add policy for anyone to read cached images (public data)
*/

CREATE TABLE IF NOT EXISTS nasa_apod_cache (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  date date UNIQUE NOT NULL,
  url text NOT NULL,
  hdurl text,
  title text NOT NULL,
  explanation text NOT NULL,
  media_type text NOT NULL DEFAULT 'image',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE nasa_apod_cache ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read NASA APOD cache"
  ON nasa_apod_cache
  FOR SELECT
  TO anon, authenticated
  USING (true);