<template>
    <div class="article">
        <article >
            <h2 >{{ $route.params.id }}</h2>
            <p class="text">
                <LoremIpsum add="2p" />
            </p>
        </article>
        <div class="homeButton">
            <router-link to="/" >Home</router-link>
        </div>
    </div>
</template>

<script>
import LoremIpsum from 'vue-lorem-ipsum';

export default {
    name: 'Article',
    components: {LoremIpsum},  
}
</script>

<style>
.article {
    margin: 20px
}
.homeButton {
  margin: 20px;
  font-size: 20px;
  text-align: right;
}

.homeButton a {
  text-decoration: none;
  color: black;
}
</style>