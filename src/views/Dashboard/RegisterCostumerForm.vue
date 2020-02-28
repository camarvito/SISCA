<template>
  <div class="content__form">
    <span class="content__form--title">Dados de cadastro</span>
    <div class="content__form__input-container">
      <div class="content__form__input-container--item input--3-of-4">
        <label
          for="name-input"
          class="input__text--label"
          :class="{
            'input__correct--text': user.isNameValid,
            'input__wrong--text': user.isNameInitialized,
          }"
          >Nome Completo</label
        >
        <input
          type="text"
          placeholder="Ex. Victor Camargo Oliveira"
          class="input__text--type"
          :class="{
            input__correct: user.isNameValid,
            'input__correct--text': user.isNameValid,
            input__wrong: user.isNameInitialized,
            'input__wrong--text': user.isNameInitialized,
          }"
          v-model.trim="user.name"
          @blur="checkForm(user.name)"
        />
      </div>

      <div class="content__form__input-container--item input--1-of-4">
        <label
          for="name-input"
          class="input__text--label"
          :class="{
            'input__correct--text': user.isCpfValid,
            'input__wrong--text': user.isCpfInitialized,
          }"
          >CPF</label
        >
        <input
          type="text"
          placeholder="123.456.789-00"
          class="input__text--type"
          :class="{
            input__correct: user.isCpfValid,
            'input__correct--text': user.isCpfValid,
            input__wrong: user.isCpfInitialized,
            'input__wrong--text': user.isCpfInitialized,
          }"
          v-mask="'###.###.###-##'"
          v-model.trim="user.cpf"
          @blur="checkForm(user.cpf)"
        />
      </div>

      <div class="content__form__input-container--item input--1-of-4">
        <label
          for="name-input"
          class="input__text--label"
          :class="{
            'input__correct--text': user.isPhoneValid,
            'input__wrong--text': user.isPhoneInitialized,
          }"
          >Telefone para contato</label
        >
        <input
          type="text"
          placeholder="(88) 00000-0000"
          class="input__text--type"
          :class="{
            input__correct: user.isPhoneValid,
            'input__correct--text': user.isPhoneValid,
            input__wrong: user.isPhoneInitialized,
            'input__wrong--text': user.isPhoneInitialized,
          }"
          v-mask="'(##) #####-####'"
          v-model.trim="user.phone"
          @blur="checkForm(user.phone)"
        />
      </div>

      <div class="content__form__input-container--item input--1-of-4">
        <label for="name-input" class="input__text--label">Tipo</label>
        <select class="input__drop-down" v-model="user.type">
          <option
            v-for="type in user.types"
            :key="type.code"
            :value="type.name"
            >{{ type.name }}</option
          >
        </select>
      </div>

      <div
        v-if="user.type === 'Aluno'"
        class="content__form__input-container--item input--1-of-4"
      >
        <label
          for="name-input"
          class="input__text--label"
          :class="{
            'input__correct--text': user.isRegistryValid,
            'input__wrong--text': user.isRegistryInitialized,
          }"
          >Matricula</label
        >
        <input
          type="text"
          placeholder="123456"
          class="input__text--type"
          :class="{
            input__correct: user.isRegistryValid,
            'input__correct--text': user.isRegistryValid,
            input__wrong: user.isRegistryInitialized,
            'input__wrong--text': user.isRegistryInitialized,
          }"
          v-mask="'######'"
          v-model.trim="user.registry"
          @blur="checkForm(user.registry)"
        />
      </div>

      <div
        v-if="user.type === 'Aluno'"
        class="content__form__input-container--item input--1-of-4"
      >
        <label for="name-input" class="input__text--label">Curso</label>
        <select class="input__drop-down" v-model="user.course">
          <option
            v-for="course in user.courses"
            :key="course.code"
            :value="course.name"
            >{{ course.name }}</option
          >
        </select>
      </div>

      <div class="content__form__input-container--item input--4-of-4">
        <input
          type="button"
          class="input__big-button"
          value="Confirmar cadastro"
          @click="send"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapActions: costumersActions } = createNamespacedHelpers('costumers');

export default {
  name: 'DashboardRegisterCostumerForm',
  // components: { TheMask },
  data() {
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
          { code: 2, name: 'Servidor' },
          { code: 3, name: 'Outro' },
        ],
        registry: '',
        isRegistryInitialized: false,
        isRegistryValid: false,
        course: 'Ciência da Computação',
        courses: [
          { code: 1, name: 'Ciência da Computação' },
          { code: 2, name: 'Design Digital' },
          { code: 3, name: 'Engenharia da Computação' },
          { code: 4, name: 'Engenharia de Software' },
          { code: 5, name: 'Redes de Computadores' },
          { code: 6, name: 'Sistemas de Informação' },
        ],
      },
    };
  },
  methods: {
    ...costumersActions(['storeCostumer']),
    checkForm(attr) {
      if (attr === this.user.name) {
        const nameRegex = /\w+\s\w+/i;
        this.user.isNameInitialized = true;
        this.user.isNameValid = !!this.user.name.match(nameRegex);
      } else if (attr === this.user.cpf) {
        // eslint-disable-next-line no-useless-escape
        const cpfRegex = /\d{3}\.\d{3}\.\d{3}\-\d{2}/;
        this.user.isCpfInitialized = true;
        this.user.isCpfValid = !!this.user.cpf.match(cpfRegex);
      } else if (attr === this.user.phone) {
        // eslint-disable-next-line no-useless-escape
        const phoneRegex = /\(\d{2}\)\s\d{5}\-\d{4}/;
        this.user.isPhoneInitialized = true;
        this.user.isPhoneValid = !!this.user.phone.match(phoneRegex);
      } else if (attr === this.user.registry) {
        const registrationRegex = /\d{6}/;
        this.user.isRegistryInitialized = true;
        this.user.isRegistryValid = !!this.user.registry.match(
          registrationRegex
        );
      }
    },
    clear() {
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
          { code: 2, name: 'Servidor' },
          { code: 3, name: 'Outro' },
        ],
        registry: '',
        isRegistryInitialized: false,
        isRegistryValid: false,
        course: 'Ciência da Computação',
        courses: [
          { code: 1, name: 'Ciência da Computação' },
          { code: 2, name: 'Design Digital' },
          { code: 3, name: 'Engenharia da Computação' },
          { code: 4, name: 'Engenharia de Software' },
          { code: 5, name: 'Redes de Computadores' },
          { code: 6, name: 'Sistemas de Informação' },
        ],
      };
    },
    async send() {
      await this.storeCostumer({
        name: this.user.name,
        cpf: this.user.cpf,
        phone: this.user.phone,
        type: this.user.type,
        registry: this.user.registry,
        course: this.user.course,
      });
    },
  },
};
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
    margin-left: 0.2rem;
    margin-bottom: 0.4rem;
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
    padding: 0.6em 1.4em 0.5em 0.8em;
    width: 110%;
    height: 74%;
    box-sizing: border-box;
    margin: 0;
    border: 1px solid #aaa;
    box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
    border-radius: 0.5em;
  }

  &__big-button {
    width: 102%;
    height: 100%;
    background-color: #a3cb38;
    color: white;

    font-family: inherit;
    font-size: 1.6rem;
    text-transform: uppercase;
    font-weight: 600;

    border: none;
    border-radius: 0.4rem;

    padding: 1rem;
    cursor: pointer;
  }

  &__correct {
    outline: #a3cb38 auto 1px !important;

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
