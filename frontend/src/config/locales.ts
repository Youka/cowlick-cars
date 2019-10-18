export default {
    // Active language (at initialization)
    locale: "en",
    // Fallback language
    fallbackLocale: "en",
    // Available languages
    messages: {
        // English
        en: {
            app: {
                mode: {
                    online: "Online mode",
                    offline: "Offline mode"
                },
                language: "Language",
                home: "Home",
                test: "Test"
            },
            hello: {
                message: "Message",
                hello: "Hello world!"
            },
            test: {
                session: "Session",
                counter: "Counter",
                login: "Login",
                logout: "Logout",
                incrementCounter: "Increment counter"
            }
        },
        // German
        de: {
            app: {
                mode: {
                    online: "Online Modus",
                    offline: "Offline Modus"
                },
                language: "Sprache",
                home: "Startseite",
                test: "Test"
            },
            hello: {
                message: "Nachricht",
                hello: "Hallo Welt!"
            },
            test: {
                session: "Sitzung",
                counter: "Zähler",
                login: "Anmelden",
                logout: "Abmelden",
                incrementCounter: "Zähler erhöhen"
            }
        }
    }
};