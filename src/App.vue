<template>
  <div id="app">
    <List />  
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import List from "./components/List"
import  Footer from "./components/Footer"

export default {
  name: 'App',
  components: {List, Footer},
  beforeUpdate() {
    localStorage.setItem('ArticleNumber', this.$route.params.id)
  },
  beforeCreate() {
    const site = localStorage.getItem('ArticleNumber');
    if (site === 'undefined') {
       this.$router.push("/");
    } else {
      this.$router.push(site);
    }
  },
};

//here I get error: "Avoided redundant navigation to current location:"
//Somehow my browser remember last visited page without using localStorage
//But to be honest I am not sure if I did this exercise correct

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
