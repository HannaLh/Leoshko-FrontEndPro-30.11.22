let birthYear = +prompt('Enter the year of birth:');
const currentYear = new Date().getFullYear();
const lettersRegExp = /[a-zA-Z]/g;
const age = currentYear - birthYear;

const cityCapitalMapping = {
    'Kyiv': 'Ukraine',
    'London': 'Great Britain',
    'Washington': 'USA'
}

const favSportChampionMapping = {
    'football': 'Lionel Messi',
    'hockey': 'Bobby Orr',
    'basketball': 'Michael Jordan'
}

quit:if (birthYear) {
        if (birthYear < 1882 || birthYear > currentYear) {
            alert('Enter correct date.');
            break quit;
        }
        birthMessage = `You are ${age} years old.`

        let city = prompt('Enter the city you live in:');
        if (city) {
            if (!lettersRegExp.test(city)) {
                alert('The city of birth must be a string.');
                break quit;
            } 
            if (city in cityCapitalMapping) {
                cityMessage = `You live in capital of ${cityCapitalMapping[city]}.`;
            }
            else {
                cityMessage = `You live in ${city}.`;
            }
        } else {
            alert('Sorry, you did not enter the city.');
            break quit;
        }
        alert(birthMessage + '\n' + cityMessage);

        let favSport = prompt('Enter your favorite sport:');
        if(favSport) {
            if (!lettersRegExp.test(favSport)) {
                alert('The sport must be a string.');
                break quit;
            }
            if (favSport in favSportChampionMapping) {
                favSportMessage = `Cool! Would you like to be ${favSportChampionMapping[favSport]}?`;
            } else {
                favSportMessage = `Your favorite sport is ${favSport}.`;
            }
        } else {
            alert('Sorry, you did not enter sport.');
            break quit;
        }
        
        alert(birthMessage + '\n' + cityMessage + '\n' + favSportMessage);
} else {
    alert('Sorry, you did not enter the year.');
}