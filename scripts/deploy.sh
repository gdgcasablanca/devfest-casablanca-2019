#!/bin/bash

yarn
yarn build

firebase use default

firebase deploy --token $FIREBASE_TOKEN
