import { Logger } from '../logger/index.js'

export class CloudflareResponse {
  logger = new Logger('CloudflareResponse')

  req = null

  status = 200
  type = 'text'

  constructor(req) {
    this.req = req
  }

  setJSON() {
    this.logger.log('setJSON')

    this.type = 'json'
  }

  setText() {
    this.logger.log('setText')

    this.type = 'text'
  }

  getResponseString() {
    this.logger.log('getResponseString')

    switch (this.type) {
      case 'html': return 'null' // FIXME
      case 'text': return this.body
      case 'json': return JSON.stringify(this.body, null, 4)
    }

    return null
  }

  getContentType() {
    this.logger.log('getContentType')

    if (this.type === 'json') {
      return 'application/json'
    }

    return 'text/html'
  }

  getResponseHeaders() {
    this.logger.log('getResponseHeaders')

    return {
      'content-type': this.getContentType(),
    }
  }

  getResponse() {
    this.logger.log('getResponse')

    return new Response(
      this.getResponseString(),
      {
        headers: this.getResponseHeaders(),
      }
    )
  }
}
