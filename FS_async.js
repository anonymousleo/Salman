const { Console } = require('console')
const { readFile, writeFile } = require('fs')

console.log('Start')
readFile('./contents/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return;
    }
    const first = result;
    readFile('./contents/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return;
        }
        const second = result;
        writeFile('./contents/third.txt', `Result = ${first} , ${second}`, (err, result) => {
            if (err) {
                console.log(err)
                return;
            }
            console.log('Task Done')
        })
    })
})
console.log('Starting Next Task')