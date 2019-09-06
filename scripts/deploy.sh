#!/bin/bash

yarn
yarn build

firebase list
echo $FIREBASE_TOKEN

# firebase use default

# firebase deploy --token $FIREBASE_TOKEN
