import { Logger } from '../logger/index.js'

export class CloudflareRequest {
  logger = new Logger('CloudflareRequest')

  req = null

  method = null
  path = ''
  queries = {}
  headers = {}
  body = ''
  json = {}

  constructor(req) {
    this.req = req
    //
    this.method = this.parseMethod(req)
    this.path = this.parsePath(req)
    this.queries = this.parseQueries(req)
    this.headers = this.parseHeaders(req)
    this.body = this.parseBody(req)
    this.json = this.parseJson(req)
  }

  parseMethod(req) {
    this.logger.log('parseMethod')
    return req.method
  }

  parsePath(req) {
    this.logger.log('parsePath')
    return req.url
  }

  parseQueries(req) {
    this.logger.log('parseQueries')
    return {}
  }

  parseHeaders(req) {
    this.logger.log('parseHeaders')
    Object.keys(req.headers).map((key) => console.log({ key }))
    return req.headers
  }

  parseBody(req) {
    this.logger.log('parseBody')
    return req.body
  }

  parseJson(req) {
    this.logger.log('parseJson')

    const body = req.body.toString()

    try {
      return JSON.parse(body)
    } catch (e) {
      console.error(e, body)
    }

    return {}
  }
}
