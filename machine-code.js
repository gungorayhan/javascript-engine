const {exec} = require("child_process")

exec('node --print-code factorial.js > factorial-machine-code.txt')