import { CloudflareRequest, CloudflareResponse } from '@brtmvdl/backend/cloudflare'
import app from './routes'

export default {
  async fetch(request) {
    const req = new CloudflareRequest(request)
    const res = new CloudflareResponse(req)
    await req.parseProperties()
    return app.run(req, res).getResponse()
  }
}
