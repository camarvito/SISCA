<template>
    <tr class="table__body--add-row">
        <td class="table__body--add-row--cell" colspan="5">
            <button class="btn btn--include uppercase" @click="stateAction">{{ buttonState.message }}</button>  
        </td>
    </tr>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/database';

export default {
    computed: {
        currentState() {
            return this.$store.state.tableDebits.currentState
        },
        buttonState() {
            return this.$store.state.tableDebits.buttonState[this.currentState]
        }
    },
    methods: {
        currentDate() {
            let nowDate = Date(Date.now()).toString()
            const dateRegExp = /\w{3}\s\d{2}\s\d{4}\s\d{2}:\d{2}:\d{2}/i
            return nowDate.match(dateRegExp)
        },
        stateAction() {
            this.$store.dispatch('tableDebits/changeState', this.buttonState.code)
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