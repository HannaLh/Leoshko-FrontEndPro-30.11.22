function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        alert( "Please provide your name!" );
        form.elements.fullName.focus();
    } 
    if( document.getElementById("citySelect").value === "" ) {
        isValid = false;
        alert( "Please provide your city!" );
    }
    if( document.getElementById("postSelect").value === "" ) {
        isValid = false;
        alert( "Please provide your post!" );
    }
    if( document.getElementById("paymentSelect").value === "" ) {
        isValid = false;
        alert( "Please provide your payment!" );
    } else {
        isValid = true;
    }
    return isValid;
}