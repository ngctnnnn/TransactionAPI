import express from 'express';
import exportFunction from '../block-chain-core/main';
// import totalTransaction from '../block-chain-core/main';
// import postNewTransaction from '../block-chain-core/main';


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
        this.app.route('/transaction')
        .get((req: express.Request, res: express.Response) => {
            res.status(200).send(exportFunction.totalTransaction);
        })
        .post((req: express.Request, res: express.Response) => {
            exportFunction.postNewTransaction(exportFunction.totalTransaction, req.body.transactionInfo, req.body.amountOfMoney);
            res.status(200).send(req.body);
        });        

        return this.app;
    }
}