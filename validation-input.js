function validate() {
    if (idInput.value === "") {
        alert( "Please provide id!" );
        return false;
    } 
    if(idInput.value < 0 ) {
        alert( "Please provide positive digit" );
        return false;
    }
    if(idInput.value > 100 ) {
        alert( "Please provide digit under 100" );
        return false;
    }
    return true;
}