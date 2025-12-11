/*
  # Create Contact Submissions Table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text) - Name of the person submitting the form
      - `email` (text) - Email address of the submitter
      - `message` (text) - The message content
      - `email_sent` (boolean) - Whether the email was successfully sent
      - `created_at` (timestamptz) - Timestamp of submission
      - `ip_address` (text, optional) - IP address for rate limiting/spam prevention

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for service role to insert submissions
    - No public read access (admin only)

  3. Notes
    - This table stores all contact form submissions for record-keeping
    - Email sending is handled by the edge function
    - RLS ensures only authenticated operations can access the data
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  email_sent boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  ip_address text
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role can insert submissions"
  ON contact_submissions
  FOR INSERT
  TO service_role
  WITH CHECK (true);

CREATE POLICY "Service role can read submissions"
  ON contact_submissions
  FOR SELECT
  TO service_role
  USING (true);

CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at 
  ON contact_submissions(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_contact_submissions_email_sent 
  ON contact_submissions(email_sent);