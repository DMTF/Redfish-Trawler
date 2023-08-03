# Redfish-Trawler

This is the repository containing the DMTF tool *Redfish-Trawler*.

## Steps to compile

Ensure your platform has `npm` installed into your system.

cd redfish-trawler-frontend

npm install

npm run build

## Steps to run

python -m venv .venv

.venv/bin/activate || .venv/Scripts/activate

python -m pip install -r requirements.txt

flask --app .\redfish_trawler.py run

## Steps to commit

git add ./static/

## TODO

Include proper steps for production (normalize JS name outputs)

Replace "flask" command with proper web server/application

Proper Error Codes for backend

Use Vue validation for properties