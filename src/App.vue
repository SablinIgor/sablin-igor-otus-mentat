<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Settings</router-link> |
      <router-link to="/play">Play</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
  }

  h2 {
    font-weight: 300;
    word-spacing: 2px;
    text-align: center;
    margin-bottom: 30px;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .lg_font {
    color: white;
    font-weight: bold;
    font-size: 2em;
  }

  .md_font {
    color: white;
    font-weight: bold;
    font-size: 1.5em;
  }

#app {
  font-family: 'VT323', 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 30px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 10px;
  text-align: center;
  background-color: #a75915;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
