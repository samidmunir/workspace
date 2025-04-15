import { Router } from 'express';

const userRouter = Router();

userRouter.get('/', (req, res) => {
    res.send('GET all users.');
});

userRouter.get('/:id', (req, res) => {
    res.send(`GET user with ID: ${req.params.id}`);
});

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