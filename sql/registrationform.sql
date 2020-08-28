CREATE DATABASE `registrationform`;
USE `registrationform`;
CREATE TABLE IF NOT EXISTS `registrationform` (
  `idForm` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `idNumber` varchar(13) NOT NULL,
  `title` varchar(45) NOT NULL,
  `firstName` varchar(45) NOT NULL,
  `lastName` varchar(45) NOT NULL,
  `address` varchar(500) NOT NULL,
  `city` varchar(255) NOT NULL,
  `zipCode` varchar(5) NOT NULL,
  `emailAddress` varchar(45) NOT NULL,
  `mobileNumber` varchar(45) NOT NULL,
  `homeLanguage` varchar(45) NOT NULL,
  `additionalLanguage` varchar(45) NOT NULL,
  `message` varchar(5000) NOT NULL
);