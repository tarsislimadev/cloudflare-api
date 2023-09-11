#!/usr/bin/sh

method="${1}"

path="${2}"

data="${3}"

curl -sL -X "${method}" "http://127.0.0.1:8787/${path}" --data-raw "${data}" | jq
