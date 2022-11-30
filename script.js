let numOrStr = prompt('input number or string');
console.log(numOrStr)

switch(Boolean(numOrStr) || numOrStr) {     //або switch(!!numOrStr || numOrStr)
    case null:
        console.log('ви скасували');
        break;
    case '':
        console.log('Empty String');
        break;
    case isNaN(+numOrStr):
        console.log('number is Ba_NaN');
        break;
    default:
        console.log('OK!');
}