import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'sbryacaoahweuvvcowba';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNicnlhY2FvYWh3ZXV2dmNvd2JhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYzMDE2NDUsImV4cCI6MjA4MTg3NzY0NX0.OPibvEEDiEdghVnjpo9RDhCfH0ASYy7nFGX7Lu6dnEo';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);