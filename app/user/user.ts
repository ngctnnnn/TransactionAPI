const sha256 = require('crypto-js/sha256');
import { BlockList } from "net";
import Block from "../block-chain-core/block";
import BlockChain from "../block-chain-core/block-chain";

class User { 
    userID: string;
    userName: string;
    amountOfMoney: number;
    userChain: BlockChain;

    constructor(userName: string, userID: string = "", amountOfMoney: number = 0) {
        this.userName = userName;
        this.userID = sha256(this.userName).toString();
        this.amountOfMoney = amountOfMoney;
        this.userChain = new BlockChain;
    }

    getUserID() : string {
        return this.userID;
    }

    getUserName(): string {
        return this.userName;
    }

    getAmountOfMoney(): number {
        return this.amountOfMoney;
    }

    getUserChain() : BlockChain {
        return this.userChain;
    }

    updateAmountOfMoney(updateAmount: number) : void {
        this.amountOfMoney += updateAmount;
    }

    transferMoney(transferedUser: User, transferedAmount: number) {
        transferedUser.updateAmountOfMoney(transferedAmount);
        this.updateAmountOfMoney(-1 * transferedAmount);

        transferedUser.userChain.addBlock(new Block(new Date().getTime(), transferedUser.userName + " received " + transferedAmount + " from " + this.userName, transferedAmount));
        this.userChain.addBlock(new Block(new Date().getTime(), this.userName + " transfered " + transferedAmount + " to " + transferedUser.userName, -1 * transferedAmount));
    }
}

export default User;