--Part 4: Creating a database
CREATE DATABASE myFarm;
CREATE TABLE farmers(
  id int unsigned PRIMARY KEY AUTO_INCREMENT,
  name text(100) NOT NULL,
  birth int(10) NOT NULL,
  gender ENUM('male', 'female') NOT NULL,
  joined date NOT NULL,
  salary int NOT NULL
);
CREATE TABLE animals(
  id INT unsigned PRIMARY KEY AUTO_INCREMENT,
  name TEXT(100) NOT NULL,
  gender ENUM('male', 'female') NOT NULL,
  class TEXT(100) NOT NULL,
  Family TEXT(100) NOT NULL,
  barns_id INT unsigned
);
CREATE TABLE barns(
  id INT unsigned PRIMARY KEY AUTO_INCREMENT,
  name TEXT(100) NOT NULL,
  square_meters INT NOT NULL,
  animals_id INT unsigned NOT NULL,
  CONSTRAINT `barns-animals` FOREIGN KEY (animals_id) REFERENCES animals (id) ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE farm_gener(
  id INT unsigned AUTO_INCREMENT PRIMARY KEY NOT NULL,
  farmers_id INT unsigned NOT NULL,
  barns_id INT unsigned NOT NULL,
  animals_id INT unsigned NOT NULL,
  CONSTRAINT `barns-animals-genre` FOREIGN KEY (`animals_id`) REFERENCES animals (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `barns-farmers-genre` FOREIGN KEY (`barns_id`) REFERENCES barns (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `farmers-animals-barns-genre` FOREIGN KEY (`farmers_id`) REFERENCES farmers (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);