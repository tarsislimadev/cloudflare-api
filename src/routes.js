import { Router } from '@brtmvdl/backend'
import { Logger } from '@brtmvdl/logger'

const router = new Router()
const logger = new Logger('AppLogger')

router.post('/login', (req, res) => {
  logger.log('login', { req, res })

  const { email = '', username = '', password = '' } = req.json

  return res.setJSON({ email, username, password })
})

export default router
