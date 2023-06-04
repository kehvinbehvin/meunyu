create table
  public.User (
    id bigint generated by default as identity not null,
    created_at timestamp with time zone null default now(),
    name character varying null,
    isAdmin boolean null,
    constraint User_pkey primary key (id)
  ) tablespace pg_default;