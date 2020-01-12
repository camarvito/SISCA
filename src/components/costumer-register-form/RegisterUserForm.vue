<template>   
            <div class="content__form">
                <span class="content__form--title">Dados de cadastro</span>
                <div class="content__form__input-container">

                    <div class="content__form__input-container--item input--3-of-4">
                        <label for="name-input" class="input__text--label" :class="{ 'input__correct--text': user.isNameValid, 'input__wrong--text': user.isNameInitialized }">Nome Completo</label>
                        <input type="text" placeholder="Ex. Victor Camargo Oliveira" class="input__text--type" :class="{ 'input__correct': user.isNameValid , 'input__correct--text': user.isNameValid, 'input__wrong': user.isNameInitialized, 'input__wrong--text': user.isNameInitialized }" v-model.trim="user.name" @blur="checkForm(user.name)">
                    </div>

                    <div class="content__form__input-container--item input--1-of-4">
                        <label for="name-input" class="input__text--label" :class="{ 'input__correct--text': user.isCpfValid, 'input__wrong--text': user.isCpfInitialized }">CPF</label> 
                        <input type="text" placeholder="123.456.789-00" class="input__text--type" :class="{ 'input__correct': user.isCpfValid , 'input__correct--text': user.isCpfValid , 'input__wrong': user.isCpfInitialized, 'input__wrong--text': user.isCpfInitialized }" v-mask="'###.###.###-##'" v-model.trim="user.cpf" @blur="checkForm(user.cpf)">
                    </div>

                    <div class="content__form__input-container--item input--1-of-4">
                        <label for="name-input" class="input__text--label" :class="{ 'input__correct--text': user.isPhoneValid, 'input__wrong--text': user.isPhoneInitialized }">Telefone para contato</label>
                        <input type="text" placeholder="(88) 00000-0000" class="input__text--type" :class="{ 'input__correct': user.isPhoneValid , 'input__correct--text': user.isPhoneValid , 'input__wrong': user.isPhoneInitialized, 'input__wrong--text': user.isPhoneInitialized }" v-mask="'(##) #####-####'" v-model.trim="user.phone" @blur="checkForm(user.phone)">
                    </div>

                    <div class="content__form__input-container--item input--1-of-4">
                        <label for="name-input" class="input__text--label">Tipo</label>
                        <select class="input__drop-down" v-model="user.type">
                            <option v-for="type in user.types" :key="type.code" :value="type.name">{{ type.name }}</option>
                        </select>
                    </div>
            
                    <div class="content__form__input-container--item input--1-of-4">
                        <label for="name-input" class="input__text--label" :class="{ 'input__correct--text': user.isRegistrationValid, 'input__wrong--text': user.isRegistrationInitialized }">Matricula</label>
                        <input type="text" placeholder="123456" class="input__text--type" :class="{ 'input__correct': user.isRegistrationValid , 'input__correct--text': user.isRegistrationValid , 'input__wrong': user.isRegistrationInitialized, 'input__wrong--text': user.isRegistrationInitialized }" v-mask="'######'" v-model.trim="user.registration" @blur="checkForm(user.registration)">
                    </div>

                    <div class="content__form__input-container--item input--1-of-4">
                        <label for="name-input" class="input__text--label">Curso</label>
                        <select class="input__drop-down" v-model="user.course">
                            <option v-for="course in user.courses" :key="course.code" :value="course.name">{{ course.name }}</option>
                        </select>
                    </div>

                    <div class="content__form__input-container--item input--4-of-4">
                        <input type="button" class="input__big-button" value="Confirmar cadastro" @click="send">
                    </div>
                </div>
            </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/database';

import { TheMask } from 'vue-the-mask'

export default {
    components: { TheMask },
    data(){
        return {
            user: {
                name: '',
                isNameInitialized: false,
                isNameValid: false,
                cpf: '',
                isCpfInitialized: false,
                isCpfValid: false,
                phone: '',
                isPhoneInitialized: false,
                isPhoneValid: false,
                type: 'Aluno',
                types: [
                    { code: 1, name: 'Aluno' },
                    { code: 2, name: 'Servidor'},
                    { code: 3, name: 'Outro'} 
                ],
                registration: '',
                isRegistrationInitialized: false,
                isRegistrationValid: false,
                course: 'Ciência da Computação',
                courses: [
                    { code: 1, name: 'Ciência da Computação' },
                    { code: 2, name: 'Design Digital'},
                    { code: 3, name: 'Engenharia da Computação'},
                    { code: 4, name: 'Engenharia de Software'},
                    { code: 5, name: 'Redes de Computadores'},
                    { code: 6, name: 'Sistemas de Informação'} 
                ]
            },
        }
    },
    methods: {
        checkForm(attr){
            if (attr === this.user.name){
                const nameRegex = /\w+\s\w+/i
                this.user.isNameInitialized = true
                this.user.isNameValid = this.user.name.match(nameRegex) ? true : false
            } else if (attr === this.user.cpf) {
                const cpfRegex = /\d{3}\.\d{3}\.\d{3}\-\d{2}/
                this.user.isCpfInitialized = true
                this.user.isCpfValid = this.user.cpf.match(cpfRegex) ? true : false
            } else if (attr === this.user.phone) {
                const phoneRegex = /\(\d{2}\)\s\d{5}\-\d{4}/
                this.user.isPhoneInitialized = true
                this.user.isPhoneValid = this.user.phone.match(phoneRegex) ? true : false
            } else if (attr === this.user.registration) {
                const registrationRegex = /\d{6}/
                this.user.isRegistrationInitialized = true
                this.user.isRegistrationValid = this.user.registration.match(registrationRegex) ? true : false
            }
        },
        clear(){
            this.user = {
                name: '',
                isNameInitialized: false,
                isNameValid: false,
                cpf: '',
                isCpfInitialized: false,
                isCpfValid: false,
                phone: '',
                isPhoneInitialized: false,
                isPhoneValid: false,
                type: 'Aluno',
                types: [
                    { code: 1, name: 'Aluno' },
                    { code: 2, name: 'Servidor'},
                    { code: 3, name: 'Outro'} 
                ],
                registration: '',
                isRegistrationInitialized: false,
                isRegistrationValid: false,
                course: 'Ciência da Computação',
                courses: [
                    { code: 1, name: 'Ciência da Computação' },
                    { code: 2, name: 'Design Digital'},
                    { code: 3, name: 'Engenharia da Computação'},
                    { code: 4, name: 'Engenharia de Software'},
                    { code: 5, name: 'Redes de Computadores'},
                    { code: 6, name: 'Sistemas de Informação'} 
                ]
            }
        },
        send(){
            let newUser = {
                name: this.user.name,
                cpf: this.user.cpf,
                phone: this.user.phone,
                type: this.user.type,
                registration: this.user.registration,
                course: this.user.course,
                debits: ''
            }

            const db = firebase.database()
            db.ref('users').push(newUser)
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
        cursor: pointer;
    }

    &__correct {
        outline: #A3CB38 auto 1px !important;

        &--text {
            color: #76a002 !important;
        }
    }

    &__wrong {
        outline: #c0392b auto 1px;

        &--text {
            color: #e74c3c;
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