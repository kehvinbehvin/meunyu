/* eslint-disable */
import { intialiseDB } from '../../clients/supabase';
import * as Sentry from '@sentry/nextjs';

const supabase = intialiseDB();

export const saveImages = async (userId: String, files: Array<any>, captions: String) => {
  const payload = files.map((file) => {
    return {
      url: file.location,
      author_id: userId ,
      captions: captions,
    };
  });

  try {
    const { data, error } = await supabase
      .from('Image')
      .insert(payload)
      .select('*');
    
    if (error) {
      Sentry.captureException(error);
    }

    return data;
  } catch (error) {
    Sentry.captureException(error);
  }
};

export const likeImage = async (authorId: number, imageId: number) => {
  try {
    const { data, error } = await supabase
      .from('Like')
      .insert({ author_id: authorId, image_id: imageId })
      .select();

    if (error) {
      Sentry.captureException(error);
    }

    return data;
  } catch (error) {
    Sentry.captureException(error);
  }
};

export const loadImages = async ({
  offset,
  limit,
  sort
}: {
  offset: number;
  limit: number;
  sort: string;
}) => {
  try {
    if (sort === "likes") {
      const { data, error } = await supabase
      .rpc('load_likeby_images')
      .eq('status', 'Approved')
      .eq('deleted', false)
      .range(offset, offset + limit);

      if (error) {
        Sentry.captureException(error);
      }

      return data
    }

    const { data, error } = await supabase
      .from('Image')
      .select("*")
      .eq('status', 'Approved')
      .eq('deleted', false)
      .order('updated_at', { ascending: false })
      .range(offset, offset + limit);
    
    if (error) {
      Sentry.captureException(error);
    }

    return data
  } catch (error) {
    Sentry.captureException(error);
  }
};

/**
 * Called by admin to retrieve images that are yet to confirmed
 */
export const getPendingImages = async () => {
  const { data, error } = await supabase
    .from('Image')
    .select('*, User(name)')
    .eq('status', 'Pending');

  if (error) {
    Sentry.captureException(error);
  }

  return data;
};

/**
 * Called by admin to approve image
 */
export const approveImage = async (imageId: number) => {
  const { error } = await supabase
    .from('Image')
    .update({ status: 'Approved' })
    .eq('fid', imageId);

  if (error) {
    Sentry.captureException(error);
  }

  Sentry.addBreadcrumb({
    message: 'Image approved',
    category: 'debug',
    level: 'debug',
  });
};

/**
 * Called by admin to reject image
 */
 export const rejectImage = async (imageId: number) => {
  const { error } = await supabase
    .from('Image')
    .update({ status: 'Rejected' })
    .eq('fid', imageId);
  if (error) console.log(error)
};