<template>
    <div class="article">
        <article >
            <h2 >{{ $route.params.id }}</h2>
            <p class="text">
                <LoremIpsum add="2p" />
            </p>
        </article>
        <div class="buttons">
            <div class="backButton">
                <button @click="goBack(-1)">Back</button>
            </div>
            <div class="homeButton">
                <button @click='goTo("/")' >Home</button>
            </div>
        </div>
    </div>
</template>

<script>
import LoremIpsum from 'vue-lorem-ipsum';

export default {
    name: 'Article',
    components: {LoremIpsum},  
    methods: {
        goBack (site) {
           this.$router.go(site);
        },
        goTo (site) {
            this.$router.push(site)
        }
    }
}

</script>

<style>
.article {
    margin: 20px
}

.buttons {
    display: flex;
    justify-content: space-between;
}

.homeButton, .backButton {
  margin: 20px;
  font-size: 25px;
  text-align: right;
}


</style>