const sha256 = require('crypto-js/sha256');
class User { 
    userID: string;
    userName: string;
    amountOfMoney: number;
    
    constructor(userName: string, userID: string = "", amountOfMoney: number = 0) {
        this.userName = userName;
        this.userID = sha256(this.userName).toString();
        this.amountOfMoney = amountOfMoney;
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

    updateAmountOfMoney(updateAmount: number) : void {
        this.amountOfMoney += updateAmount;
    }

    transferMoney(transferedUser: User, transferedAmount: number) {
        transferedUser.updateAmountOfMoney(transferedAmount);
        this.updateAmountOfMoney(-1 * transferedAmount);
    }
}

export default User;