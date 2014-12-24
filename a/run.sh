#!/bin/bash

npm install gamma
browserify main.js > bundle.js
node bundle.js #=> 6.000000000000007
