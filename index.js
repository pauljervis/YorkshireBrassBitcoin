const sha256 = require('sha-256-js');

function hash256(string) {
  return sha256(string)
    .toUpperCase();
};

function blockString({
                       index,
                       minedBy,
                       data,
                       nonce,
                       previousHash,
                     }) {
  return `${index} ${minedBy} ${data} ${previousHash} ${nonce}`;
}

function parseBlock(blockString) {
  if(blockString) {
    let i = 2;
    parts = blockString.split(' ');

    return {
      index: parts[i++],
      minedBy: parts[i++],
      data: parts[i++],
      previousHash: parts[i++],
      nonce: parts[i++],
      hash: parts[i++],
    };
  }
}

const previousBlock = parseBlock(process.argv) || {
  index: 0,
    minedBy:'Genesis',
    data:'Genesis',
    previousHash:'0',
    nonce:52458,
    hash:'000021C1766F55BD5D413F0AC128A5D3D6B50E4F0D608B653209C4D468232C11',
};


const newBlock = {
  index: 1,
  minedBy: 'Paul&Ed',
  data: '123',
  previousHash: previousBlock.hash,
  nonce: 0,
};

let hash = hash256(blockString(newBlock));

while(!hash.startsWith('0000')) {
  newBlock.nonce++;
  hash = hash256(blockString(newBlock));
}

console.log(hash);
console.log('attempt: ', newBlock.nonce);