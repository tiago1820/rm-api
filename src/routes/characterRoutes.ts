import express from 'express';
import characterController from '../controllers/characterController';
const router = express.Router();

router.get('/', characterController.getAllCharacters);

export default router;