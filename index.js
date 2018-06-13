var sha256 = require('sha-256-js');

console.log(
  sha256('abc')
);

const block = {
  index: 0,
  minedBy: 'Genesis',
  data: 'Genesis',
  previousHash: '0',
  nonce: 52458,
  hash: '000021C1766F55BD5D413F0AC128A5D3D6B50E4F0D608B653209C4D468232C11',
};

console.log(hashBlock(block));

function hashBlock({
                     index,
                     minedBy,
                     data,
                     nonce,
                   }) {
  return `${index} ${data} ${minedBy} ${nonce}`;
}