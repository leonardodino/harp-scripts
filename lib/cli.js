const identity = method => method

const execute = (method, parse) => (
	method(process.argv[2])
		.then(parse)
		.then(string => console.log(string))
		.catch(error => {
			console.error(error.toString())
			process.exit(1)
		})
)

const stringify = i => (
	Array.isArray(i)
		? i.join('\n')
		: (typeof i !== 'string' ? JSON.stringify(i) : i)
)

const cli = exec => (method, parse = stringify) => exec
	? (execute(method, parse), identity(method))
	: (identity(method))

module.exports = cli
