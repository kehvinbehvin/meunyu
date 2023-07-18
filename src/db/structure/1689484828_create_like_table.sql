create table
  public.Like (
    image_id bigint not null,
    author_id bigint not null,
    constraint Like_author_id_image_id_key unique (author_id, image_id),
    constraint Like_author_id_fkey foreign key (author_id) references "User" (id) on delete cascade,
    constraint Like_image_id_fkey foreign key (image_id) references "Image" (fid) on delete cascade
  ) tablespace pg_default;