<template>
  <div class="costumer__container">
      <div class="costumer__photo">
          <div class="costumer__photo--img"></div>
      </div>
      <div class="costumer__info">
          <div class="costumer__info--name">{{ costumer.name }}</div>
          <div class="costumer__info--personal"><strong>CPF: </strong>{{ costumer.cpf }}</div>
          <div class="costumer__info--personal"><strong>Telefone: </strong>{{ costumer.phone }}</div>
          <div class="costumer__info--personal"><strong>Matricula: </strong>{{ costumer.registration }}</div>
          <div class="costumer__info--personal"><strong>Curso: </strong>{{ costumer.course }}</div>
          <div class="costumer__info--personal"><strong>Situação: </strong>Dívidas Pendentes</div>
      </div>
      <div class="costumer__debits">
          <TableDebits />
      </div>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/database';

import TableDebits from './table-debits/TableDebits'

export default {
    components: { TableDebits },
    data(){
        return {
            id: this.$route.params.id,
            costumer: ''
        }
    },
    mounted() {
        let ref = firebase.database().ref(`users/${this.id}`)
        ref.on('value', snapshot => {
            let currentUser = snapshot.val()
            this.costumer = currentUser
        })
    }
}
</script>

<style lang="scss" scoped>
    .costumer {
        &__container {
            display: grid;
            grid-template-columns: 30% 1fr;
            padding: 2rem;
            gap: 1rem;
        }

        &__photo {
            grid-row: 1;
            grid-column: 1 / 2;
            display: flex;
            justify-content: center;
            align-items: center;

            &--img {
                height: 18rem;
                width: 18rem;
                background-color: yellowgreen;
                border-radius: 50%;
            }
        }

        &__info {
            grid-row: 1;
            grid-column: 2 / 3;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            
            &--name {
                font-family: inherit;
                font-size: 2rem;
                font-weight: bold;
                text-transform: uppercase;
                margin: .5rem;
            }

            &--personal {
                font-family: inherit;
                font-size: 1.6rem;
                font-weight: lighter;
                margin: .5rem;
            }
        }

        &__debits {
            grid-row: 2;
            grid-column: 1 / 3;
            margin: 1.2rem 0;
            padding: 1rem;
        }
    }

</style>