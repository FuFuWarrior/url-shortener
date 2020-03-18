CREATE TABLE IF NOT EXISTS
urls(
    url_id  SERIAL PRIMARY KEY NOT NULL,
    full_url VARCHAR(225) NOT NULL,
    short_url VARCHAR(128) NOT NULL,
    clicks INT
   );
