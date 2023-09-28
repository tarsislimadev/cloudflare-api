
DROP TABLE application;

CREATE TABLE application (
  "id" varchar NOT NULL DEFAULT gen_random_uuid(),
  "name" varchar NOT NULL,
  "created_at" varchar NOT NULL DEFAULT now()
);

DROP TABLE person;

CREATE TABLE person (
  "id" varchar NOT NULL DEFAULT gen_random_uuid(),
  "name" varchar NULL,
  "created_at" varchar NOT NULL DEFAULT now()
);

DROP TABLE email;

CREATE TABLE email (
  "id" varchar NOT NULL DEFAULT gen_random_uuid(),
  "text" varchar NOT NULL,
  "person_id" varchar NOT NULL,
  "application_id" varchar NOT NULL,
  "created_at" varchar NOT NULL DEFAULT now()
);

DROP TABLE password;

CREATE TABLE password (
  "id" varchar NOT NULL DEFAULT gen_random_uuid(),
  "text" varchar NOT NULL,
  "email_id" varchar NOT NULL,
  "created_at" varchar NOT NULL DEFAULT now()
);
