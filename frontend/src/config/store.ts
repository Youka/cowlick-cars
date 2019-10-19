// Import plugins
import { getField, updateField } from "vuex-map-fields";
import createPersistedState from "vuex-persistedstate";

// Store
export default {
    state: {
        language: navigator.language.split("-", 1)[0],
        navigationVisible: true
    },
    getters: { getField },
    mutations: { updateField },
    plugins: [createPersistedState({ storage: window.localStorage })]
};