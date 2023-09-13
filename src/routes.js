import { Router } from '@brtmvdl/backend'
import { Logger } from '@brtmvdl/logger'
import { Database } from '@brtmvdl/database'

const router = new Router()
const logger = new Logger('AppLogger')

const db = new Database(process.env.DATABASE_URL)

db.type(Database.POSTGRESQL)

router.get('/api/namazon/products/list', (req, res) => res.setJSON({ id: Date.now(), endpoint: '/api/namazon/products/list' }))

router.post('/api/namazon/addresses/list', (req, res) => res.setJSON({ id: Date.now(), endpoint: '/api/namazon/addresses/list' }))

router.post('/api/namazon/payments/list', (req, res) => res.setJSON({ id: Date.now(), endpoint: '/api/namazon/payments/list' }))

router.post('/login', (req, res) => {
  logger.log('login', { req, res })

  const { email = '', username = '', password = '' } = req.json

  return res.setJSON({ email, username, password })
})

export default router
