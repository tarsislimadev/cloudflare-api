#!/usr/bin/sh

username="${1}"

password="${2}"

bash ./tests/curl.sh "POST" "login" "{\"username\":\"${username}\",\"password\":\"${password}\"}"
