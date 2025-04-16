import { Router } from 'express';
import authorize from '../middlewares/auth.middleware.js';
import { createSubscription, getUserSubscriptions } from '../controllers/subscription.controller.js';

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => {
    res.send('GET all subscriptions.');
});

subscriptionRouter.get('/:id', (req, res) => {
    res.send(`GET subscription with ID: ${req.params.id}`);
});

subscriptionRouter.post('/', authorize, createSubscription);

subscriptionRouter.put('/:id', (req, res) => {
    res.send(`UPDATE subscription with ID: ${req.params.id}`);
});

subscriptionRouter.delete('/:id', (req, res) => {
    res.send(`DELETE subscription with ID: ${req.params.id}`);
});

subscriptionRouter.get('/user/:id', authorize, getUserSubscriptions);

subscriptionRouter.put('/:id/cancel', (req, res) => {
    res.send(`CANCEL subscription with ID: ${req.params.id}`);
});

subscriptionRouter.get('/upcoming-renewals', (req, res) => {
    res.send('GET all upcoming renewals.');
});

export default subscriptionRouter;