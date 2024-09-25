function addNewEField() {
    let newField = document.createElement("textarea");
    newField.classList.add("form-control");
    newField.setAttribute("placeholder", "Enter Here");
    newField.classList.add("mt-2");
    newField.setAttribute("rows", "3");

    let academicQualification = document.getElementById("academicQualification");
    let eButton = document.getElementById("eButton");

   academicQualification.appendChild(newField)
}
function addNewWEField(){
    let newField = document.createElement("textarea");
    newField.classList.add("form-control")
    newField.setAttribute("placeholder", "Enter Here");
    newField.classList.add("mt-2");
    newField.setAttribute("rows", "2");

    let we = document.getElementById("we");
    let weButton = document.getElementById("weButton");
     we.appendChild(newField)
     console.log("new field added");
        
}

function addNewSkillField(){
    let newField = document.createElement("textarea");
    newField.classList.add("form-control")
    newField.setAttribute("placeholder", "Enter Here");
    newField.classList.add("mt-2");
    newField.setAttribute("rows", "2");

    let skills = document.getElementById("skills");
    let weButton = document.getElementById("skillButton");
     skills.appendChild(newField)
     console.log("new field added"); 
}
