const {exec} = require("child_process")
exec('node --print-bytecode factorial.js > factorial-byte-code.txt')