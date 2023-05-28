/* eslint-disable */
import { createClient } from '@supabase/supabase-js';

export const intialiseDB = () => {
    return createClient(process.env.DB_URL ?? "", process.env.DB_PUBLIC_ANON ?? "")
}