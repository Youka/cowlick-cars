# Cowlick cars - server runtime & services
Runtime libraries and service applications for java servlet container.

## Setup
* Install [java 8+](http://openjdk.java.net/install/) on system

## Build
* Call **gradle wrapper** to execute tasks:
	* List available projects & tasks: `gradlew`
	* Build only:
		* Pack server runtime libraries: `gradlew copyServerRuntime`
		* Build services: `gradlew war`
	* Build + deploy on **tomcat**:
		* Set environment variable `CATALINA_HOME` to tomcat root folder
		* Deploy runtime: `gradlew deployTomcatRuntime`
		* Deploy services: `gradlew deployTomcatService`

## Server requirements
* Log directory by JNDI environment `logDirectory`
* Database access with working PostgreSQL by JNDI resource `jdbc/cowlick-cars`
* Logins + authorities stored in database (see **authentication-provider** in [spring security configuration](./services/spring.xml))

## IntelliJ (Community) - Tomcat support
* In _File -> Settings -> Tools -> External Tools_ add a new tool with tomcat `startup` script as program,
choose a meaningful group + name and deselect _Open console..._ (tomcat runs in a detached process anyway).
On start a tomcat console opens which can receive close signals (`CTRL+C`) to shutdown the server.
* Add gradle-based run configurations with `backend` as project,
`deployTomcat...` tasks to execute and environment variable `CATALINA_HOME` set to tomcat directory.