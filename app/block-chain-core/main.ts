import Block from "./block";
import BlockChain from "./block-chain";

let totalTransaction = new BlockChain();

let index: number = 1;

function postNewTransaction(
    currentChain: BlockChain,
    transactionInfo: string,
    amountOfMoney: number
): void {
    let today = new Date().getTime();
    currentChain.addBlock(new Block(today, transactionInfo, amountOfMoney));
}

const BlockChainFunction = {
    totalTransaction,
    postNewTransaction,
};

export default BlockChainFunction;
