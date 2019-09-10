# Cowlick cars - database migration
Database migration with **flyway** and **postgre-sql** support by default.

## Setup
* Update [configuration](https://flywaydb.org/documentation/configfiles) in _flyway/flyway.config_
* Add [sql migrations](https://flywaydb.org/documentation/migrations#sql-based-migrations) in _flyway/migrations_

## Execution
```bash
bash flyway.sh <COMMAND>
```

See [flyway documentation](https://flywaydb.org/documentation/commandline/#commands) for commands.