<template>
    <div class="footer">   
        <span  v-for="(number, index) in numbers" :key="index"> {{number}} =></span>
    </div>
</template>

<script>


export default {
    name: 'Footer',
    data()  {
        return {
            numbers: this.$store.state.articleNumbers,
        }
    }
}

</script>

<style scoped>
.footer {
    margin: 30px 0;
}

</style>