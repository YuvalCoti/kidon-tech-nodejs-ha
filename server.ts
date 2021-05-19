import express, { NextFunction } from 'express';
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
import {CrappyService} from './crappy.service';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser());

// Set up home route
app.get('/:id', async (req, res, next: NextFunction) => {
    try {
        const {id} = req.params;
        const crappyService = new CrappyService();
        res.status(200).json(await crappyService.getBalance(Number(id)));
    } catch(error) {
        res.status(400).json({message: error.message})
    }

})

app.post('/deposit', async (req, res, next: NextFunction) => {
    try {
        const {id, amount} = req.body;
        const crappyService = new CrappyService();
        res.status(200).json(await crappyService.deposit(Number(id), Number(amount)));
    } catch(error) {
        res.status(400).json({message: error.message})
    }

})

app.post('/withdrawal', async (req, res, next: NextFunction) => {
    try {
        const {id, amount} = req.body;
        const crappyService = new CrappyService();
        res.status(200).json(await crappyService.withdrawal(Number(id), Number(amount)));
    } catch(error) {
        res.status(400).json({message: error.message})
    }

})

app.delete('/:id', async (req, res, next: NextFunction) => {
    try {
        const {id} = req.params;
        const crappyService = new CrappyService();
        res.status(200).json(await crappyService.deleteBalance(Number(id)));
    } catch(error) {
        res.status(400).json({message: error.message})
    }

})


app.listen(port, () => {
  console.log(`Success! Your application is running on port ${port}.`);
});