<template>
  <div id="main">
    <div class="list">
      <ol>
        <li v-for="number in numbers" :key="number">
           <router-link :to="`article/${number}`">Go to {{ number }}</router-link>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  data() {
    return {
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  }
}
</script>

<style scoped>
li {
  font-size: 20px;
  list-style: none;
  display:inline-flex;
  margin: 0 15px;
}

li a {
  color: black;
  text-decoration: none;
}
</style>
