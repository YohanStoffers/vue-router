<template>
  <div id="app">
    <h2>Navigatie menu</h2>
    <div>Id: {{id}}</div>
    <ul id="navMenu">
      <li>
        <router-link :to="{ name: 'HTML', params: {id: this.id} }">
          <span @click="randomNum">Infopagina HTML</span>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'CSS', params: {id: this.id} }">
          <span @click="randomNum">Infopagina CSS</span>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'JavaScript', params: {id: this.id} }">
          <span @click="randomNum">JavaScript HTML</span>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Laravel', params: {id: this.id} }">
          <span @click="randomNum">Laravel HTML</span>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Vue', params: {id: this.id} }">
          <span @click="randomNum">Vue HTML</span>
        </router-link>
      </li>
    </ul>
      <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "App",
  data() {
    return {
        id: 0,
      }
  },
   methods: {
     randomNum(){
       this.id = Math.floor(Math.random()*10000000)
     }
   },
   created() {
     this.randomNum();
   }
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
