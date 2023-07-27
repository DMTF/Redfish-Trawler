import { createApp } from 'vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import App from './App.vue'

const my_app = createApp(App)

my_app.config.compilerOptions.delimiters = ['${', '}$'];

my_app.mount('#app')
