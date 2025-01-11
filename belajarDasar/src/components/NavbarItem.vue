<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand text-light">Home</router-link>
      <router-link to="/aboutView" class="navbar-brand text-light">About</router-link>
      <router-link to="/contactView" class="navbar-brand text-light">Contact</router-link>
      <router-link to="/ApiView" class="navbar-brand text-light">Data API</router-link>
      <!-- <a routclass="navbar-brand text-light">Home</a> -->
    </div>
  </nav>

  <!-- <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/aboutView">About</router-link>
    <router-link to="/contactView">Contact</router-link>
  </nav> -->
</template>

<style scoped>
nav {
  background: #333;
  padding: 10px;
}

router-link {
  color: white;
  margin: 0 10px;
  text-decoration: none;
}
</style>
