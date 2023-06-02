import express from 'express';
import { getReviews, getReview, createReview, updateReview, deleteReview } from '../controller/reviews.mjs';
import { authenticate } from '../middleware/authenticate.mjs';

const router = express.Router();

router.get('/:id', authenticate, async (req, res) => {
    const { id } = req.params;
    const result = await getReview(id);
    res.status(200).json(result);
})

router.get('/', authenticate, async (req, res) => {
    const results = await getReviews();
    res.status(200).json(results);
});

router.post('/', authenticate, async (req, res) => {
    const result = await createReview(req.body);
    res.status(200).json(result);
});

router.put('/:id', authenticate, async (req, res) => {
    const { id } = req.params;
    const result = await updateReview(id, req.body);
    res.status(200).json(result);
});

router.delete('/:id', authenticate, async (req, res) => {
    const { id } = req.params;
    const result = await deleteReview(id);
    res.status(200).json(result);
});

export default router;