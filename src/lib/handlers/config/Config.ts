import type { SupabaseClient } from '@supabase/supabase-js';

import { intialiseDB } from '../../clients/supabase';

class ConfigService {
  supabase: SupabaseClient;

  constructor() {
    this.supabase = intialiseDB();
  }

  async setShowMessages(showMessages: boolean) {
    await this.supabase
      .from('Configs')
      .update({ value: JSON.stringify(showMessages) })
      .eq('key', 'showMessages');
  }

  async getShowMessages() {
    const { data } = await this.supabase
      .from('Config')
      .select('value')
      .eq('key', 'showMessages');

    return JSON.parse((data as any[])[0].value);
  }
}

export const configService = new ConfigService();
