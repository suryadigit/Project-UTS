import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://yhvagkgcvehcbsexctmh.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlodmFna2djdmVoY2JzZXhjdG1oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM3NzAwNzMsImV4cCI6MjAyOTM0NjA3M30.kvA-v-AunHTELJ9sEyzrFAmYOWlRNKEpKWtQCtvF07U';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);