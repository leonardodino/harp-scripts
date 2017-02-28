#!/usr/bin/env bash
set -eo pipefail

if [ ! -z "$HS_SHORT_HELP" ]; then
	echo 'deploy project to surge.sh'
	exit 0
fi

if [ ! -z "$HS_USAGE_HELP" ]; then
	echo '{COMMAND} [path]'
	echo 'use the argument to set a custom input folder'
	exit 0
fi

if [ ! -z "$HS_VARIABLES_HELP" ]; then
	echo 'DOMAIN: set surge.sh domain'
	exit 0
fi

if [ ! -z "$HS_HIDE_HELP" ]; then
	exit 0
fi

defaultfolder='./www'
folder="${1:-$defaultfolder}"

defaultdomain="$(cat package.json | json name).surge.sh"
domain="${DOMAIN:-$defaultdomain}"

surge "$folder" "$domain"
