import express from "express";
import * as dotenv from 'dotenv';
import sequelize from "./config/database.js";
import cors from 'cors';
import {router} from "./routes/index.js";
import ErrorHandlingMiddleware from "./middleware/ErrorHandlingMiddleware.js";
import { fileURLToPath } from 'url';
import path from "path";


dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use('/static', express.static(path.resolve(__dirname, 'static')));

app.use('/', router)

app.use(ErrorHandlingMiddleware);

const start = async () =>{
	try {
		await sequelize.authenticate();
		await sequelize.sync();
		app.listen(PORT, () => console.log(`Сервер запущен на порте ${PORT}`));
	} catch (e) {
		console.log(e);
	}
};

start();

