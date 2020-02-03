<template>
    <tr class="table__body--row" :class="{ 'even' : this.index % 2 == 0, 'odd' : this.index % 2 != 0, 'table__body--row--paid' : isPaid}">
        <td class="table__body--row--cell">{{ date }}</td>
        <td class="table__body--row--cell">{{ name }}</td>
        <td class="table__body--row--cell">R$ {{ price.toFixed(2) }}</td>
        <td class="table__body--row--cell">
            <span v-show="isPaid">Pago</span>
            <span v-show="!isPaid">Não pago</span>
        </td>
        <td class="table__body--row--cell">
            <button class="btn btn--pay" :class="{'btn--paid': isPaid}" @click="changePayState">
                <svg class="icon">
                    <use xlink:href="@/assets/sprites.svg#dollar-symbol"></use>
                </svg>
            </button>
            <button class="btn btn--exclude">
                <svg class="icon">
                    <use xlink:href="@/assets/sprites.svg#bin"></use>
                </svg>
            </button>
        </td>
    </tr>
</template>

<script>
import gql from 'graphql-tag'

export default {
    props: {
        debitId: {
            type: String,
            required: true
        },
        index: {
            type: Number,
            required: true
        },
        date: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        isPaid: {
            type: Boolean,
            required: true
        }
    },
    computed: {},
    methods: {
        changePayState(){
            this.isPaid = !this.isPaid

            this.$api.mutate({
                mutation: gql`
                    mutation (
                        $id: ID!
                        $isPaid: Boolean!
                    ) {
                        changeDebit(
                            filter: {
                                id: $id
                            }
                            data: {
                                isPaid: $isPaid
                            }
                        ) { name price date isPaid }
                    }
                `,
                variables: {
                    id: this.debitId,
                    isPaid: this.isPaid
                }
            }).then(result => console.log(result))
            .catch(e => console.log(e))
        }
    }
}
</script>

<style lang="scss" scoped>
.table__body {
    &--row {
        &--cell {
            width: 20%;
            font-size: 1.2rem;
            font-weight: bold;
            text-align: center;
            text-transform: uppercase;
            padding: 1.4rem;
            color: inherit;
        }

        &--paid {
            background-color: rgb(46, 204, 113) !important;
            color: #FFF !important;
        }
    }
}

.odd {
    background-color: #ddd;
}

.even {
    background-color: #eee;
}

.btn {
    display: inline-block;
    border: 1px solid transparent;
    padding: .7rem .7rem;
    margin: 0 .5rem;
    border-radius: .25rem;
    transition: color .15s;
    cursor: pointer;

    &--pay {
        background-color: rgb(46, 204, 113);
        box-shadow: 0px 0px 2px .2px rgba(0,0,0,0.35);
        outline: none;

        &:active {
            background-color: rgb(16, 174, 83);
        }
    }

    &--exclude {
        background-color: #e74c3c;
        box-shadow: 0px 0px 2px .2px rgba(0,0,0,0.35);
        outline: none;

        &:active {
            background-color: rgb(201, 46, 30);
        }
    }

    &--paid {
        background-color: rgb(169, 175, 179);
        box-shadow: 0px 0px 2px .2px rgba(0,0,0,0.35);
        outline: none;

        &:active {
            background-color: rgb(139, 145, 149);
        }
    }
}

.icon {
    height: 1.3rem;
    width: 1.3rem;
    fill: #FFF;
}
</style>