const SHA256 = require('crypto-js/sha256');

class Block {
    index: number;
    current_time: number;
    info: string;
    prevHash: string;
    hash: string;
    nextHash: string;
    amountOfMoney: number;
    currentMoney: number;

    constructor(index: number, current_time: number, info: string, amountOfMoney: number, currentMoney: number = 0, prevHash: string = "", nextHash: string = "") {
        this.index = index;
        this.current_time = current_time;
        this.info = info;
        this.prevHash = prevHash;
        this.nextHash = nextHash;
        this.hash = this.computeHash();
        this.amountOfMoney = amountOfMoney;
        this.currentMoney = currentMoney;
    }
    computeHash() {
        return SHA256(this.index + this.current_time + this.info + this.prevHash +  this.amountOfMoney).toString();       
    }
}


export default Block;