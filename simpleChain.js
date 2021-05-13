// SHA256 with Crypto-js

const SHA256 = require('crypto-js/sha256');

// Block Class

class Block {
  constructor(data){
    this.height = '';
    this.timeStamp = '';
    this.data = data;
    this.previousHash = '0x';
    this.hash = '';
  }
}

class Blockchain{
    constructor(){
      // new chain array
      this.chain = [];
      // add first genesis block
      this.addBlock(this.createGenesisBlock());
   }

  createGenesisBlock(){
    return new Block("First block in the chain - Genesis block");
  }

// addBlock method
  addBlock(newBlock){
    newBlock.height = this.chain.length;
    newBlock.time = new Date().getTime().toString().slice(0,-3);
    if (this.chain.length>0) {
      // previous block hash
      newBlock.previousHash = this.chain[this.chain.length-1].hash;
    }
    // SHA256 requires a string of data
    newBlock.hash = SHA256(JSON.stringify(newBlock)).toString();
    // add block to chain
    this.chain.push(newBlock);
  }
}
