import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rlsmtqzpjokdyfwlrawm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJsc210cXpwam9rZHlmd2xyYXdtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYwMDIzNDksImV4cCI6MjA0MTU3ODM0OX0.wHN_wJ5j6GtUqwtm3YJCokTGEvKvtfwV3Szgptm5rYQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
