#!/usr/bin/env bash

yarn run stage
rsync -avz dist/ /Volumes/Cisco/sdwan-landing-page/
