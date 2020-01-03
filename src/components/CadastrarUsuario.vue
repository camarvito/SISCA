<template>   
            <div class="content__form">
                <span class="content__form--title">Dados de cadastro</span>
                <div class="content__form__input-container">

                    <div class="content__form__input-container--item" id="input--3-of-4">
                        <label for="name-input" class="input__text--label">Nome Completo</label>
                        <input type="text" id="name-input bar--name" placeholder="" class="input__text--name">
                    </div>

                    <div class="content__form__input-container--item" id="input--1-of-4">
                        <label for="name-input" class="input__text--label">CPF</label>
                        <input type="text" id="name-input" placeholder="" 
                        class="input__text--name" v-mask="'###.###.###-##'">
                    </div>

                    <div class="content__form__input-container--item" id="input--1-of-4">
                        <label for="name-input" class="input__text--label">Telefone para contato</label>
                        <input type="text" id="name-input bar--name" placeholder="" class="input__text--name" v-mask="'(##) #####-####'">
                    </div>

                    <div class="content__form__input-container--item" id="input--1-of-4">
                        <label for="name-input" class="input__text--label">Tipo</label>
                        <select class="input__drop-down">
                            <option value="0">Selecione</option>
                            <option value="1">Aluno</option>
                            <option value="2">Servidor</option>
                            <option value="3">Outro</option>
                        </select>
                    </div>

                    <div class="content__form__input-container--item" id="input--1-of-4">
                        <label for="name-input" class="input__text--label">Matricula</label>
                        <input type="text" id="name-input bar--name" placeholder="" 
                        class="input__text--name" v-mask="'######'">
                    </div>

                    <div class="content__form__input-container--item" id="input--1-of-4">
                        <label for="name-input" class="input__text--label">Tipo</label>
                        <select class="input__drop-down">
                            <option value="0">Selecione</option>
                            <option value="1">Ciência da Computação</option>
                            <option value="2">Design Digital</option>
                            <option value="3">Engenharia da Computação</option>
                            <option value="4">Engenharia de Software</option>
                            <option value="5">Redes de Computadores</option>
                            <option value="6">Sistemas de Informação</option>
                        </select>
                    </div>

                    <div class="content__form__input-container--item" id="input--4-of-4">
                        <input type="button" class="input__big-button" value="Confirmar cadastro">
                    </div>

                </div>
            </div>
</template>

<script>
import { TheMask } from 'vue-the-mask'

export default {
    components: { TheMask },
    data(){
        return {
            cpf: ''
        }
    },
    watch: {

        }
}
</script>

<style lang="scss" scoped>
.content__form {
    padding: 2rem;
        
    &--title {
        display: block;
        font-size: 1.6rem;
        padding-left: 2rem;
        color: #8a8a8a;        
    }

    &__input-container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(3, 1fr);
        column-gap: 4rem;
        row-gap: 2rem;

        padding: 2rem;

        &--item {
            display: inline-block;
        }
    }
}

/* Inputs */
.input {

    &__text--label {
        display: block;
        // position: absolute;
        color: #8a8a8a;
        font-family: inherit;
        font-size: 1rem;
        font-weight: bold;
        text-transform: uppercase;
        margin-left: .2rem;
        margin-bottom: .4rem;
    }

    &__text--name {
        display: inline-block;
        color: #8a8a8a;
        font-family: inherit;
        font-size: 1.6rem;
        font-weight: inherit;

        padding: 1rem;
        border: 1px solid #8a8a8a;
        border-radius: 0.4rem;

        width: 100%;
    }

    &__drop-down {
        padding: .6em 1.4em .5em .8em;
        width: 110%;
        height: 74%;
        box-sizing: border-box;
        margin: 0;
        border: 1px solid #aaa;
        box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
        border-radius: .5em;
    }

    &__big-button {
        width: 102%;
        height: 100%;
        background-color: #A3CB38;
        color: white;

        font-family: inherit;
        font-size: 1.6rem;
        text-transform: uppercase;
        font-weight: 600;

        border: none;
        border-radius: .4rem;

        padding: 1rem;
    }
}

#input {
    /*&--1-of-4 {
        
    }*/

    &--3-of-4 {
        grid-column: 1 / 4;
    }

    &--4-of-4 {
        grid-column: 1 / 5;
    }
}

/* Buttons */
.btn {
	&__form {
		&--edit {
			background-color: #fbc531;
			padding: 1rem;
			border: none;
			border-radius: 0.4rem;
		}

		&--delete {
			background-color: #c23616;
			padding: 1rem;
			border: none;
			border-radius: 0.4rem;
		}

		&--icon {
			height: 1.75rem;
			width: 1.75rem;
			fill: #fff;
		}
	}
}

</style>