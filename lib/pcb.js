// nodejs callback style promise shortcut
module.exports = (resolve, reject) => (
	(err, result) => (
		err ? reject(err) : resolve(result)
	)
)
