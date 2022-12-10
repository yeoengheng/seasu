import { createClient } from '@supabase/supabase-js'

const supabaseURL = "https://ambdsffsqonmiqjjdtlo.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFtYmRzZmZzcW9ubWlxampkdGxvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ4MTMzNDgsImV4cCI6MTk4MDM4OTM0OH0.KNjR32rLA4obcEFGPlbM45_0aTolxBGZFcewj81MfoM"

const supabase = createClient(supabaseURL,supabaseKey)

export default supabase