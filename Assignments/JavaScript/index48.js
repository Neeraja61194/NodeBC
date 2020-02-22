const msg = "3.14 it's a great number but 42 it's the answer to life."
const pi = parseFloat(msg)
const answerToLife = parseInt(msg.slice(28, 32))
const result = pi + answerToLife
console.log(answerToLife)
console.log(result + " is the result of adding pi and answerToLife")

