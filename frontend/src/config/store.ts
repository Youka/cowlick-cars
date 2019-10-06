// State
const state = {
    count: 0
};
type State = typeof state;

// Store
export default {
    state,
    getters: {
        count: (st: State) => st.count
    },
    mutations: {
        increment: (st: State) => st.count++
    }
};