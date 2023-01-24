
const form = createElement('form', {name: 'main', id: 'mainForm'}, null, null, body);
document.getElementById('mainForm').style.visibility = "hidden";
const showUserForm = () => {
    document.getElementById('mainForm').style.visibility = "visible";
}


createElement('input', 
    {type:'text', name: 'Name', class: 'form-controll', placeholder: 'Your first name *', id:'firstName'}, 
    null, 
    null, 
    form
);

createElement('input', 
    {type:'text', name: 'Surname', id: 'lastName', placeholder: 'Your last name *'}, 
    null, 
    null, 
    form
);

createElement('input', 
    {type:'number', name: 'Amount', id: 'Amount', placeholder: 'Amount of products *'}, 
    null, 
    null, 
    form
);

const selectCity = createElement('select', {name: 'nameSelect', id: 'state', class: 'select-controll'}, null, null, form);

createElement('option', {value: '-1'}, null, 'choose city for shipping *', selectCity);
createElement('option', {value: '1'}, null, 'Dnipro', selectCity);
createElement('option', {value: '2'}, null, 'Kyiv', selectCity);
createElement('option', {value: '3'}, null, 'Kharkiv', selectCity);
createElement('option', {value: '4'}, null, 'Lviv', selectCity);

const selectPost = createElement('select', {name: 'nameSelectPost', id: 'post', class: 'select-controll'}, null, null, form);

createElement('option', {value: '-1'}, null, 'select Nova Poshta office *', selectPost);
createElement('option', {value: '1'}, null, 'Department №3', selectPost);
createElement('option', {value: '2'}, null, 'peremogySt', selectPost);
createElement('option', {value: '3'}, null, 'Department №11', selectPost);
createElement('option', {value: '4'}, null, 'Department №48', selectPost);

const selectPayment = createElement('select', {name: 'nameSelectPay', id: 'paymentMethod', class: 'select-controll'}, null, null, form);

createElement('option', {value: '-1'}, null, 'choose your payment method *', selectPayment);
createElement('option', {value: '1'}, null, 'Debit card', selectPayment);
createElement('option', {value: '2'}, null, 'Cash', selectPayment);

createElement('textarea', 
    {id:'aditionalInfo', name: 'aditionalInfo', rows: '4', cols:'50', placeholder:'leave a commet for your order if needed'}, 
    null, 
    null, 
    form
);

const btn = createElement('button', 
    {type:'submit', value: 'Submit', id: 'submit'}, 
    null,
    null,
    form,
);
btn.innerHTML = "Purchase";



