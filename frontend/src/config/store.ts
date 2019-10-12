// Import plugins
import createPersistedState from "vuex-persistedstate";

// State
const state = {
    language: navigator.language.split("-", 1)[0],
    navigationVisible: true,
    count: 0
};
type State = typeof state;

// Store
export default {
    state,
    mutations: {
        language(st: State, language: string) {
            st.language = language;
        },
        navigationVisible(st: State, navigationVisible: boolean) {
            st.navigationVisible = navigationVisible;
        },
        increment(st: State) {
            st.count++;
        }
    },
    plugins: [createPersistedState({storage: window.localStorage})]
};