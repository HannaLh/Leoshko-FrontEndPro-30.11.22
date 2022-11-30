const hours = +prompt('Input hours here');

if (typeof hours === 'number') { 
    let seconds = hours * 3600;
    alert(seconds);
} else {
    alert('Please, enter the number!');
}