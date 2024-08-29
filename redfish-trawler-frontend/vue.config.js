// SPDX-FileCopyrightText: 2023-2024 DMTF
// SPDX-License-Identifier: BSD-3-Clause
// Copyright Notice:
// Copyright 2023-2024 DMTF. All rights reserved.
// License: BSD 3-Clause License. For full text see link: https://github.com/DMTF/Redfish-Trawler/blob/main/LICENSE.md

const { defineConfig } = require('@vue/cli-service')
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: path.resolve(__dirname, "../templates/compiled"),
  assetsDir: "../../static",
  publicPath: ''
})
