import { Router } from './libs/router/index.js'
import { Logger } from './libs/logger/index.js'

const router = new Router()
const logger = new Logger('AppLogger')

// inputs e-mail address, outputs login link by e-mail box
router.post('/api/login', (req, res) => {
  logger.log('login', { req, res })

  const id = ''
  return res.setJSON({ id })
})

// input login id, outputs job creation page
router.post('/api/publish/:id', (req, res) => {
  logger.log('publish', { req, res })

  const id = ''
  return res.renderHTML('./public/publish.html', { id })
})

// outputs jobs list
router.post('/api/jobs', (res, req) => {
  logger.log('jobs', { req, res })

  const list = []
  return res.setJSON({ list })
})

// outputs a job post
router.post('/api/save', (res, req) => {
  logger.log('save', { req, res })

  const id = []
  return res.setJSON({ id })
})

// outputs error 404 page
router.all('*', (res, req) => {
  logger.log('error', { req, res })

  const id = []
  return res.setJSON({ id })
})

export default router
