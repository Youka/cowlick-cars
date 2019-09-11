export default {
    state: {
        count: 0
    },
    getters: {
        count: (state: {count: number}) => state.count
    },
    mutations: {
        increment: (state: {count: number}) => state.count++
    }
};