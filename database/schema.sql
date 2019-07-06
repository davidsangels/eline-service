DROP DATABASE IF EXISTS infoPlace;

CREATE DATABASE infoPlace;

USE infoPlace;

DROP TABLE IF EXISTS reviews;

CREATE TABLE reviews (
  id_review int NOT NULL AUTO_INCREMENT,
  id_place int NOT NULL,
  username varchar(100) NOT NULL,
  id_user int NOT NULL,
  createdAt timestamp NOT NULL,
  text_review text NOT NULL,
  avatarUrl varchar(100) NOT NULL,

  PRIMARY KEY (id_review)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < database/schema.sql
 *  to create the database and the table*/