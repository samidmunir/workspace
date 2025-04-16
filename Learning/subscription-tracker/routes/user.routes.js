import { Router } from 'express';
import { getUsers, getUser } from '../controllers/user.controller.js';
import authorize from '../middlewares/auth.middleware.js';

const userRouter = Router();

userRouter.get('/', getUsers);

userRouter.get('/:id', authorize, getUser);

userRouter.post('/', (req, res) => {
    res.send('CREATE a new user.');
});

userRouter.put('/:id', (req, res) => {
    res.send(`UPDATE user with ID: ${req.params.id}`);
});

userRouter.delete('/:id', (req, res) => {
    res.send(`DELETE user with ID: ${req.params.id}`);
});

export default userRouter;