export default {
    // Active language (at initialization)
    locale: "en",
    // Fallback language
    fallbackLocale: "en",
    // Available languages
    messages: {
        // English
        en: {
            nav: {
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
                login: "Login",
                logout: "Logout",
                info: "Info",
                counter: "Counter",
                incrementCounter: "Increment counter"
            }
        },
        // German
        de: {
            nav: {
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
                login: "Anmelden",
                logout: "Abmelden",
                info: "Information",
                counter: "Zähler",
                incrementCounter: "Zähler erhöhen"
            }
        }
    }
};