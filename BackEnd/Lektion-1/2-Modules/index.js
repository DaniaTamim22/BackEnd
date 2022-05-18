// import hej from user; funker inte direkt , behöver använda commen JS istället

const hej = require('./user')

console.log(hej)


const { names, ages } = require('./module')
const { age } = require('./user')

console.log(names)
console.log(ages)