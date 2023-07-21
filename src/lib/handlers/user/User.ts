/* eslint-disable */
import type { SupabaseClient } from '@supabase/supabase-js';
import * as Sentry from '@sentry/nextjs';
import { intialiseDB } from '../../clients/supabase';

export class UserRepository {
  supabase: SupabaseClient;

  constructor() {
    this.supabase = intialiseDB();
  }

  async getUser(slug: string) {
    const { data, error } = await this.supabase
      .from('User')
      .select('*')
      .eq('slug', slug);

    if (error) {
      Sentry.captureException(error);
    }

    return data ? data[0] : undefined;
  }

  async getAllSlugs() {
    const { data, error } = await this.supabase
      .from('User')
      .select('name, connection, slug');

    if (error) {
      Sentry.captureException(error);
    }

    return data;
  }
}

export const userRepository = new UserRepository();
