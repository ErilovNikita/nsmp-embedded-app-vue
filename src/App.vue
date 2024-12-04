<script setup lang="ts">
  import Header from './components/Header.vue'

  import { IJsApi } from '@nsmp/js-api/src/lib/JsApi'
  import { inject } from 'vue'
  import { ref } from 'vue'

  const jsApi = inject('jsApi') as IJsApi
  const blocValue = ref<string>("")

  try {
    const currentUserUuid = jsApi.getCurrentUser().uuid

    jsApi.restCallAsJson(`/get/${currentUserUuid}`, {"method" : "GET"}).then(response => {
      const employeeData:any = response
      blocValue.value = `👋 Привет, ${employeeData.title}!`
      console.log(response)
      return void 0;
    }).catch(error => {
      blocValue.value = error as string
    });
    
  } catch(e) {
    blocValue.value = e as string
  }
</script>

<template>
  <Header msg="Vite + Vue + TypeScript" />

  <div class="card">
    <span class="bloc">{{ blocValue }}</span>
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
