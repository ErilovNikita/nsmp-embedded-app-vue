<script setup lang="ts">
  import User from './components/User.vue';

  function navigate(url:string) {
    window.open(url, '_blank')
  }
</script>

<template>
  <div>
    <img src="/vite.svg" class="logo" alt="Vite logo" @click="navigate('https://vite.dev')"/>
    <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" @click="navigate('https://vuejs.org')"/>
    <img src="/typescript.png" class="logo typescript" alt="TypeScript logo" @click="navigate('https://typescriptlang.org')"/>
  </div>
  <h1>Vite + Vue + TypeScript</h1>

  <User/>

  <p class="text-muted">This template was developed and supported by <a href="https://github.com/ErilovNikita/nsmp-embedded-app-vue">ErilovNikita</a></p>
</template>

<style scoped>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    cursor: pointer;
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
  .text-muted {
    color: #888;
  }
</style>
