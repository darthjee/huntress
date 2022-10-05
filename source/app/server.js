const http = require('http')
const requestHandler = require('./request_handler')

const server = http.createServer(requestHandler)
const port = 80

server.listen(port)
console.info('------------------------------------------------')
console.info('listening at port ' + port)
console.info('------------------------------------------------')
