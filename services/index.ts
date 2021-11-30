import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient('https://lgorurlbqociyuaxqpon.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNzgzNjEyOCwiZXhwIjoxOTUzNDEyMTI4fQ.REMBIXKmWgwy-uZ2EVd2YREawtFe9pl1t6JoU7730Jc')
export const supabaseServer = createClient('https://lgorurlbqociyuaxqpon.supabase.co', process.env.SUPABASE_SECRET);