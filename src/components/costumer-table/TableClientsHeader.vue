<template>
    <thead>
        <tr>
            <th class="table__header--cell">Nome</th>
            <th class="table__header--cell">Matricula</th>
            <th class="table__header--cell">CPF</th>
            <th class="table__header--cell">Débitos</th>
            <th class="table__header--cell">Ações</th>
        </tr>
    </thead>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.table__header {
    &--cell {
        font-family: inherit;
        font-size: 1.6rem;
        font-weight: lighter;
        text-align: initial;
        border: 1px solid #dee2e6;
        padding: 1rem;
        width: 20%;
    }
}
</style>
