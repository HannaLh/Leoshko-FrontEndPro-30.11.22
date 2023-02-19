const form = document.getElementById("mainForm");
let userTableStorage = [];
const pre = document.querySelector('#userFormData pre');

function onFormSubmit () {
    if(!validate()){
        alert('Form was not filled correctly');
    }else {
        eddInfo();
        alert('Your order is successfully placed!');
        form.style.visibility = "hidden";
    }
}

const eddInfo = (ev)=> {
    const dataStorage = {
        name: document.getElementById('fullName').value,
        city: document.getElementById('citySelect').value,
        post: document.getElementById('postSelect').value,
        payment: document.getElementById('paymentSelect').value,
        date: new Date(),
    }
    userTableStorage.push(dataStorage);
    document.forms[0].reset();

    pre.textContent = '\n' + JSON.stringify(userTableStorage, '\t', 2);

    localStorage.setItem('userFormData', JSON.stringify(userTableStorage));
}




