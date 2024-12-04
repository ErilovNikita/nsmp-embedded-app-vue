<script setup lang="ts">
  import Header from './components/Header.vue';
</script>

<template>
  <Header msg="Vite + Vue + TypeScript" />

  <div class="card">
    <span class="bloc">dfbgd</span>
  </div>

  <p class="text-muted">This template was developed and supported by <a href="https://github.com/ErilovNikita/nsmp-embedded-app-vue">ErilovNikita</a></p>
</template>

<style scoped>
  .text-muted {
    color: #888;
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
