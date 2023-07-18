create table
  public.Message (
    id bigint generated by default as identity not null,
    created_at timestamp with time zone null default now(),
    message text null default ''::text,
    recipient_id bigint null,
    constraint Message_pkey primary key (id),
    constraint Message_recipient_id_fkey foreign key (recipient_id) references "User" (id) on delete cascade
  ) tablespace pg_default;