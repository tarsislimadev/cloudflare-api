import { EventEmitter } from 'events'

const ee = new EventEmitter()

setInterval(() => ee.emit('datetime', new Date()), 100)

const config = { datetime: 0 }

ee.addEventListener('datetime', (datetime = new Date()) => config.datetime = datetime.toLocaleString())

export default {
  async fetch(request) {
    return new Response(`datetime: ${config.datetime}`, { headers, status: 200 })
  }
}
