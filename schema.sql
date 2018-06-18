DROP DATABASE IF EXISTS kitchen;

CREATE DATABASE kitchen;

USE kitchen;


DROP TABLE IF EXISTS `ingredients`;

CREATE TABLE `ingredients` (
  `id`              INT(10) NOT NULL AUTO_INCREMENT,
  `name`            VARCHAR(100) NOT NULL UNIQUE,
  PRIMARY KEY(`id`)
);


DROP TABLE IF EXISTS `recipes`;

CREATE TABLE `recipes` (
  `id`              INT(10) NOT NULL AUTO_INCREMENT,
  `name`            VARCHAR(100) NOT NULL UNIQUE,
  `url`             VARCHAR(255) NOT NULL UNIQUE,
  PRIMARY KEY(`id`)
);


DROP TABLE IF EXISTS `ingredients_recipes`;

CREATE TABLE `ingredients_recipes` (
  `id`              INT(10) NOT NULL AUTO_INCREMENT,
  `id_ingredients`  INT(10) NOT NULL,
  `id_recipes`      INT(10) NOT NULL,
  PRIMARY KEY(`id`)
);