function validate() {
    if (document.getElementById("fullName").value == "") {
        alert( "Please provide your name!" );
        form.elements.fullName.focus();
        return false;
    } 
    if( document.getElementById("citySelect").value === "" ) {
        alert( "Please provide your city!");
        return false;
    }
    if( document.getElementById("postSelect").value === "" ) {
        alert( "Please provide your post!" );
        return false;
    }
    if( document.getElementById("paymentSelect").value === "" ) {
        alert( "Please provide your payment!" );
        return false;
    }
    return true;
}