function addNewEField() {
    var newField = document.createElement("textarea");
    newField.classList.add("form-control");
    newField.setAttribute("placeholder", "Enter Here");
    newField.classList.add("mt-2");
    newField.setAttribute("rows", "3");
    var academicQualification = document.getElementById("academicQualification");
    var eButton = document.getElementById("eButton");
    academicQualification.appendChild(newField);
}
function addNewWEField() {
    var newField = document.createElement("textarea");
    newField.classList.add("form-control");
    newField.setAttribute("placeholder", "Enter Here");
    newField.classList.add("mt-2");
    newField.setAttribute("rows", "2");
    var we = document.getElementById("we");
    var weButton = document.getElementById("weButton");
    we.appendChild(newField);
    console.log("new field added");
}
function addNewSkillField() {
    var newField = document.createElement("textarea");
    newField.classList.add("form-control");
    newField.setAttribute("placeholder", "Enter Here");
    newField.classList.add("mt-2");
    newField.setAttribute("rows", "2");
    var skills = document.getElementById("skills");
    var weButton = document.getElementById("skillButton");
    skills.appendChild(newField);
    console.log("new field added");
}
