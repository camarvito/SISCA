import firebase from 'firebase/app';
import 'firebase/database';

export default {
    namespaced: true,
    state: {
        currentUserId: '',
        debit: {
            name: '',
            price: '',
            date: ''
        },
        buttonState: [
            { message: 'Adicionar débito', code: 0},
            { message: 'Cancelar', code: 1},
            { message: 'Salvar', code: 2}
        ],
        currentState: 0
    },
    mutations: {
        setName(state, payload){
            state.debit.name = payload
        },
        setPrice(state, payload){
            state.debit.price = payload
        },
        setDate(state, payload){
            state.debit.date = payload
        },
        setButtonState(state, payload){
            state.currentState = payload
        }
    },
    actions: {
        changeState({ commit }, payload) {
            if (payload == 0) {
                commit('setButtonState', 1)
            } else if (payload == 1) {
                commit('setButtonState', 0)
            } else if (payload == 2) {
                // Fazer as ações do firebase aqui
                console.log('LoL dificil')


                commit('setButtonState', 0)
            }
        }
    }
}
