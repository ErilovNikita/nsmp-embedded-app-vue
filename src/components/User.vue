<script setup lang="ts">
  import { IJsApi } from '@nsmp/js-api/src/lib/JsApi'
  import { inject } from 'vue'
  import { ref } from 'vue'

  const jsApi = inject('jsApi') as IJsApi
  const userTitle = ref<string>("")

  try {
    const currentUserUuid = jsApi.getCurrentUser().uuid

    jsApi.restCallAsJson(`/get/${currentUserUuid}`, {"method" : "GET"}).then(response => {
      const employeeData:any = response
      userTitle.value = `👋 Привет, ${employeeData.title}!`
      console.log(response)
      return void 0;
    }).catch(error => {
      userTitle.value = error as string
    });
    
  } catch(e) {
    userTitle.value = e as string
  }
</script>

<template>
  <div class="card">
    <span class="bloc">{{ userTitle }}</span>
  </div>
</template>

<style scoped>
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
