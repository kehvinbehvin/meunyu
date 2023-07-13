/* eslint-disable */
import { intialiseDB } from '../../clients/supabase';

const supabase = intialiseDB();

export const retrieveUserMessage = async (user: User) => {
    const { data, error } = await supabase
        .from('Message')
        .select('*')
        .eq('recipient_id', user.id);

    if (error) {
        return ""
    }

    if (data.length === 0) {
        return ""
    }

    return data[0]["message"]
}

