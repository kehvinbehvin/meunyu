create or replace function load_likeby_images() -- 1
returns table (
    fid int8, 
    created_at timestamp,
    updated_at timestamp,
    url varchar,
    deleted boolean,
    status varchar,
    author_id int8,
    captions varchar,
    likes jsonb,
    author_name varchar
    ) 
language sql -- 3
as $$  -- 4
  SELECT sub.*, "User".name as author_name 
  FROM (
    SELECT "Image".*, json_agg("Like".author_id) as likes 
    FROM "Image"
    JOIN "Like" ON "Image".fid = "Like".image_id
    GROUP BY "Image".fid
    ORDER BY array_length(array_agg("Like".author_id), 1) DESC
  ) sub
  JOIN "User" ON sub.author_id = "User".id;
$$; --6

ALTER DEFAULT PRIVILEGES REVOKE EXECUTE ON FUNCTIONS FROM PUBLIC;

-- Choose which roles can execute functions
GRANT EXECUTE ON FUNCTION load_latest_images TO anon;