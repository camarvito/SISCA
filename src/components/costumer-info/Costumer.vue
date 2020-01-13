<template>
  <div class="costumer__container">
      <div class="costumer__photo">
          <div class="costumer__photo--img"></div>
      </div>
      <div class="costumer__info">
          <div class="costumer__info--name">Victor Camargo Oliveira</div>
          <div class="costumer__info--personal"><strong>CPF: </strong>475.801.448-59</div>
          <div class="costumer__info--personal"><strong>Telefone: </strong>(11) 97606-4572</div>
          <div class="costumer__info--personal"><strong>Matricula: </strong>471419</div>
          <div class="costumer__info--personal"><strong>Curso: </strong>Ciência da Computação</div>
          <div class="costumer__info--personal"><strong>Situação: </strong>Dívidas Pendentes</div>
      </div>
      <div class="costumer__debits">
          <TableDebits />
      </div>
  </div>
</template>

<script>
// import TableDebits from './TableDebits'

export default {
    // components: { TableDebits },
    data(){
        return {
            id: this.$route.params.id
        }
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