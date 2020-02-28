<template>
  <div class="support">
    <div class="support__photos">
      <div class="support__photos--frame">
        <img
          class="support__photos--frame--picture"
          src="@/assets/img/vito.png"
          alt="picture"
        />
      </div>
      <div class="support__photos--frame">
        <img
          class="support__photos--frame--picture"
          src="@/assets/img/ellyo.png"
          alt="picture"
        />
      </div>
      <div class="support__photos--frame">
        <img
          class="support__photos--frame--picture--2"
          src="@/assets/img/logo-inove-dev.png"
          alt="picture"
        />
      </div>
    </div>
    <div class="support__text">
      <div class="support__text--paragraph center">
        <strong>SISCA v0.1.1 Beta</strong>
      </div>
      <div class="support__text--paragraph">
        O <strong>Sis</strong>tema da <strong>Ca</strong>ntina é um projeto da
        célula de desenvolvimento de software do INOVE, que tem como propósito
        auxiliar atividades de contabilidade do estabelecimento. Desenvolvido
        inicialmente por Victor Camargo (Vito) e Francisco Ellyo, alunos de
        Ciência da Computação e Sistemas de Informação, respectivamente, sobre
        coordenação de Roberta Dutra e Simone Nunes.
      </div>
      <div class="support__text--paragraph">
        Contato:<br />
        <br />vito@alu.ufc.br
        <br />emaildoellyo@alu.ufc.br<br />projetos@quixada.ufc.br
      </div>
    </div>
  </div>
</template>

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

    &--frame {
      height: 18rem;
      width: 18rem;
      overflow: hidden;
      background-color: #4be6b4;
      border-radius: 50%;

      &--picture {
        width: 19rem;

        &--2 {
          // Corrigir isso
          width: 70%;
          height: 34%;
          padding: 3rem;
          padding-top: 5rem;
        }
      }
    }
  }

  &__text {
    grid-row: 2 / 3;
    grid-column: 1 / 3;
    padding: 0 4rem 4rem 4rem;

    &--paragraph {
      font-size: 1.6rem;
      font-family: inherit;
      margin: 2rem 0;

      &:first-child,
      &:last-child {
        margin: 0;
      }
    }
  }
}

.center {
  text-align: center;
}
</style>
