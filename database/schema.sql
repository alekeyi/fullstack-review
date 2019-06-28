DROP DATABASE IF EXISTS gitrepos;

CREATE DATABASE gitrepos;

USE gitrepos;

CREATE TABLE repos (
  id SERIAL PRIMARY KEY,
  username VARCHAR(30)
);