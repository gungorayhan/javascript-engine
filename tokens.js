const fs = require("fs")
const jsTokens = require("js-tokens")
const path = require("path")

const factorialCode = fs.readFileSync('./factorial.js').toString()

const factorialTokens = Array.from(
    jsTokens(factorialCode)
);

fs.writeFileSync(
    './factorial-tokens.json',
    JSON.stringify(factorialTokens)
)

console.log(factorialTokens)
// [
//     { type: 'IdentifierName', value: 'function' },
//     { type: 'WhiteSpace', value: ' ' },
//     { type: 'IdentifierName', value: 'factorial' },
//     { type: 'Punctuator', value: '(' },
//     { type: 'IdentifierName', value: 'n' },
//     { type: 'Punctuator', value: ')' },
//     { type: 'Punctuator', value: '{' },
//     { type: 'LineTerminatorSequence', value: '\r\n' },
//     { type: 'WhiteSpace', value: '    ' },
//     { type: 'IdentifierName', value: 'return' },
//     { type: 'WhiteSpace', value: ' ' },
//     { type: 'IdentifierName', value: 'n' },
//     { type: 'Punctuator', value: '*' },
//     { type: 'Punctuator', value: '(' },
//     { type: 'IdentifierName', value: 'n' },
//     { type: 'Punctuator', value: '<' },
//     { type: 'NumericLiteral', value: '2' },
//     { type: 'Punctuator', value: '?' },
//     { type: 'NumericLiteral', value: '1' },
//     { type: 'Punctuator', value: ':' },
//     { type: 'IdentifierName', value: 'factorial' },
//     { type: 'Punctuator', value: '(' },
//     { type: 'IdentifierName', value: 'n' },
//     { type: 'Punctuator', value: '-' },
//     { type: 'NumericLiteral', value: '1' },
//     { type: 'Punctuator', value: ')' },
//     { type: 'Punctuator', value: ')' },
//     { type: 'LineTerminatorSequence', value: '\r\n' },
//     { type: 'Punctuator', value: '}' },
//     { type: 'LineTerminatorSequence', value: '\r\n' },
//     { type: 'LineTerminatorSequence', value: '\r\n' },
//     { type: 'IdentifierName', value: 'console' },
//     { type: 'Punctuator', value: '.' },
//     { type: 'IdentifierName', value: 'log' },
//     { type: 'Punctuator', value: '(' },
//     {
//       type: 'NoSubstitutionTemplate',
//       value: '`Factorial output:`',
//       closed: true
//     },
//     { type: 'Punctuator', value: ',' },
//     { type: 'WhiteSpace', value: ' ' },
//     { type: 'IdentifierName', value: 'factorial' },
//     { type: 'Punctuator', value: '(' },
//     { type: 'NumericLiteral', value: '7' },
//     { type: 'Punctuator', value: ')' },
//     { type: 'WhiteSpace', value: ' ' },
//     { type: 'Punctuator', value: ')' }