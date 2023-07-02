/* eslint-disable */
import { intialiseDB } from '../../clients/supabase';

const supabase = intialiseDB();

export const saveImages = async (files: Array<any>) => {
  const payload = files.map((file) => {
    return {
      url: file.location,
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
}: {
  offset: number;
  limit: number;
}) => {
  try {
    const { data } = await supabase
      .from('Image')
      .select('created_at, fid, url, User( name ), Like( author_id )')
      .eq('status', 'Approved')
      .eq('deleted', false)
      .range(offset, offset + limit);

    return data?.map((image) => ({
      ...image,
      // @ts-ignore
      author: image.User.name,
      likes: image.Like.map((author) => author.author_id),
    }));
  } catch (error) {
    console.error(error);
  }
};
