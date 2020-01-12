<template>
    <tr class="table__body--add-row">
        <td class="table__body--add-row--cell" colspan="5">
            <button class="btn btn--include uppercase" @click="changeInputState">{{ buttonText[option] }}</button>  
        </td>
    </tr>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/database';

export default {
    props: {
        inputState: {
            type: Boolean,
            required: true
        },
        inputValid: {
            type: Boolean,
            required: true
        }
    },
    data(){
        return {
            isInputEnable: this.inputState,
            isInputValid: this.inputValid,
            buttonText: ['Adicionar novo débito', 'Cancelar', 'Salvar']
        }
    },
    computed: {
        option() {
            if (this.isInputEnable && !this.isInputValid){
                return 1
            } else if (this.isInputValid) {
                return 2
            } else {
                return 0
            }
        }
    },
    methods: {
        changeInputState() {
            this.$emit('changeInputState')
        }
    }
}
</script>

<style lang="scss" scoped>
.table__body {
    &--add-row {
        background-color: #2f3640;

        &--cell {
            text-align: center;
            padding: 1.4rem;
        }
    }
}

.btn {
    display: inline-block;
    border: 1px solid transparent;
    padding: .7rem .7rem;
    margin: 0 .5rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s;
    cursor: pointer;

    &--include {
        background-color: #2ecc71;
        box-shadow: 0px 0px 2px .2px rgba(0,0,0,0.35);
    }
}

</style>