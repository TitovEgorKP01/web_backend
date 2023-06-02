import express from 'express';
import { getUser, getUsers, createUser, deleteUser, updateUser } from '../controller/users.mjs';
import { authenticate } from '../middleware/authenticate.mjs';

const router = express.Router();

// getUser
router.get('/:name', authenticate, async (req, res) => {
    const { name } = req.params;
    const result = await getUser(name);
    res.status(200).json(result);
})

// getAllUser
router.get('/', async (req, res) => {
    const results = await getUsers();
    res.status(200).json(results);
});

// saveUser
router.post('/', async (req, res) => {
    const result = await createUser(req.body);
    res.status(200).json(result);
});

router.put('/:id', authenticate, async (req, res) => {
    const { id } = req.params;
    const result = await updateUser(id, req.body);
    res.status(200).json(result);
});

router.delete('/:id', authenticate, async (req, res) => {
    const { id } = req.params;
    const result = await deleteUser(id);
    res.status(200).json(result);
});

export default router;
