#!/bin/bash

LOCATION=$1
USERNAME=$2
SERVER_ADDRESS=$3

printf "sync files and remove unnecessary ...\n"
rsync -Pavh -e 'ssh -i ./.deploy_key' ./dist "$USERNAME"@"$SERVER_ADDRESS":~"$LOCATION" --delete-after

printf "\ndone, new version was released, check page in the browser!"
