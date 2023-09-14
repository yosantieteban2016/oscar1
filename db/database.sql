CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;
CREATE TABLE employee (
    id int(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary int(5) DEFAULT NULL,
    PRIMARY KEY (id)
);

INSERT INTO employee VALUES 
(1, 'Joe', 1000),
(2, 'henry', 2000),
(3, 'sam', 2500),
(4, 'Max', 1500);
