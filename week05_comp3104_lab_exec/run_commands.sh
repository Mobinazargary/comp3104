#!/bin/bash

cd Comp3104
nano travis.yml
cd Comp3104
ls
cd week05_comp3104_lab_exec
git checkout dep-inclusions
npm install gh-pages --save-dev
nano package.json
mkdir -p .github/workflows
touch .github/workflows/ci.yml
nano ci.yml
git add .
git commit -m "Set up GitHub Actions for deployment"
git push origin dep-inclusions
npm run deploy
nano package.json
git add package.json
git commit -m "Remove extra comma in homepage URL"
git push origin dep-inclusions
npm run deploy
npm start

