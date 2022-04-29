--Part 1: Working with tasks
INSERT INTO
  task (
    title,
    description,
    created,
    updated,
    due_date,
    status_id,
    user_id
  )
VALUES
  (
    'hyf',
    'school',
    '2022-01-01 08:00:00',
    '2022-03-03 08:00:00',
    '2022-06-06 08:00:00',
    1,
    1
  );
UPDATE
  task
SET
  title = 'HYF Hussein'
WHERE
  id = 36;
UPDATE
  task
SET
  due date = '2023-12-01 12:00:00'
WHERE
  id = 36;
UPDATE
  task
SET
  due date = '2023-12-01 12:00:00'
WHERE
  id = 36;
UPDATE
  task
SET
  status_id = '5'
WHERE
  id = 36;
DELETE FROM
  task
WHERE
  id = 36;
--Part 2: School database
  USE School;
CREATE DATABASE School;
DEFAULT CHARACTER SET 'utf8mb4';
CREATE TABLE Class(
    id int(11) PRIMARY KEY AUTO_INCREMENT,
    name Varchar(24),
    begins date,
    ends date
  );
CREATE TABLE Student(
    id int(11),
    name Varchar(24),
    email varchar(55),
    phone int(11),
    class_id int(11) PRIMARY KEY AUTO_INCREMENT
  );
CREATE INDEX student_name_index ON Student (name);
ALTER TABLE
  Class
ADD
  COLUMN status ENUM('not-started', 'ongoing', 'finished') NOT null;
--Part 3: More queries
  USE databaseHomework;
SELECT
  u.email,
  s.name,
  t.title
FROM
  task t
  JOIN user u
  JOIN status s
WHERE
  u.email REGEXP '@spotify.com$';
SELECT
  t.title,
  u.name,
  s.name
FROM
  task t
  JOIN user u
  JOIN status s
WHERE
  u.name REGEXP 'Donald Duck'
  AND s.name = 'Not started';
SELECT
  t.title,
  u.name,
  t.created,
  s.name
FROM
  task t
  JOIN user u
  JOIN status s
WHERE
  u.name REGEXP 'Maryrose Meadows'
  AND month(created) = 9;
SELECT
  COUNT(*) conts,
  month(created) as month_number
FROM
  task
GROUP BY
  month(created);