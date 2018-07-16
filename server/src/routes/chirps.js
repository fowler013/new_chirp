import { Router } from 'express';
import Table from '../table';

let router = Router();
const chirpsTable = new Table('Chirps');

router.get('/', (req, res) => {
    chirpsTable.getAll()
        .then((chirps) => {
            res.json(chirps);
        }).catch((err) => {
            res.send(err);
        });
});

router.get('/:id', (req, res) => {
    chirpsTable.getOne(req.params.id)
        .then((chirp) => {
            res.json(chirp);
        }).catch((err) => {
            res.send(err);
        });
});


router.post('/', (req, res) => {
    console.log(req.body);
    chirpsTable.insert(req.body)
        .then(() => {
            res.sendStatus(200);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
});

router.put('/:id', (req, res) => {
    console.log(req.body);
    chirpsTable.update(req.params.id, req.body)
        .then(() => {
            res.sendStatus(200);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
});


router.delete('/:id', (req, res) => {
    console.log(req.body);
    chirpsTable.delete(req.params.id)
        .then(() => {
            res.sendStatus(200);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
});

export default router;