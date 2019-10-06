// State
const state = {
    count: 0
};
type State = typeof state;

// Store
export default {
    state,
    getters: {
        count: (state: State) => state.count
    },
    mutations: {
        increment: (state: State) => state.count++
    }
};