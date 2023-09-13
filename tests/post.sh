#!/usr/bin/sh

. .env

path="${1}"

data="${2}"

curl -sL -X POST "${api}/${path}" --data-raw "${data}" | jq
