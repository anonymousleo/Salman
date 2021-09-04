const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./contents/first.txt', 'utf8')
const second = readFileSync('./contents/second.txt', 'utf8')

console.log(first,second)

writeFileSync(
    './contents/result.txt',
    `\n The Result is: ${first} , ${second}`,
    {flag: 'a'}
)