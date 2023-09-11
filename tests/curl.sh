#!/usr/bin/sh

# api="https://api.br-tmvdl.workers.dev"

api="http://127.0.0.1:8787"

method="${1}"

path="${2}"

data="${3}"

curl -sL -X "${method}" "${api}/${path}" --data-raw "${data}" | jq
