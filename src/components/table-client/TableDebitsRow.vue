<template>
    <tr class="table__body--row" :class="'{ isIndexEven : even }, {!isIndexEven : odd }'">
        <td class="table__body--row--cell">{{ date }}</td>
        <td class="table__body--row--cell">{{ name }}</td>
        <td class="table__body--row--cell">{{ price }}</td>
        <td class="table__body--row--cell"> NÃO PAGO</td>
        <td class="table__body--row--cell"><button class="btn btn--include uppercase">A</button></td>
    </tr>
</template>

<script>
export default {
    props: {
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
        }
    },
    methods: {
        isIndexEven(){
            if (this.index % 2 == 0){
                return true
            } else {
                return false
            } 
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
            color: #000;
        }
    }
}

.odd {
    background-color: lightcoral;
}

.even {
    background-color: lightblue;
}

</style>