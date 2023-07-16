create table
  public.Config (
    key text not null,
    updated_at timestamp with time zone null default now(),
    value text null,
    constraint Config_pkey primary key (key)
  ) tablespace pg_default;