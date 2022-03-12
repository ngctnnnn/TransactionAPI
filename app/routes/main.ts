import express from 'express';
import totalTransaction from '../controllers/main';


export abstract class CommonRoutesConfig {
    app: express.Application;
    name: string;

    constructor(app: express.Application, name: string) {
        this.app = app;
        this.name = name;
        this.configureRoutes();
    }
    getName() {
        return this.name;
    }
    abstract configureRoutes(): express.Application;
}

export class UsersRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'UsersRoutes');
    }

    configureRoutes() {
        this.app.route('/users')
        .get((req: express.Request, res: express.Response) => {
            res.status(200).send(totalTransaction);
        })
        .post((req: express.Request, res: express.Response) => {
            res.status(200).send(`Post to users`);
        });
        return this.app;
    }
}