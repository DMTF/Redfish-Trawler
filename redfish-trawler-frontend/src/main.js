// SPDX-FileCopyrightText: 2023-2024 DMTF
// SPDX-License-Identifier: BSD-3-Clause
// Copyright Notice:
// Copyright 2023-2024 DMTF. All rights reserved.
// License: BSD 3-Clause License. For full text see link: https://github.com/DMTF/Redfish-Trawler/blob/main/LICENSE.md

import { createApp } from 'vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import App from './App.vue'

const my_app = createApp(App)

my_app.config.compilerOptions.delimiters = ['${', '}$'];

my_app.mount('#app')
