/* eslint-disable */
import { intialiseDB } from '../../clients/supabase';

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
    console.log('error', error);
    console.log('Images saved');
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const likeImage = async (authorId: number, imageId: number) => {
  try {
    const { data, error } = await supabase
      .from('Like')
      .insert({ author_id: authorId, image_id: imageId })
      .select();

    console.log('error', error);

    return data;
  } catch (err) {
    console.error(err);
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
      const { data } = await supabase
      .rpc('load_likeby_images')
      .eq('status', 'Approved')
      .eq('deleted', false)
      .range(offset, offset + limit);
      return data
    }

    const { data } = await supabase
      .from('Image')
      .select("*")
      .order('updated_at', { ascending: false })

    return data
  } catch (error) {
    console.error(error);
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

  if (error) console.log(error);
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
  if (error) console.log(error)
};
