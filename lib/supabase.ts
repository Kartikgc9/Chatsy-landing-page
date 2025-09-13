import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Create a function to get the Supabase client safely
export const getSupabaseClient = () => {
  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Supabase environment variables not found')
    return null
  }
  return createClient(supabaseUrl, supabaseAnonKey)
}

// For backward compatibility, export a default client (will be null if env vars missing)
export const supabase = getSupabaseClient()