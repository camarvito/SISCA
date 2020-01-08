<template>
<tbody>
    <!-- <tr class="warning no-result">
            <td colspan="4">
                <i class="fa fa-warning"></i> No result
            </td>
    </tr> -->

  <tr class="table__body--row">
    <td class="table__body--cell">{{ name }}</td>
    <td class="table__body--cell">{{ registration }}</td>
    <td class="table__body--cell">{{ cpf }}</td>
    <td class="table__body--cell">
        <button class="btn btn--include">
            Cadastrar novo débito
        </button>
    </td>
    <td class="table__body--cell">
        <button class="btn btn--exclude">
            <svg class="btn--icon">
                <use xlink:href="@/assets/sprites.svg#trash"></use>
            </svg>
        </button>
        <button class="btn btn--edit">
            <svg class="btn--icon">
                <use xlink:href="@/assets/sprites.svg#pencil-edit-button"></use>
            </svg>
        </button>
    </td>
</tr>
</tbody>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/database';

export default {
    props: {
        name: {
            type: String
        },
        registration: {
            type: String
        },
        cpf: {
            type: String
        }
    },
    methods: {
        // getData(){
        //     let db = firebase.database().ref('users')
        //     db.on('value', function(snapshot) {
        //         console.log(snapshot.val())
        //     })
        // }
    }
}
</script>

<style lang="scss">
.table__body {
    &--row {
        display: table-row;
        cursor: pointer;

        &:hover {
            background-color: #3498db28;
        }
    }

    &--cell {
        display: table-cell;
        width: 20%;
        font-size: 1.2rem;
        font-weight: lighter;
        text-align: initial;
        border: 1px solid #dee2e6;
        padding: 1rem;   
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

    &--icon {
        height: 2rem;
        width: 2rem;
        fill: #FFF;
    }

    &--include {
        background-color: #2ecc71;
    }

    &--exclude {
        background-color: #e74c3c;
    }

    &--edit {
        background-color: #f1c40f;
    }
}
</style>