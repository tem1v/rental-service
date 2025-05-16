import {Router} from 'express';
import { createOffer, getAllOffers } from "../controllers/offerController.js";
import upload from '../middleware/upload.js';

const router = new Router();

router.get('/offers', getAllOffers);
router.post('/offers', upload.fields([
	{name: 'previewImage', maxCount: 1},
	{name: 'photos', maxCount: 6}
]), createOffer);


export default router;
