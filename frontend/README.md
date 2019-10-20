# Cowlick cars - web application
Web view of cowlick-cars management platform.

## Setup
* Install [NodeJS](https://nodejs.org/en/download/) (includes **NPM**)

## Build
* Install dependencies: `npm install`
* Build:
    * Production: `npm run build`
    * Watch (development): `npm run watch`
* Output path is configurable:
    * Default: `./dist/`
    * Environment variable `CATALINA_HOME` set: `$CATALINA_HOME/webapps/ROOT/`

## Application runtime
* Works fully client-side, no server required (SPA, no SSR)
* Compressed resources available

## Browser support
Cowlick cars supports all modern browsers.  
This includes Microsoft Edge but **not IE11**!

## Recommended tools
* [VSCode](https://code.visualstudio.com/) with extensions [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) and [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
* [Firefox](https://www.mozilla.org/firefox/new/) with extension [Vue DevTools](https://addons.mozilla.org/de/firefox/addon/vue-js-devtools/)

## VSCode - Tomcat support
* In _.vscode/tasks.json_ add following entry (with tomcat startup script inserted) to `tasks` array:
```json
{
    "label": "Start tomcat",
    "type": "shell",
    "command": "TOMCAT_STARTUP_SCRIPT",
    "problemMatcher": []
}
```
* In _.vscode/settings.json_ extend object `terminal.integrated.env.windows`|`linux`|`osx` by entry `CATALINA_HOME` (set to tomcat directory).