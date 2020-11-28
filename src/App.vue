<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
html {
  height: 100%;
}
body {
  height: 100%;
}
* {
  box-sizing: border-box;
  margin: 0;
}
input {
  font-size: 1rem;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 16px;
  height: 100%;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
