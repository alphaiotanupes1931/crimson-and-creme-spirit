ALTER TABLE public.brothers ADD COLUMN IF NOT EXISTS line_name text;

GRANT INSERT, DELETE ON public.brothers TO authenticated;

DROP POLICY IF EXISTS "Brothers can insert own profile" ON public.brothers;
CREATE POLICY "Brothers can insert own profile"
ON public.brothers
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Brothers can delete own profile" ON public.brothers;
CREATE POLICY "Brothers can delete own profile"
ON public.brothers
FOR DELETE
TO authenticated
USING (auth.uid() = user_id);