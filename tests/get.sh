#!/usr/bin/sh

. .env

path="${1}"

curl -sL "${API_URL}/${path}" | jq
