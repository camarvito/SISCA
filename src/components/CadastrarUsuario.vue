<template>   
            <div class="content__form">
                <span class="content__form--title">Dados de cadastro</span>
                <div class="content__form__input-container">

                    <div class="content__form__input-container--item input--3-of-4">
                        <label for="name-input" class="input__text--label" :class="{ 'input__correct--text': userValidation.nome }">Nome Completo</label>
                        <input type="text" placeholder="Ex. Victor Camargo Oliveira" class="input__text--type" :class="{ 'input__correct': userValidation.nome , 'input__correct--text': userValidation.nome }" v-model.trim="usuario.nome" @blur="checkForm(usuario.nome)">
                    </div>

                    <div class="content__form__input-container--item input--1-of-4">
                        <label for="name-input" class="input__text--label" :class="{ 'input__correct--text': userValidation.cpf }">CPF</label> 
                        <input type="text" placeholder="123.456.789-00" 
                        class="input__text--type" :class="{ 'input__correct': userValidation.cpf , 'input__correct--text': userValidation.cpf }" v-mask="'###.###.###-##'" v-model.trim="usuario.cpf" @blur="checkForm(usuario.cpf)">
                    </div>

                    <div class="content__form__input-container--item input--1-of-4">
                        <label for="name-input" class="input__text--label">Telefone para contato</label>
                        <input type="text" placeholder="(88) 00000-0000" class="input__text--type" v-mask="'(##) #####-####'" v-model.trim="usuario.telefone">
                    </div>

                    <div class="content__form__input-container--item input--1-of-4">
                        <label for="name-input" class="input__text--label">Tipo</label>
                        <select class="input__drop-down">
                            <option value="0">Selecione</option>
                            <option value="1">Aluno</option>
                            <option value="2">Servidor</option>
                            <option value="3">Outro</option>
                        </select>
                    </div>

                    <div class="content__form__input-container--item input--1-of-4">
                        <label for="name-input" class="input__text--label">Matricula</label>
                        <input type="text" placeholder="123456" 
                        class="input__text--type" v-mask="'######'">
                    </div>

                    <div class="content__form__input-container--item input--1-of-4">
                        <label for="name-input" class="input__text--label">Curso</label>
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

                    <div class="content__form__input-container--item input--4-of-4">
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
            usuario: {
                nome: '',
                cpf: '',
                telefone: '',
                tipo: '',
                matricula: '',
                curso: ''
            },
            userValidation: {
                nome: false,
                cpf: false,
                telefone: false,
                tipo: false,
                matricula: false,
                curso: false
            }
        }
    },
    methods: {
        checkForm(attr){
            if (attr === this.usuario.nome){
                const nameRegex = /\w+\s\w+/i
                this.userValidation.nome = this.usuario.nome.match(nameRegex) ? true : false
            } else if (attr === this.usuario.cpf) {
                const cpfRegex = /\d{3}\.\d{3}\.\d{3}\-\d{2}/
                this.userValidation.cpf = this.usuario.cpf.match(cpfRegex) ? true : false
            }
        },
        clear(){
            this.usuario = {
                nome: '',
                cpf: '',
                telefone: '',
                tipo: '',
                matricula: '',
                curso: ''
            }
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

            &:focus-within {
                .input__text--label {
                    color: #00a2c7;
                }
                
                .input__text--type {
                    outline: #0abde3 auto 1px;
                    color: #8a8a8a;
                }
            }
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

    &__text--type {
        display: inline-block;
        color: #8a8a8a;
        font-family: inherit;
        font-size: 1.6rem;
        font-weight: inherit;

        padding: 1rem;
        border: 1px solid #8a8a8a;
        border-radius: 0.4rem;

        width: 100%;

        &::placeholder {
            color: rgb(180, 180, 180);
        }
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

    &__correct {
        outline: #A3CB38 auto 1px;

        &--text {
            color: rgb(118, 160, 2);
        }
    }
}

/* Tamanho dos inputs no formulário */
.input {
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