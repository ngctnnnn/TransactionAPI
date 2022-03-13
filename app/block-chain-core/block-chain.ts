import Block from './block';

class BlockChain {
    blockChain : [Block]; 

    constructor() {
        this.blockChain = [this.startGenesisBlock()];
    }

    startGenesisBlock() : Block {
        return new Block(Date.now(), "Genesis block", 0);
    }

    getLatestBlock() : Block {
        return this.blockChain[this.blockChain.length - 1];
    }

    addBlock(newBlock: Block) : void {
        newBlock.prevHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.computeHash();
        this.getLatestBlock().nextHash = newBlock.hash;
        newBlock.index = this.getLatestBlock().index + 1;
        newBlock.currentMoney =  this.getLatestBlock().currentMoney + newBlock.amountOfMoney;
        this.blockChain.push(newBlock);
    }
    
    isValid(debug: boolean = false): boolean {

        for (let i = 1; i < this.blockChain.length - 1; i++) {
            const prevBlock = this.blockChain[i - 1];
            const currentBlock = this.blockChain[i];
            const nextBlock = this.blockChain[i + 1];

            if (debug === true) {

                if (prevBlock.hash !== currentBlock.prevHash) {
                    console.log('wrong previous hash');
                    return false;
                }
    
                if (currentBlock.hash !== currentBlock.computeHash()) {
                    console.log('wrong current hash');
                    return false;
                }
    
                if (nextBlock.hash !== currentBlock.nextHash) {
                    console.log('wrong next hash');
                    return false;
                }
            }

        }
        return true;
    }

}

export default BlockChain;