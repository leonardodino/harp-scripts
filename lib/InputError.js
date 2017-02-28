module.exports = class InputError extends Error {
	constructor(message){
		super(message)
		Object.defineProperties(this, {
			name: {value: this.constructor.name},
			stack: {value: null}
		})
	}
	toString(){
		const prefix = `${this.constructor.name}: `
		return prefix + this.message.split('\n').join(`\n${prefix}`)
	}
}
