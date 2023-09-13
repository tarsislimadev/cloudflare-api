
DROP TABLE public.application;

CREATE TABLE public.application (
  "id" varchar NOT NULL DEFAULT gen_random_uuid(),
  "name" varchar NOT NULL,
  "created_at" varchar NOT NULL DEFAULT now()
);

DROP TABLE public.person;

CREATE TABLE public.person (
  "id" varchar NOT NULL DEFAULT gen_random_uuid(),
  "name" varchar NULL,
  "created_at" varchar NOT NULL DEFAULT now()
);

DROP TABLE public.email;

CREATE TABLE public.email (
  "id" varchar NOT NULL DEFAULT gen_random_uuid(),
  "text" varchar NOT NULL,
  "person_id" varchar NOT NULL,
  "application_id" varchar NOT NULL,
  "created_at" varchar NOT NULL DEFAULT now()
);

DROP TABLE public.password;

CREATE TABLE public.password (
  "id" varchar NOT NULL DEFAULT gen_random_uuid(),
  "text" varchar NOT NULL,
  "email_id" varchar NOT NULL,
  "created_at" varchar NOT NULL DEFAULT now()
);
