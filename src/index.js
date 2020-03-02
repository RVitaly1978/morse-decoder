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
    let binLetter = expr;
    let binLetter10 = "";
    let binLetter2 = "";
    let OneLetterMorse = "";
    let decodeLetter = "";
    
    while (binLetter.length !== 0) {
        binLetter10 = binLetter.substr(0, 10);

        if (binLetter10 == "**********") {
            decodeLetter += " ";
        }   else {
            while (binLetter10.length !== 0) {
                binLetter2 = binLetter10.substr(0, 2);

                if (binLetter2 == "10") {
                    OneLetterMorse += ".";
                }   else if (binLetter2 == "11") {
                    OneLetterMorse += "-";
                }   else {
                    OneLetterMorse += "";
                };

                binLetter10 = binLetter10.substr(2);
            };

            decodeLetter += MORSE_TABLE[OneLetterMorse];
        };

        binLetter2 = "";
        OneLetterMorse = "";
        binLetter = binLetter.substr(10);
    };

    return decodeLetter;
}

module.exports = {
    decode
}
