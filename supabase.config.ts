
import { createClient } from '@supabase/supabase-js'

const url = process.env.SUPABASE_URL!
const apiKey = process.env.SUPABASE_KEY!

export const supabase = createClient(url, apiKey)