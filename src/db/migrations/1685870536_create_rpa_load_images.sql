create or replace function load_sorted_images() -- 1
returns setof "Image" -- 2
language sql -- 3
as $$  -- 4
  SELECT *
  FROM "Image"
  ORDER BY coalesce(ARRAY_LENGTH(likes,1), 0) DESC
$$; --6