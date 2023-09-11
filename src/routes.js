import { Router } from '@brtmvdl/backend'
import { Logger } from '@brtmvdl/logger'

const router = new Router()
const logger = new Logger('AppLogger')

// inputs e-mail address, outputs login link by e-mail box
router.post('/login', (req, res) => {
  logger.log('login', { req, res })

  const id = Date.now()
  return res.setJSON({ id })
})

// input login id, outputs job creation page
router.post('/publish/:id', (req, res) => {
  logger.log('publish', { req, res })

  const id = ''
  return res.renderHTML('./public/publish.html', { id })
})

// outputs jobs list
router.post('/jobs', (res, req) => {
  logger.log('jobs', { req, res })

  const list = []
  return res.setJSON({ list })
})

// outputs a job post
router.post('/save', (res, req) => {
  logger.log('save', { req, res })

  const id = []
  return res.setJSON({ id })
})

export default router
