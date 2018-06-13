const sha256 = require('sha-256-js');

function hash256(string) {
  return sha256(string)
    .toUpperCase();
};

function hashBlock({
                     index,
                     minedBy,
                     data,
                     nonce,
                     previousHash,
                   }) {
  return `${index} ${minedBy} ${data} ${previousHash} ${nonce}`;
}

const block = {
  index: 0,
  minedBy: 'Genesis',
  data: 'Genesis',
  previousHash: '0',
  nonce: 52458,
  hash: '000021C1766F55BD5D413F0AC128A5D3D6B50E4F0D608B653209C4D468232C11',
};
const hash = hashBlock(block);
console.log(hash);

console.log(hash256(hash));
