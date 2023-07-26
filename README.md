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