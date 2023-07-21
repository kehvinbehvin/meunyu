/* eslint-disable */
import { intialiseDB } from '../../clients/supabase';
import * as Sentry from '@sentry/nextjs';

const supabase = intialiseDB();

export const retrieveUserMessage = async (user: User) => {
    const { data, error } = await supabase
        .from('Message')
        .select('*')
        .eq('recipient_id', user.id);

    if (error) {
        Sentry.captureException(error);
        return ""
    }

    if (data.length === 0) {
        return ""
    }

    return data[0]["message"]
}

