DROP DATABASE IF EXISTS kitchen;

CREATE DATABASE kitchen;

USE kitchen;

--INGREDIENTS--
DROP IF TABLE EXISTS `ingredients`;
CREATE TABLE `ingredients` (
  `id`              INT(10) NOT NULL AUTO_INCREMENT,
  `name`            VARCHAR(100) NOT NULL,
  `count`           INT(10) NOT NULL DEFAULT 0,
  PRIMARY KEY(`id`)
);


--RECIPES--
DROP IF TABLE EXISTS `recipes`;

CREATE TABLE `recipes` (
  `id`              INT(10) NOT NULL AUTO_INCREMENT,
  `name`            VARCHAR(100) NOT NULL,  
  `url`             VARCHAR(255) NOT NULL,
  `description`     VARCHAR(255) NULL DEFAULT NULL,
  `imgurl`          VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY(`id`)
);

--JOIN TABLE--
DROP IF TABLE EXISTS `ingredients_recipes`;

CREATE TABLE `ingredients_recipes` (
  `id`              INT(10) NOT NULL AUTO_INCREMENT,
  `id_ingredients`  INT(10) NOT NULL,
  `id_recipes`      INT(10) NOT NULL,
  PRIMARY KEY(`id`)
);