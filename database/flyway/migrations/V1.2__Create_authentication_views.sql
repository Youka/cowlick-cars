CREATE VIEW v_enabled_users AS
	SELECT u.username, STRING_AGG(urm.rolename, ',') AS roles, ud.first_name, ud.last_name, ud.e_mail
	FROM auth.users AS u
	JOIN auth.user_role_mapping AS urm ON u.username=urm.username
	JOIN auth.user_details AS ud ON u.username = ud.username
	WHERE u.enabled
	GROUP BY u.username, ud.first_name, ud.last_name, ud.e_mail;