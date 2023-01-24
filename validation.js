form.addEventListener("submit",(e)=>{
    e.preventDefault();
});

document.getElementById("mainForm").addEventListener("submit", myValidation);
function myValidation () {
    if(form.elements.Name.value === "" ) {
        alert( "Please provide your name!" );
        form.elements.Name.focus();
        return false;
    }
    if( form.elements.Surname.value === "" ) {
        alert( "Please provide your last name!" );
        form.elements.Surname.focus();
        return false;
    }
    if( form.elements.Amount.value <= 0 ) {
        alert( "Please provide Amount" );
        form.elements.Amount.focus();
        return false;
    }
    if( form.elements.nameSelect.value === "-1" ) {
        alert( "Please provide your country!" );
        return false;
    }
    if( form.elements.nameSelectPost.value === "-1" ) {
        alert( "Please provide your post!" );
        return false;
    }
    if( form.elements.nameSelectPay.value === "-1" ) {
        alert( "Please provide your payment!" );
        return false;
    }
    else {
        return true;
    }
};