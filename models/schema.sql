DROP DATABASE IF EXISTS petservices_db;
CREATE DATABASE petservices_db;

USE petservices_db;

CREATE TABLE services (
	item_id INTEGER(10) NOT NULL AUTO_INCREMENT,
	  grooming VARCHAR(100) NOT NULL,
    daycare VARCHAR(100) NOT NULL,
    boarding VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    PRIMARY KEY (item_id)
);

CREATE TABLE clients (
	client_id INTEGER(10) NOT NULL AUTO_INCREMENT,
    pet_name VARCHAR(100) NOT NULL,
    client_first_name VARCHAR(100) NOT NULL,
    client_last_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phonenumber INTEGER(10),
);

-- Insert mock services into database--
INSERT INTO services (
