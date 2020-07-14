<template>
  <div id="main">
    <div class="list">
      <v-tabs>
        <v-tab v-for="number in numbers" :key="number">
           <router-link exact :to="`${number}`">Go to {{ number }}</router-link>
        </v-tab>
      </v-tabs>
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

a {
  color: black;
  text-decoration: none;
}
</style>