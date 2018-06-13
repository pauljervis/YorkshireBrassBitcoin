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

const genesisBlock = {
  index: 0,
  minedBy: 'Genesis',
  data: 'Genesis',
  previousHash: '0',
  nonce: 52458,
  hash: '000021C1766F55BD5D413F0AC128A5D3D6B50E4F0D608B653209C4D468232C11',
};


const newBlock = {
  index: 1,
  minedBy: "Paul & Ed",
  data: "123",
  previousHash: genesisBlock.hash,
  nonce: 0,
}

let hash = hash256(blockString(newBlock));

while(! hash.startsWith("0000")) {
  newBlock.nonce++;
  hash = hash256(blockString(newBlock));
}

console.log(hash);
console.log("attempt: ", newBlock.nonce);