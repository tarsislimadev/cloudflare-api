import { CloudflareRequest, CloudflareResponse } from '@brtmvdl/backend/cloudflare'
import app from './routes.js'

export default {
  async fetch(request) {
    const req = new CloudflareRequest(request)
    const res = new CloudflareResponse(req)
    await req.parseProperties()

    const response = await app.run(req, res)
    return response.getResponse()
  }
}
