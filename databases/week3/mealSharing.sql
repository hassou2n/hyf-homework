CREATE DATABASE mealSharing DEFAULT CHARACTER SET = 'utf8mb4';
use mealSharing;
CREATE Table meal(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(10) NOT NULL,
  description TEXT(50) NOT NULL,
  location VARCHAR(10) NOT NULL,
  delivering_time DATETIME NOT NULL,
  max_reservations INT(10) NOT NULL,
  price DECIMAL(10) NOT NULL,
  created_date DATE
);
CREATE Table reservation(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  number_of_guests int(10) NOT NULL,
  created_date DATE,
  meal_id int(10),
  FOREIGN KEY (meal_id) REFERENCES meal(id),
  contact_phone VARCHAR (10) NOT NULL,
  contact_name VARCHAR (10) NOT NULL,
  contact_email VARCHAR (10) NOT NULL
);
CREATE Table review(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(10) NOT NULL,
  description TEXT(50) NOT NULL,
  meal_id int(10) NOT NULL,
  FOREIGN KEY (meal_id) REFERENCES meal(id),
  stars INT NOT NULL,
  created_date DATE
);
INSERT INTO
  meal (
    title,
    description,
    location,
    delivering_time,
    max_reservations,
    price,
    created_date
  )
VALUES
  (
    'Dolma',
    'rice',
    'Iraq',
    '2022-01-01 12:00:00',
    '1',
    '99.99',
    '2022-01-01'
  ),
  (
    'Biryani',
    'rice',
    'Iraq',
    " 2022-03-25 15:00:00",
    '2',
    '99.99',
    '2022-01-01'
  ),
  (
    'Kebab',
    'meat',
    'Iraq',
    " 2022-03-25 15:00:00",
    '3',
    '99.99',
    '2022-01-01'
  );
INSERT INTO
  reservation (
    number_of_guests,
    created_date,
    meal_id,
    contact_phone,
    contact_name,
    contact_email
  )
VALUES
  (
    '1',
    '2022-01-01',
    '1',
    '11111111',
    'Hussein',
    'h@hyf.com'
  ),
  (
    '2',
    '2022-01-01',
    '2',
    '22222222',
    'Marc',
    'm@hyf.com'
  ),
  (
    '3',
    '2022-01-01',
    '3',
    '33333333',
    'Alx',
    'a@hyf.com'
  );
INSERT INTO
  review (title, description, meal_id, stars, created_date)
VALUES
  ('Dolma', 'I like it', '1', '8', '2022-01-01'),
  ('Biryani', 'I like it', '2', '8.7', '2022-01-01'),
  ('Kebab', 'I like it', '3', '7.9', '2022-01-01');
--Meal
SELECT
  *
FROM
  meal;
INSERT INTO
  meal (
    title,
    description,
    location,
    delivering_time,
    max_reservations,
    price,
    created_date
  )
VALUES
  (
    'Biach',
    'sheep head',
    'Iraq',
    " 2022-03-25 15:00:00",
    '4',
    '99.99',
    '2022-01-01'
  );
SELECT
  *
FROM
  meal
WHERE
  id = 1;
UPDATE
  meal
SET
  price = '50'
WHERE
  id = 1;
DELETE FROM
  meal
WHERE
  id = 1;
--Reservation
SELECT
  *
FROM
  reservation;
INSERT INTO
  reservation (
    number_of_guests,
    created_date,
    meal_id,
    contact_phone,
    contact_name,
    contact_email
  )
VALUES
  (
    '4',
    '2022-01-01',
    '4',
    '44444444',
    'Olx',
    'o@hyf.com'
  );
SELECT
  *
FROM
  reservation
WHERE
  id = 1;
UPDATE
  reservation
SET
  contact_phone = '00000000',
WHERE
  id = 1;
DELETE FROM
  reservation
WHERE
  id = 1;
--Review
SELECT
  *
FROM
  review;
INSERT INTO
  review (title, description, meal_id, stars, created_date)
VALUES
  ('love it', 'I like it', '1', '7', '2022-01-01');
SELECT
  *
FROM
  review
WHERE
  id = 1;
UPDATE
  review
SET
  title = 'love it',
WHERE
  id = 1;
DELETE FROM
  review
WHERE
  id = 1;
--Additional queries
SELECT
  *
FROM
  meal
WHERE
  price < 50;
SELECT
  *
FROM
  meal
  JOIN reservation ON meal.id = reservation.meal_id
WHERE
  id = 1;
SELECT
  *
FROM
  meal
WHERE
  title LIKE "%dolma%";
SELECT
  *
FROM
  meal
WHERE
  created_date BETWEEN '2022-01-01'
  AND '2022-05-01';
SELECT
  *
FROM
  meal
WHERE
  id = 1;
SELECT
  m.title,
  r.stars
FROM
  meal m
  JOIN review r
order by
  r.stars ASC;
SELECT
  *
FROM
  reservation
WHERE
  meal_id = 1
ORDER BY
  created_date;
SELECT
  AVG(stars) as average,
  meal_id,
  meal.title
FROM
  review
  JOIN meal ON meal.id = review.meal_id
GROUP BY
  meal_id
ORDER BY
  average;