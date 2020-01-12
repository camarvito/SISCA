<template>
    <div>
        <tr>
            <td v-if="isInputEnable" style="background-color: black" class="table__body--row--add" colspan="5">
                <input type="text">
                <input type="text">
            </td>
        </tr>
        <tr>
            <td class="table__body--row--add" colspan="5">
                <button class="btn btn--include uppercase" @click="enableInput">Adicionar novo débito</button>  
            </td>
        </tr>
    </div>
</template>

<script>
export default {
    data(){
        return {
            isInputEnable: false
        }
    }
}
</script>

<style>

</style>