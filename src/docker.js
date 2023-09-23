import netPkg from 'net'

const server = netPkg.createServer((socket) => {})

server.listen(80, () => console.log('listening on port 80'))
