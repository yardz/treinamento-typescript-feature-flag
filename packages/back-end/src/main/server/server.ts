import express from 'express';
import { serviceRoutes } from './services';
import cors from 'cors';
import { createConnectionPool, applyRoutes } from './setup';
import parser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const router = express();

createConnectionPool();

//handlers
router.use(parser.json({ type: 'application/json' }));
router.use(cors({ credentials: true, origin: true }));

router.get('/', (req, res) => {
	res.send('Bem vindo a API de treinamento!');
});

applyRoutes(serviceRoutes, router);

router.enable('trust proxy');
router.listen(3001);
