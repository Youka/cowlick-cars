-- Create schema
CREATE SCHEMA auth;
COMMENT ON SCHEMA auth
	IS 'Authorization information like users & roles.';
	
-- Create tables
CREATE TABLE auth.users(
    username varchar(24) NOT NULL PRIMARY KEY,
    password varchar(128) NOT NULL,
    enabled boolean NOT NULL DEFAULT true
);
CREATE TABLE auth.roles(
	rolename varchar(24) NOT NULL PRIMARY KEY,
	description varchar(256) NULL
);
CREATE TABLE auth.user_role_mapping(
    username varchar(24) NOT NULL REFERENCES auth.users(username),
    rolename varchar(24) NOT NULL DEFAULT 'user' REFERENCES auth.roles(rolename),
	PRIMARY KEY (username, rolename)
);
CREATE TABLE auth.user_details(
	username varchar(24) NOT NULL PRIMARY KEY REFERENCES auth.users(username),
	first_name varchar(16) NULL,
	last_name varchar(16) NULL,
	e_mail varchar(64) NOT NULL UNIQUE
);