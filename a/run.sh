#!/bin/bash

touch ./foo.js
mkdir ../lib
touch ../lib/bar.js
npm install gamma
browserify main.js > bundle.js
