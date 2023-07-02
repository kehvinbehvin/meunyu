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
    const { data } = await supabase.from('Image').insert(payload).select('*');
    console.log('Images saved');
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const likeImage = async (authorId: number, imageId: number) => {
  try {
    const { data } = await supabase
      .from('Like')
      .insert({ author_id: authorId, image_id: imageId })
      .select();

    return data;
  } catch (err) {
    console.error(err);
  }
};

export const loadImages = async (filters: any) => {
  const range = filters.range;

  try {
    const { data } = await supabase
      .from('Image')
      .select('created_at, fid, url, User( name ), Like( author_id )')
      .eq('status', 'Approved')
      .eq('deleted', false);

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
