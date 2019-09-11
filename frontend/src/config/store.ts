export default {
    // Attributes
    state: {
        count: 0
    },
    // Getters
    getters: {
        count: (state: {count: number}) => state.count
    },
    // Setters
    mutations: {
        increment: (state: {count: number}) => state.count++
    }
};