const latinToMorse = {
    'A':'.-',
    'B':'-...',
    'C':'-.-.',
    'D':'-..',
    'E':'.',
    'F':'..-.',
    'G':'--.',
    'H':'....',
    'I':'..',
    'J':'.---',
    'K':'-.-',
    'L':'.-..',
    'M':'--',
    'N':'-.',
    'O':'---',
    'P':'.--.',
    'Q':'--.-',
    'R':'.-.',
    'S':'...',
    'T':'-',
    'U':'..-',
    'V':'...-',
    'W':'.--',
    'X':'-..-',
    'Y':'-.--',
    'Z':'--..'
}

//étape 1
function getLatinCharacterList(text){
return text.split('')

}

console.log("getLatinCharacterList",getLatinCharacterList("hello, world"))

//étape 2 


function translateLatinCharacter(character){

return latinToMorse[character.toUpperCase()]

}

console.log("translateLatinCharacter",translateLatinCharacter("z"))
