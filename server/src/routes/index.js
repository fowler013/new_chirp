import { Router } from 'express'; 
import chirpsRouter from './chirps'
let router = Router();

router.use('/chirps', chirpsRouter)

export default router;