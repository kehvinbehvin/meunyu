create table
  public."Image" (
    fid bigint generated by default as identity not null,
    created_at timestamp with time zone null default now(),
    updated_at timestamp with time zone null default now(),
    url character varying null default 'NULL'::character varying,
    deleted boolean null default false,
    author_id bigint null,
    captions text null default ''::text,
    constraint Image_pkey primary key (fid)
  ) tablespace pg_default;

CREATE TYPE status_enum AS ENUM (
  'Approved',
  'Rejected',
  'Pending'
);

ALTER TABLE "Image"
ADD COLUMN status status_enum DEFAULT 'Pending'::status_enum;

create table
  public."User" (
    id bigint generated by default as identity not null,
    name character varying null,
    isAdmin boolean null,
    slug text not null,
    attendance jsonb not null,
    connection text null,
    language text null default 'en'::text,
    constraint User_pkey primary key (id),
    constraint User_slug_key unique (slug)
  ) tablespace pg_default;

ALTER TABLE "Image"
ADD CONSTRAINT Image_author_id_fkey FOREIGN KEY (author_id)
REFERENCES "User" (id)
ON DELETE SET NULL;

create table
  public."Like" (
    image_id bigint not null,
    author_id bigint not null,
    constraint Like_author_id_image_id_key unique (author_id, image_id),
    constraint Like_author_id_fkey foreign key (author_id) references "User" (id) on delete cascade,
    constraint Like_image_id_fkey foreign key (image_id) references "Image" (fid) on delete cascade
  ) tablespace pg_default;

create table
  public."Message" (
    id bigint generated by default as identity not null,
    created_at timestamp with time zone null default now(),
    message text null default ''::text,
    recipient_id bigint null,
    constraint Message_pkey primary key (id),
    constraint Message_recipient_id_fkey foreign key (recipient_id) references "User" (id) on delete cascade
  ) tablespace pg_default;

create table
  public."Config" (
    key text not null,
    updated_at timestamp with time zone null default now(),
    value text null,
    constraint Config_pkey primary key (key)
  ) tablespace pg_default;

INSERT INTO "Config" (key, value)
VALUES ('showMessages', 'true');

INSERT INTO "Config" (key, value)
VALUES ('defaultMessages', 'This is a default message');