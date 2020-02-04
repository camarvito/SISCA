<template>
    <tr>
        <td class="table__body--input-row" colspan="5">
            <input
                class="table__body--input-row--bar"
                type="text"
                placeholder="Nome do pedido"
                v-model="name"
            />
            <input
                class="table__body--input-row--bar"
                type="text"
                placeholder="R$ 0.00"
                v-model="price"
                v-mask="'R$ #.##'"
            />
            <button class="table__body--input-row--button" @click="send">
                +
            </button>
        </td>
    </tr>
</template>

<script>
import gql from "graphql-tag";

import { TheMask } from "vue-the-mask";

export default {
    components: { TheMask },
    data() {
        return {
            id: this.$route.params.id,
            name: "",
            price: ""
        };
    },
    methods: {
        async send() {
            const debitNameRegex = /\w+/i;
            const debitPriceRegex = /\d+(\.\d+)?/;

            if (
                this.name.match(debitNameRegex) &&
                this.price.match(debitPriceRegex)
            ) {
                function currentDate() {
                    const nowDate = Date(Date.now()).toString();
                    const dateRegExp = /\w{3}\s\d{2}\s\d{4}\s\d{2}:\d{2}:\d{2}/i;
                    return nowDate.match(dateRegExp);
                }

                const debit = {
                    name: this.name,
                    price: parseFloat(this.price.match(debitPriceRegex)[0]),
                    date: currentDate()[0],
                    isPaid: false
                };

                await this.$api
                    .mutate({
                        mutation: gql`
                            mutation(
                                $id: ID!
                                $name: String!
                                $price: Float!
                                $date: String!
                                $isPaid: Boolean!
                            ) {
                                newDebit(
                                    data: {
                                        costumerId: $id
                                        name: $name
                                        price: $price
                                        date: $date
                                        isPaid: $isPaid
                                    }
                                ) {
                                    name
                                    price
                                    date
                                }
                            }
                        `,
                        variables: {
                            id: this.id,
                            name: debit.name,
                            price: debit.price,
                            date: debit.date
                        }
                    })
                    .then(result => {
                        // Implementar
                        // this.$store.dispatch('tableDebits/loadDebits')
                    })
                    .catch(e => console.log(e));
            } else {
                console.log("Formulário errado!");
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.table__body--input-row {
    background-color: #576574;
    text-align: center;
    padding: 0.9rem;

    &--bar {
        font-size: 1.6rem;
        margin: 0 1rem;
        padding: 0.5rem;
        border: none;

        &::placeholder {
            font-size: 1.2rem;
        }
    }

    &--button {
        display: inline-block;
        border: 1px solid transparent;
        margin: 0 0.5rem;
        height: 2.1rem;
        width: 2.1rem;
        border-radius: 50%;
        transition: color 0.15s;
        font-weight: bold;
        color: #fff;
        background-color: #44bd32;
        outline: none;
        cursor: pointer;

        &:active {
            background-color: rgb(38, 159, 20);
        }
    }
}
</style>
