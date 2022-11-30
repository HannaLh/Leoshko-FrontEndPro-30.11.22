const hours = +prompt('Input hours here');

if (!!Number(hours)) { // typeof hours === 'number'
    const seconds = hours * 60;
    alert(seconds);
} else {
    alert('Please, enter the NUMBER!');
}