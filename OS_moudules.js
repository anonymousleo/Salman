const os = require('os');

const cpus = os.cpus()
console.log(cpus)

const user = os.userInfo()
console.log(user)

console.log(os.uptime())

const currentOS = {

    name : os.type(),
    totalMem : os.totalmem(),
    freeMemory : os.freemem(),
    release : os.release(),
}

console.log(currentOS)