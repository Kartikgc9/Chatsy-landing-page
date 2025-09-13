-- Create the waitlist table (if it doesn't exist)
CREATE TABLE IF NOT EXISTS waitlist (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  email text NOT NULL UNIQUE,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist to avoid conflicts
DROP POLICY IF EXISTS "Allow anonymous insert" ON waitlist;
DROP POLICY IF EXISTS "Allow anonymous inserts" ON waitlist;
DROP POLICY IF EXISTS "Allow individual read access" ON waitlist;
DROP POLICY IF EXISTS "Allow authenticated reads" ON waitlist;

-- Create a policy to allow anonymous inserts
CREATE POLICY "Allow anonymous insert" ON waitlist
  FOR INSERT
  WITH CHECK (true);

-- Create a policy to allow viewing submissions
CREATE POLICY "Allow individual read access" ON waitlist
  FOR SELECT
  USING (true);