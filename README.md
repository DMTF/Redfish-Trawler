# Redfish-Trawler

Copyright 2023-2024 DMTF.  All rights reserved.

## About

Redfish Trawler is a browser-based client for interacting with Redfish services.

## Prerequisites

Redfish Trawler requires Python3 and npm on the user's system.
Additionally, the following Python packages are required:

* flask: https://pypi.org/project/Flask
* flask-session: https://pypi.org/project/Flask-Session
* pyopenssl: https://pypi.org/project/pyopenssl
* redfish: https://pypi.org/project/redfish

You may install the external modules by running:

`pip install -r requirements.txt`

## Building

[npm](https://www.npmjs.com/) is required if making changes to Vue files or anything else in the `redfish-trawler-frontend` directory.

Building may be done with the following commands

For Windows systems:

```
./build.bat
```

For Linux systems:

```
./build.sh
```

## Running

For Windows systems:

```
./run.bat
```

For Linux systems:

```
./run.sh
```

## Steps to commit

```
git add templates/**
git add <other files>
```
