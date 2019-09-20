# Cowlick cars - server runtime & services
Runtime libraries and service applications for java servlet container.

## Setup
* Install [java 8+](http://openjdk.java.net/install/) on system

## Build
* Call **gradle wrapper** to execute tasks:
	* List available projects & tasks: `gradlew`
	* Basic builds:
		* Pack server runtime libraries: `gradlew copyServerRuntime`
		* Build services: `gradlew war`
	* Build + deploy on **tomcat**:
		* Set environment variable `CATALINA_HOME` to tomcat root folder
		* Deploy runtime: `gradlew deployTomcatRuntime`
		* Deploy services: `gradlew deployTomcatService`

## Server requirements
* JNDI resource `jdbc/cowlick-cars` with working PostgreSQL database access