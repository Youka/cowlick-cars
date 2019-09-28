-- Roles
INSERT INTO auth.roles(rolename, description) VALUES
	('administrator', 'All mighty super user.'),
	('user', 'Normal user.');
	
-- Users
INSERT INTO auth.users(username, password) VALUES
	('admin', '{noop}admin'),
	('leeroy', '{noop}jenkins');
	
-- User-role mappings
INSERT INTO auth.user_role_mapping(username, rolename) VALUES
	('admin', 'administrator');
INSERT INTO auth.user_role_mapping(username) VALUES
	('leeroy');
	
-- User details
INSERT INTO auth.user_details(username, first_name, last_name, e_mail) VALUES
	('admin', 'Admin', 'Istrator', 'admin@cowlick-cars.com'),
	('leeroy', 'Leeroy', 'Jenkins', 'leeroy.jenkins@wow.com');