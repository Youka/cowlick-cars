# Cowlick cars - database migration
Database migration with **flyway** and **postgre-sql** support by default.

## Setup
* Install [java 8+](http://openjdk.java.net/install/) on system
* Set [configuration](https://flywaydb.org/documentation/configfiles) in _flyway/flyway.config_
* Put [sql migrations](https://flywaydb.org/documentation/migrations#sql-based-migrations) in _flyway/migrations_

## Update
* Modify **runtime & drivers** in _flyway.sh_
* Sync **configuration** on database switch
* Add more **sql migrations** to progress

## Execution
Make sure the configured target database is running, then call:
```bash
bash flyway.sh <COMMAND>
```
See [flyway documentation](https://flywaydb.org/documentation/commandline/#commands) for commands.