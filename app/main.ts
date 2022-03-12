import http from "http";
import {UsersRoutes, CommonRoutesConfig} from './routes/main';
import express from 'express';
import * as winston from 'winston';
import * as expressWinston from 'express-winston';
import cors from 'cors';
import debug from 'debug';


const routes: Array<CommonRoutesConfig> = [];

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port = 3000;
const debugLog: debug.IDebugger = debug('app');

app.use(express.json());

app.use(cors());

const loggerOptions: expressWinston.LoggerOptions = {
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
        winston.format.json(),
        winston.format.prettyPrint(),
        winston.format.colorize({ all: true })
    ),
};

if (!process.env.DEBUG) {
    loggerOptions.meta = false; 
}

app.use(expressWinston.logger(loggerOptions));

routes.push(new UsersRoutes(app));

const runningMessage = `Server is running at http://localhost:${port}`;
app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send(runningMessage);
});

server.listen(port, () => {
    routes.forEach((route: CommonRoutesConfig) => {
        debugLog(`Routes configured for ${route.getName()}`);
    });
    console.log(runningMessage);
});