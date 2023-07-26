# Redfish-Trawler

This is the repository containing the DMTF tool *Redfish-Trawler*.

## Steps to compile

cd redfish-trawler-frontend

npm run build

## Steps to run

python -m venv .venv

.venv/bin/activate || .venv/Scripts/activate

python -m pip install -r requirements.txt

flask --app .\redfish_trawler.py run

## TODO

Include proper steps for production

Replace "flask" command with proper web server/application

Proper Error Codes for backend

Install Vue 3 Compatible mode for Bootstrap library

Integrate modal popup for server creation

Integrate updating main view with Chassis information