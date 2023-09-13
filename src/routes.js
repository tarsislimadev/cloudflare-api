import { Router } from '@brtmvdl/backend'
import { Logger } from '@brtmvdl/logger'

import { homeWorkout } from './api/index.js'

const router = new Router()
const logger = new Logger('AppLogger')

router.get('/api/home-workout/challenges', (_, res) => {
  const list = homeWorkout.challenges().map((challenge) => ({ ...challenge, workouts: challenge.workouts.map((w) => homeWorkout.workouts().find((workout) => workout.id == w)) }))

  return res.setJSON({ list })
})

router.get('/api/home-workout/workouts', (_, res) => res.setJSON({ list: homeWorkout.workouts() }))

router.get('/api/namazon/products/list', async (_, res) => {
  const list = await Promise.resolve([])

  return res.setJSON({ id: Date.now(), endpoint: '/api/namazon/products/list', list })
})

router.post('/api/namazon/addresses/list', (_, res) => res.setJSON({ id: Date.now(), endpoint: '/api/namazon/addresses/list' }))

router.post('/api/namazon/payments/list', (_, res) => res.setJSON({ id: Date.now(), endpoint: '/api/namazon/payments/list' }))

router.post('/login', (req, res) => {
  logger.log('login', { req, res })

  const { email = '', username = '', password = '' } = req.json

  return res.setJSON({ email, username, password })
})

export default router
