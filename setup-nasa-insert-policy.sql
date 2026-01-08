-- Run this SQL in your Supabase SQL Editor to allow the frontend to cache NASA data
-- Go to: https://supabase.com/dashboard/project/ernfpeqethsfkxhjvadd/sql/new

CREATE POLICY "Anyone can insert NASA APOD cache"
  ON nasa_apod_cache
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
