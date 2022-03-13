import express from 'express';
import Block from '../block-chain-core/block';
import BlockChainFunction from '../block-chain-core/main';
import UserFunction from '../user/main';
import User from '../user/user';
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
                res.status(200).send(BlockChainFunction.totalTransaction);
            })
            .post((req: express.Request, res: express.Response) => {
                BlockChainFunction.postNewTransaction(BlockChainFunction.totalTransaction, req.body.transactionInfo, req.body.amountOfMoney);
                res.status(200).send(req.body);
            });        

        this.app.route('/users')
            .get((req: express.Request, res: express.Response) => {
                var AllUsers = UserFunction.GetAllUser(UserFunction.allUsers);
                res.status(200).send(AllUsers);
            });

        this.app.route('/register')
            .post((req: express.Request, res: express.Response) => {
                let newUser : User = new User(req.body.userName);
                UserFunction.AddNewUser(UserFunction.allUsers, newUser);
                var AllUsers = UserFunction.GetAllUser(UserFunction.allUsers);
                res.status(200).send(AllUsers);
            });
        
        this.app.route('/transfer')
            .post((req: express.Request, res: express.Response) => {
                let userToTransfer = UserFunction.allUsers[req.body.from];
                let userReceiveTransfer = UserFunction.allUsers[req.body.to];
                let transferAmount = req.body.amount;

                userToTransfer.transferMoney(userReceiveTransfer, transferAmount);
                res.status(200).send([userToTransfer, userReceiveTransfer]);
            });

        this.app.route('/recharge-money')
            .post((req: express.Request, res: express.Response) => {
                let user = req.body.username;
                let rechargeAmount = req.body.amount;
                UserFunction.allUsers[user].updateAmountOfMoney(rechargeAmount);
                UserFunction.allUsers[user].userChain.addBlock(new Block(new Date().getTime(), "Recharge " + rechargeAmount, rechargeAmount));
                res.status(200).send(UserFunction.allUsers[user]);
            });

        return this.app;
    }
}