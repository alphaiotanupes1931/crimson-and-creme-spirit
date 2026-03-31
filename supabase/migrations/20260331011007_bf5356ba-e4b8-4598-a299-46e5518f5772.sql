
-- Create brothers directory table
CREATE TABLE public.brothers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  phone TEXT,
  email TEXT,
  role TEXT,
  semester TEXT NOT NULL,
  semester_sort INT NOT NULL DEFAULT 0,
  semester_label TEXT NOT NULL DEFAULT '',
  position TEXT,
  field_of_study TEXT,
  job TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.brothers ENABLE ROW LEVEL SECURITY;

-- Authenticated users can view all brothers
CREATE POLICY "Authenticated users can view all brothers"
  ON public.brothers FOR SELECT
  TO authenticated
  USING (true);

-- Anon can also view (portal uses password gate, not auth gate for viewing)
CREATE POLICY "Anon can view brothers"
  ON public.brothers FOR SELECT
  TO anon
  USING (true);

-- Brothers can update their own linked profile
CREATE POLICY "Brothers can update own profile"
  ON public.brothers FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Timestamp trigger
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_brothers_updated_at
  BEFORE UPDATE ON public.brothers
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Indexes
CREATE INDEX idx_brothers_name ON public.brothers (lower(first_name), lower(last_name));
CREATE INDEX idx_brothers_user_id ON public.brothers (user_id);
CREATE INDEX idx_brothers_semester_sort ON public.brothers (semester_sort DESC);
