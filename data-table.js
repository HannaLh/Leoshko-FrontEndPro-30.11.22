

function getData(form) {
    const formData = new FormData(form);
    for (let pair of formData.entries()) {
        if(myValidation() === false){
            break;
        } else {
            let div = document.createElement('div');
            div.className = "form-data";
            div.innerHTML = pair[0] + ": " + pair[1];
            document.body.append(div);
        }
    }
}
document.getElementById("mainForm").addEventListener("submit", function (e) {
    e.preventDefault();
    getData(e.target);
});