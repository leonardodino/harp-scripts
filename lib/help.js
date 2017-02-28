const identity = method => method

const output = message => process.exit(
	message && console.log(message),
	message ? 0 : 1
)

const concat = arr => (Array.isArray(arr) ? arr : [arr]).join('\n')

const parse = obj => obj && obj.keys(obj).map(key => (
	`${key.toUpperCase()}: ${obj[key]}`
)).join('\n')

const execute = ({short, usage, variables, hide}) => {
	const {env} = process
	env['HS_SHORT_HELP'] && output(short)
	env['HS_USAGE_HELP'] && output(concat(usage) || '{COMMAND}')
	env['HS_VARIABLES_HELP'] && output(parse(variables))
	env['HS_HIDE_HELP'] && output(''+(hide || false))
}

const help = exec => (description = {}) => exec
	? (execute(description), identity(description))
	: identity(description)

module.exports = help
