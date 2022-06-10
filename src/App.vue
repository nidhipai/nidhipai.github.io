<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: 'App',
  components: {
    Footer,
    Header
  }
}
</script>

<style>
  #app {
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    padding-top: 60px;
    padding-left: 10%;
    padding-right: 10%;
    background-color: var(--background-color);
  }

  :root {
    --color-1: #063a6f;
    --color-2: #2a78c9;
    --background-color: #f6f2f6;
    --dark-col: #063a6f;
    --light-col: blue;
  }

  h1, h2, h3, h4 {
    color: var(--color-2)
  }

</style>
