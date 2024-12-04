<script setup lang="ts">
  defineProps<{ msg: string }>()
</script>

<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="../assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <a href="https://www.typescriptlang.org" target="_blank">
      <img src="/typescript.png" class="logo typescript" alt="TypeScript logo" />
    </a>
  </div>
  <h1>{{ msg }}</h1>

  <div class="card">
    <span class="bloc">VALUE</span>
  </div>

  <p class="text-muted">This template was developed and supported by <a href="https://github.com/ErilovNikita/nsmp-embedded-app-vue">ErilovNikita</a></p>
</template>

<style scoped>
  .text-muted {
    color: #888;
  }
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
  .bloc {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;
  }
  .bloc:hover {
    border-color: #646cff;
  }
  .bloc:focus,
  .bloc:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
</style>
