import { createApp } from 'vue'
import App from './App.vue'
import '@iframe-resizer/child'
import { initializeJsApi, InitVariable} from '@nsmp/js-api'

import './style.css'

const mock = {}
const env = new InitVariable(
	import.meta.env.MODE,
	import.meta.env.VITE_ACCESS_KEY,
	import.meta.env.VITE_APP_URL,
	import.meta.env.VITE_APP_CODE,
	import.meta.env.VITE_REST_PATH,
	import.meta.env.VITE_SUBJECT_UUID,
	import.meta.env.VITE_USER_LOGIN,
	import.meta.env.VITE_USER_UUID
)

initializeJsApi( mock, env ).then((declorateJsApi: any) => {
    const app = createApp(App)
	app.provide("jsApi", declorateJsApi)
	app.mount('#app')
}) 
.catch((e:string) => {
    console.error(e)
})
