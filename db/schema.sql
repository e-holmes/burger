-- In the db folder, create a file named schema.sql. Write SQL queries this file that do the following:
DROP DATABASE IF EXISTS top_songsDB;
-- Create the burgers_db.
CREATE database top_songsDB;


-- Switch to or use the burgers_db.
USE top_songsDB;


-- Create a burgers table with these fields:
CREATE TABLE burgers (
    -- id: an auto incrementing int that serves as the primary key.
    id INT NOT NULL,
    -- burger_name: a string.
    burger_name VARCHAR (100) NULL,
    -- devoured: a boolean.
    devoured BOOLEAN NULL,
    PRIMARY KEY (id) 
)





