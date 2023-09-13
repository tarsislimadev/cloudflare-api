import { Router } from '@brtmvdl/backend'
import { Logger } from '@brtmvdl/logger'

const router = new Router()
const logger = new Logger('AppLogger')

router.get('/api/namazon/products/list', async (req, res) => {
  const list = await Promise.resolve([])

  return res.setJSON({ id: Date.now(), endpoint: '/api/namazon/products/list', list })
})

router.post('/api/namazon/addresses/list', (req, res) => res.setJSON({ id: Date.now(), endpoint: '/api/namazon/addresses/list' }))

router.post('/api/namazon/payments/list', (req, res) => res.setJSON({ id: Date.now(), endpoint: '/api/namazon/payments/list' }))

router.post('/login', (req, res) => {
  logger.log('login', { req, res })

  const { email = '', username = '', password = '' } = req.json

  return res.setJSON({ email, username, password })
})

export default router
