#!/bin/bash

# Software versions
FLYWAY_VERSION=6.0.2
POSTGRESQL_VERSION=42.2.6

# File locations
SCRIPT_DIR=$(dirname $0)
FLYWAY_DIR=$SCRIPT_DIR/flyway
RUNTIME_DIR=$FLYWAY_DIR/runtime
DRIVERS_DIR=$FLYWAY_DIR/drivers
MIGRATIONS_DIR=$FLYWAY_DIR/migrations
FLYWAY_CONFIG_FILE=$FLYWAY_DIR/flyway.config
MAVEN_CENTRAL_URL=https://repo1.maven.org/maven2
declare -A FILE_DOWNLOADS=(
	[$RUNTIME_DIR/flyway-core-$FLYWAY_VERSION.jar]=$MAVEN_CENTRAL_URL/org/flywaydb/flyway-core/$FLYWAY_VERSION/flyway-core-$FLYWAY_VERSION.jar
	[$RUNTIME_DIR/flyway-commandline-$FLYWAY_VERSION.jar]=$MAVEN_CENTRAL_URL/org/flywaydb/flyway-commandline/$FLYWAY_VERSION/flyway-commandline-$FLYWAY_VERSION.jar
	[$DRIVERS_DIR/postgresql-$POSTGRESQL_VERSION.jar]=$MAVEN_CENTRAL_URL/org/postgresql/postgresql/$POSTGRESQL_VERSION/postgresql-$POSTGRESQL_VERSION.jar
)

# Download dependencies
for file in ${!FILE_DOWNLOADS[@]}; do
	if [ ! -f $file ]; then
		curl ${FILE_DOWNLOADS[$file]} > $file
	fi
done

# Find Java runtime
if type java >/dev/null 2>&1; then
	JAVA_CMD=java
elif [ ! -z $JAVA_HOME ]; then
	JAVA_CMD=$JAVA_HOME/bin/java
else
	echo Java not found! Add binary to PATH or set JAVA_HOME. 1>&2
	exit 1
fi

# Run migrations (see <https://flywaydb.org/documentation/commandline/>)
$JAVA_CMD -cp "$RUNTIME_DIR/*" org.flywaydb.commandline.Main -jarDirs=$DRIVERS_DIR -locations=filesystem:$MIGRATIONS_DIR -installedBy=$(hostname) -configFiles=$FLYWAY_CONFIG_FILE $*