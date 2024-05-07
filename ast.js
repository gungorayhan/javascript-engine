const fs = require("fs")
const ast = require("abstract-syntax-tree")

const factorialCode= fs.readFileSync(
    "./factorial.js"
).toString()

const factorialAst = ast.parse(
    factorialCode,
    {loc:true,ranges:true}
)

fs.writeFileSync(
    "./factorial-ast.json",
    JSON.stringify(factorialAst)
)

console.log(factorialAst)
// {
//     type: 'Program',
//     sourceType: 'module',
//     body: [
//       {
//         type: 'FunctionDeclaration',
//         id: [Object],
//         params: [Array],
//         body: [Object],
//         async: false,
//         generator: false,
//         start: 0,
//         end: 62,
//         range: [Array],
//         loc: [Object]
//       },
//       {
//         type: 'ExpressionStatement',
//         expression: [Object],
//         start: 66,
//         end: 113,
//         range: [Array],
//         loc: [Object]
//       }
//     ],
//     start: 0,
//     end: 113,
//     range: [ 0, 113 ],
//     loc: { start: { line: 1, column: 0 }, end: { line: 5, column: 47 } }