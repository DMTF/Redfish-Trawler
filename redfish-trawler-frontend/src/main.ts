// SPDX-FileCopyrightText: 2023-2024 DMTF
// SPDX-License-Identifier: BSD-3-Clause
// Copyright Notice:
// Copyright 2023-2024 DMTF. All rights reserved.
// License: BSD 3-Clause License. For full text see link: https://github.com/DMTF/Redfish-Trawler/blob/main/LICENSE.md

import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
