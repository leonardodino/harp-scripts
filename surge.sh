#!/usr/bin/env bash
set -eo pipefail

if [ ! -z "$HS_HELP" ]; then
	[ ! -z "$HS_SHORT_HELP" ] && printf '%s\n' \
		'deploy project to surge.sh';

	[ ! -z "$HS_USAGE_HELP" ] && printf '%s\n' '{COMMAND} [path]' \
		'use the argument to set a custom input folder';

	[ ! -z "$HS_VARIABLES_HELP" ] && printf '%s\n' \
		'DOMAIN: set surge.sh domain';
exit 0; fi;

defaultfolder='./www'
folder="${1:-$defaultfolder}"

fallbackdomain="$(cat package.json | json name).surge.sh"
homepage="$(cat package.json | json homepage)"
domain="${DOMAIN:-${homepage:-$fallbackdomain}}"

surge "$folder" "$domain"
