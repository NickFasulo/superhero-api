import { Router } from 'express'
import * as controllers from '../controllers/characters.js'

const router = Router()

router.get('/', controllers.getSuperheroes)
// router.get('/:id', controllers.getSuperhero)
// router.post('/', controllers.createSuperhero)
// router.put('/:id', controllers.updateSuperhero)
// router.delete('/:id', controllers.deleteSuperhero)

export default router
