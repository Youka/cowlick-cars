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
                title: "Hello world!",
                message: "Welcome to this portal."
            },
            login: {
                title: "Session",
                login: "Login",
                logout: "Logout",
                info: "Info"
            },
            playground: {
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
                title: "Hallo Welt!",
                message: "Willkommen in diesem Portal."
            },
            login: {
                title: "Sitzung",
                login: "Anmelden",
                logout: "Abmelden",
                info: "Information"
            },
            playground: {
                counter: "Zähler",
                incrementCounter: "Zähler erhöhen"
            }
        }
    }
};