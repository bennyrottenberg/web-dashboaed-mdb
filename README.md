# Ott-sec-dashbording

clone repo
cd demo_1

(delete node_modules & package-lock.json)

download nvm
nvm install 14
nvm use 14
npm i --legacy-peer-deps
npm run serve

if you got this error: Cannot find module '@babel/compat-data/corejs3-shipped-proposals'
try this: 
sudo npm update --depth 5 @babel/preset-env


for flask API

pip install flask
pip install pymongo