// - Each letter from alphabet encoded with dots(.) and dashes(-). 10 stands for dot(.), 11 stands for dash(-).
// - Each encoded letter's length is 10.
// - If the length of the encoded letter is less then 10, it left padded with 0.
// - Space in string is **********. Output: String (decoded) Example: me -> m === -- === 0000001111, e === . === 0000000010 -> 00000011110000000010

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
    var space = '**********';
    // var letter = MORSE_TABLE['....']; // получаем букву
    var strSymbols = '';
    var length = expr.length;

    for (let i = 0; i < length; i += 10) {
        let j = i + 10;
        let str = expr.slice(i,j);
        let tmpStrSymbols = '';
        if (str == space) {
            strSymbols += ' ';
        }
        else {
            for (let k = 0; k < str.length; k += 2) {
                let m = k + 2;
                if (str.slice(k,m) === '00') {
                    continue
                }
                if (str.slice(k,m) === '10') {
                    tmpStrSymbols += '.';
                }
                if (str.slice(k,m) === '11') {
                    tmpStrSymbols += '-';
                }
            }
            strSymbols += MORSE_TABLE[tmpStrSymbols];
            tmpStrSymbols = '';
        }
    }
    return strSymbols
}
    


module.exports = {
    decode
}