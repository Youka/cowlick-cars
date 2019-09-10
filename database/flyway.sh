#!/bin/bash

# Software versions
FLYWAY_VERSION=6.0.2
POSTGRESQL_VERSION=42.2.6

# File locations
SCRIPT_DIR=$(dirname $0)
CLASSES_DIR=$SCRIPT_DIR/flyway/classes
MIGRATIONS_DIR=$SCRIPT_DIR/flyway/migrations
FLYWAY_CONFIG_FILE=$SCRIPT_DIR/flyway/flyway.config
MAVEN_CENTRAL_URL=https://repo1.maven.org/maven2
declare -A FILE_DOWNLOADS=(
	[$CLASSES_DIR/flyway-core.jar]=$MAVEN_CENTRAL_URL/org/flywaydb/flyway-core/$FLYWAY_VERSION/flyway-core-$FLYWAY_VERSION.jar
	[$CLASSES_DIR/flyway-commandline.jar]=$MAVEN_CENTRAL_URL/org/flywaydb/flyway-commandline/$FLYWAY_VERSION/flyway-commandline-$FLYWAY_VERSION.jar
	[$CLASSES_DIR/postgresql.jar]=$MAVEN_CENTRAL_URL/org/postgresql/postgresql/$POSTGRESQL_VERSION/postgresql-$POSTGRESQL_VERSION.jar
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
$JAVA_CMD -cp "$CLASSES_DIR/*" org.flywaydb.commandline.Main -jarDirs=$CLASSES_DIR -locations=filesystem:$MIGRATIONS_DIR -configFiles=$FLYWAY_CONFIG_FILE $*