export default {
    state: {
        count: 0
    },
    getters: {
        count: (state: any) => state.count
    },
    mutations: {
        increment: (state: any) => state.count++
    }
};