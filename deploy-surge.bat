@echo off
echo  Deploying to Surge.sh...

echo  Building project...
call npm run build

echo  Deploying to surge...
cd build
call surge --domain edutransform-medical.surge.sh

echo  Your site is live at: https://edutransform-medical.surge.sh
pause

