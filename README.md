# Cowlick cars
Management platform with components **frontend**, **backend** and **database**. These get installed on configured server software (see below).

## Purpose
This project serves as technical demonstration for efficient web application development. Modern tools, modularization and simplicity should provide a positive experience for developers and users.

## Servers
Following servers need to get setup as platforms for the components of this project.

### PostgreSQL
Database server from [postgresql.org](https://www.postgresql.org/).
* Install at least version **11**
* Create database `COWLICK_CARS`

### Tomcat
Application server from [tomcat.apache.org](http://tomcat.apache.org/).
* Install/unpack at least version **9**
* Remove default applications:
	* Clean _webapps_ folder
	* Remove non-console & non-catalina entries in _conf/logging.properties_
* Add database connection:
	* Add `<Resource name="jdbc/cowlick-cars" type="javax.sql.DataSource" auth="Container" driverClassName="???" url="???" username="???" password="???" ... />` to _conf/server.xml_
	* Add `<ResourceLink name="jdbc/cowlick-cars" type="javax.sql.DataSource" global="jdbc/cowlick-cars" />` to _conf/context.xml_
* Add compression support by `<Connector ... compression="on" useSendfile="false"/>` to _conf/server.xml_