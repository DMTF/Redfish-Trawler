// SPDX-FileCopyrightText: 2023-2024 DMTF
// SPDX-License-Identifier: BSD-3-Clause
// Copyright Notice:
// Copyright 2023-2024 DMTF. All rights reserved.
// License: BSD 3-Clause License. For full text see link: https://github.com/DMTF/Redfish-Trawler/blob/main/LICENSE.md

// import * as bootstrap from 'bootstrap/dist/js/bootstrap.bundle';

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
// import './assets/app.css';

import { createApp } from 'vue'

import { createRouter, createWebHashHistory } from 'vue-router'

import PageChassis from './components/Pages/Chassis.vue'
import PageSystem from './components/Pages/System.vue'
import PageUserManagement from './components/Pages/UserManagement.vue'
import PageManager from './components/Pages/Manager.vue'
import PageLog from './components/Pages/Log.vue'
import PageUpdate from './components/Pages/Update.vue'

const routes = [
  { path: '/Chassis', component: PageChassis, props: route => ({ service: route.query.host }),},
  { path: '/Systems', component: PageSystem, props: route => ({ service: route.query.host }),},
  { path: '/Managers', component: PageUserManagement, props: route => ({ service: route.query.host }),},
  { path: '/UserManagement', component: PageManager, props: route => ({ service: route.query.host }),},
  { path: '/Logs', component: PageLog, props: route => ({ service: route.query.host }),},
  { path: '/Update', component: PageUpdate, props: route => ({ service: route.query.host }),},
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

// Import Bootstrap and BootstrapVue CSS files (order is important)
import App from './App.vue'

const my_app = createApp(App)

my_app.config.compilerOptions.delimiters = ['${', '}$'];

my_app.use(router)

my_app.mount('#app');