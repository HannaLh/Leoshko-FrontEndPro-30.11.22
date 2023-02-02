document.getElementById('mainForm').style.visibility = "hidden";
document.getElementById('dataList').style.visibility = "hidden";
const showUserForm = () => {
    document.getElementById('mainForm').style.visibility = "visible";
}
const showUserTable = () => {
    document.getElementById('dataList').style.visibility = "visible";
}
const form = document.getElementById("mainForm");

const selectedRow = null;

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
            showUserTable();
        resetForm();
    }
}

function readFormData() {
    const formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["Amount"] = document.getElementById("Amount").value;
    formData["citySelect"] = document.getElementById("citySelect").value;
    formData["postSelect"] = document.getElementById("postSelect").value;
    formData["paymentSelect"] = document.getElementById("paymentSelect").value;
    return formData;
}

function insertNewRecord(data) {
    const table = document.getElementById("dataList").getElementsByTagName('tbody')[0];
    const newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Amount;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.citySelect;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.postSelect;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.paymentSelect;
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("Amount").value = "";
    document.getElementById("citySelect").value = "";
    document.getElementById("postSelect").value = "";
    document.getElementById("paymentSelect").value = "";
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.Amount;
    selectedRow.cells[2].innerHTML = formData.citySelect;
    selectedRow.cells[3].innerHTML = formData.postSelect;
    selectedRow.cells[4].innerHTML = formData.paymentSelect;
}