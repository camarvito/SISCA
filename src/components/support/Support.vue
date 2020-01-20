<template>
  <div class="support">
      <div class="support__photos">
          <div class="support__photos--picture"></div>
          <div class="support__photos--picture"></div>
      </div>
      <div class="support__text">
          <div class="support__text--paragraph center"> SISCA v1.0.1 Beta</div>
          <div class="support__text--paragraph">O <strong>Sis</strong>tema da <strong>Ca</strong>ntina é um projeto da célula de desenvolvimento de software do INOVE, que tem o propósito de auxiliar atividades de contabilidade do estabelecimento. Desenvolvido inicialmente por Victor Camargo (Vito), aluno de Ciência da Computação, sobre coordenação de Roberta Dutra e Simone Nunes. </div>
          <div class="support__text--paragraph">Contato:<br> <br>vito@alu.ufc.br <br>devinove@ufc.br </div>
      </div>
  </div>
</template>

<script>
export default {
    mounted() {
        this.$store.commit('contentHeader/changeContentHeader', {
            title: 'Sobre',
            loadClear: false,
            loadReturn: true
        })
    }
}
</script>

<style lang="scss">
    .support {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;

        &__photos {
            grid-row: 1 / 2;
            grid-column: 1 / 3;
            display: flex;
            justify-content: space-around;
            margin: 2rem;

            &--picture {
                height: 18rem;
                width: 18rem;
                background-color: yellowgreen;
                border-radius: 50%;
            }
        }

        &__text {
            grid-row: 2 / 3;
            grid-column: 1 / 3;
            padding: 2rem;

            &--paragraph {
                font-size: 1.6rem;
                font-family: inherit;
                margin: 2rem 0;

                &:first-child, &:last-child {
                    margin: 0;
                }
            }
        }
    }

    .center {
        text-align: center;
    }

</style>