export default {
    namespaced: true,
    state: {
        title: 'Buscar cliente',
        clear: false,
        return: true
    },
    mutations: {
        changeContentHeader(state, payload){
            state.title = payload.title,
            state.clear = payload.loadClear,
            state.return = payload.loadReturn
        }
    },
    actions: {

    }
}