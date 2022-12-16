import { createClient } from '@supabase/supabase-js'

const supabaseURL = process.env.DB_URL
const supabaseKey = process.env.DB_KEY
const supabase = createClient(supabaseURL,supabaseKey)

export default supabase