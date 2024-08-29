# Redfish-Trawler

Copyright 2023-2024 DMTF.  All rights reserved.

## About

Redfish Trawler is a browser-based client for interacting with Redfish services.

## Prerequisites

Redfish Trawler requires Python3 and npm on the user's system.
Additionally, the following Python packages are required:

* flask: https://pypi.org/project/Flask
* redfish: https://pypi.org/project/redfish

You may install the external modules by running:

`pip install -r requirements.txt`

## Building

[npm](https://www.npmjs.com/) is required if making changes to Vue files or anything else in the `redfish-trawler-frontend` directory.

```
cd redfish-trawler-frontend
npm install
npm run build
```

## Running

`flask --app redfish_trawler.py run`

Open a browser and go to http://127.0.0.1:5000.

## Steps to commit

```
git add static
git add <other files>
```
