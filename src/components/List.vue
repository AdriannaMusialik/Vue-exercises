<template>
  <div id="main">
    <div class="list">
      <ol>
        <li v-for="number in numbers" :key="number">
          <a :href="`#${number}`">Go to {{number}}</a>
        </li>
      </ol>
    </div>
    <div class="articles">
        <article  v-for="number in numbers" :key="number">
          <h2 :id="number" >{{number}}</h2>
          <p class="text">
            <LoremIpsum add="1p" />
          </p>
        </article>
    </div>
  </div>
</template>

<script>
import LoremIpsum from 'vue-lorem-ipsum';

export default {
  name: 'List',
  components: {LoremIpsum},
  data() {
    return {
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

</style>
