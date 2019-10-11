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
                home: "Home",
                test: "Test"
            },
            home: {
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
                home: "Startseite",
                test: "Test"
            },
            home: {
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