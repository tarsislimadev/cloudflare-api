#!/usr/bin/sh

import { Request, Response } from '@brtmvdl/backend'

import * as netPkg from 'net'
import config from './utils/config.js'
import * as app from './routes.js'

const server = netPkg.createServer((socket) => {
  socket.on('data', (chunk) => {
    const req = new Request(chunk)
    const res = new Response(req)

    app.run(req, res).then((responseString) => socket.write(responseString))

    socket.end()
  })
})

server.listen(config.port, () => console.log(`listen on port ${config.port}`))
