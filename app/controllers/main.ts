import Block from './block';
import BlockChain from './block-chain';

let blockChain = new BlockChain();

let index: number = 1;

blockChain.addBlock(new Block(index, Date.parse('12/3/2022 7:00:00 GMT+07'), "vnmc chuyển tiền - 1000k", 1000000));
blockChain.addBlock(new Block(index + 1, Date.parse('12/3/2022 9:00:00 GMT+07'), "NT rút tiền - 50k", -50000));

let totalTransaction = blockChain;

// console.log(blockChain);
// console.log('Is block chain valid:', blockChain.isValid());

// let getIndex = blockChain.blockChain.findIndex((obj => obj.index == 1));
// blockChain.blockChain[getIndex] = new Block(index, Date.parse('12/3/2022 7:00:00 GMT+07'), "NT rút tiền - 1000k", 1000000);
// console.log(blockChain);

// console.log('Is block chain valid:', blockChain.isValid());

export default totalTransaction;