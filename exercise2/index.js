const firstNameTxt = document.getElementById("firstName");
const middleNameTxt = document.getElementById("middleName");
const lastNameTxt = document.getElementById("lastName");
const resultFullName = document.getElementById("fullName");

function generateFullName() {
   
    const firstName = firstNameTxt.value.trim();
    const middleName = middleNameTxt.value.trim();
    const lastName = lastNameTxt.value.trim();

   
    let fullName = firstName + " " + (middleName ? middleName + " " : "") + lastName;

   
    resultFullName.innerHTML = fullName;
}

function clearEntries() {
    
    firstNameTxt.value = "";
    middleNameTxt.value = "";
    lastNameTxt.value = "";
    resultFullName.innerHTML = "";
}
