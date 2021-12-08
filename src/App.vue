<template>
  <div id="app">
    <h2>Navigatie menu</h2>
    <ul id="navMenu">
      <li>
        <router-link :to="{ name: 'HTML', params: {id: this.id} }">Infopagina HTML</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'CSS', params: {id: this.id} }">Infopagina CSS</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'JavaScript', params: {id: this.id} }">JavaScript HTML</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Laravel', params: {id: this.id} }">Laravel HTML</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Vue', params: {id: this.id} }">Vue HTML</router-link>
      </li>
    </ul>
    <p>{{id}}beam</p>
      <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "App",
  data() {
    return {
        id: Math.floor(Math.random()*10),
      }
  },
   watch: {
    BeforeRouteUpdate (to, from, next){
      this.id = Math.floor(Math.random()*10000)
    }
  },
};










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

#navMenu {
  list-style: none;
}

#navMenu li {
  display: inline-block;
  margin: 10px;
}
</style>
