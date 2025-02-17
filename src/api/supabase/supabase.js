import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nbmgjyuzaxjxupldvbxm.supabase.co';
const supabaseKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ibWdqeXV6YXhqeHVwbGR2YnhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk3MTQ1ODMsImV4cCI6MjA1NTI5MDU4M30.YUz2HcxRro0Z-bjfy12weHTxJfTMF0P7JptbTadz4lM';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
