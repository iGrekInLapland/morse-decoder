const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
     let res = [];
  let letters = [];
  let pos = 0;

  while(pos < expr.length) {
    letters.push(expr.substring(pos, pos = pos + 10))
  }

  for (let i = 0; i < letters.length; i++) {
    let letter = [];
    pos = 0;

    if(letters[i]=='**********'){
      res.push(' ');
      continue;
    }

    while(pos < letters[i].length) {
    letter.push(letters[i].substring(pos, pos = pos + 2))
    }

    letter = letter.filter(i => i!=='00').map(i => (i == '10')? i='.': i='-').join('');
    res.push(MORSE_TABLE[letter])
  }
  return res.join('');
}

module.exports = {
    decode
}
