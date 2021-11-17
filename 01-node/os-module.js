const os = require('os');

const user = os.userInfo()
console.log(user)

// uptime

console.log(`The system uptime is ${os.uptime()} secs`)

const currentOS={
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS)
console.log(os.platform())