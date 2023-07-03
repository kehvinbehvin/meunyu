import type { SupabaseClient } from '@supabase/supabase-js';

import { intialiseDB } from '../../clients/supabase';

export class UserRepository {
  supabase: SupabaseClient;

  constructor() {
    this.supabase = intialiseDB();
  }

  async getUser(slug: string) {
    const { data } = await this.supabase
      .from('User')
      .select('*')
      .eq('slug', slug);
    return data ? data[0] : undefined;
  }

  async getAllSlugs() {
    const { data } = await this.supabase
      .from('User')
      .select('name, connection, slug');
    return data;
  }
}

export const userRepository = new UserRepository();
