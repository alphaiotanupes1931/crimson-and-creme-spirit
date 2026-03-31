
-- Function to claim a brother profile (links user_id to an unclaimed profile)
CREATE OR REPLACE FUNCTION public.claim_brother_profile(brother_id UUID)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  UPDATE public.brothers
  SET user_id = auth.uid()
  WHERE id = brother_id
    AND user_id IS NULL;
  
  RETURN FOUND;
END;
$$;

-- Allow authenticated users to call this function
GRANT EXECUTE ON FUNCTION public.claim_brother_profile(UUID) TO authenticated;
