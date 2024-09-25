 
// Function to add a new education field
function addNewEField() {
    var newField = document.createElement("textarea");
    newField.classList.add("form-control", "mt-2", "educationField");
    newField.setAttribute("placeholder", "Enter Here");
    newField.setAttribute("rows", "3");
    var academicQualification = document.getElementById("academicQualification");
    academicQualification.appendChild(newField);
    console.log("New education field added.");
}
// Function to add a new work experience field
function addNewWEField() {
    var newField = document.createElement("textarea");
    newField.classList.add("form-control", "mt-2", "workExperienceField");
    newField.setAttribute("placeholder", "Enter Here");
    newField.setAttribute("rows", "2");
    var we = document.getElementById("we");
    we.appendChild(newField);
    console.log("New work experience field added.");
}
// Function to add a new skills field
function addNewSkillField() {
    var newField = document.createElement("textarea");
    newField.classList.add("form-control", "mt-2", "skillsField");
    newField.setAttribute("placeholder", "Enter Here");
    newField.setAttribute("rows", "2");
    var skills = document.getElementById("skills");
    skills.appendChild(newField);
    console.log("New skills field added.");
}
// Event listener for the Generate Resume button
document.getElementById("cvButton").addEventListener("click", function () {
    console.log("Generating CV...");
    // Personal Information
    var nameField = document.getElementById("nameField").value;
    var nameT = document.getElementById("nameT");
    if (nameT)
        nameT.innerHTML = nameField;
    var nameT2 = document.getElementById("nameT2");
    if (nameT2)
        nameT2.innerHTML = nameField;
    var contactField = document.getElementById("contactField").value;
    var contactT = document.getElementById("contactT");
    if (contactT)
        contactT.innerHTML = contactField;
    var addressField = document.getElementById("addressField").value;
    var addressT = document.getElementById("addressT");
    if (addressT)
        addressT.innerHTML = addressField;
    var githubLink = document.getElementById("githubLink").value;
    var linkT1 = document.getElementById("LinkT1");
    if (linkT1)
        linkT1.innerHTML = githubLink;
    var LinkedInLink = document.getElementById("LinkedInLink").value;
    var linkT2 = document.getElementById("LinkT2");
    if (linkT2)
        linkT2.innerHTML = LinkedInLink;
    var TwitterLink = document.getElementById("TwitterLink").value;
    var linkT3 = document.getElementById("LinkT3");
    if (linkT3)
        linkT3.innerHTML = TwitterLink;
    // Professional Information
    // Education information
    var educationField = document.getElementsByClassName("educationField");
    var str1 = "";
    for (var _i = 0, educationField_1 = educationField; _i < educationField_1.length; _i++) {
        var e = educationField_1[_i];
        str1 += "<li>".concat(e.value, "</li>");
    }
    var educationT = document.getElementById("educationT");
    if (educationT)
        educationT.innerHTML = str1;
    else
        console.error("Element with ID educationT not found.");
    // Work experience information
    var workExperienceField = document.getElementsByClassName("workExperienceField");
    var str2 = "";
    for (var _a = 0, workExperienceField_1 = workExperienceField; _a < workExperienceField_1.length; _a++) {
        var w = workExperienceField_1[_a];
        str2 += "<li>".concat(w.value, "</li>");
    }
    var workExperienceT = document.getElementById("weT");
    if (workExperienceT)
        workExperienceT.innerHTML = str2;
    else
        console.error("Element with ID weT not found.");
    // Skills information
    var skillsField = document.getElementsByClassName("skillsField");
    var str3 = "";
    for (var _b = 0, skillsField_1 = skillsField; _b < skillsField_1.length; _b++) {
        var s = skillsField_1[_b];
        str3 += "<li>".concat(s.value, "</li>");
    }
    var skillsT = document.getElementById("skillsT");
    if (skillsT)
        skillsT.innerHTML = str3;
    else
        console.error("Element with ID skillsT not found.");
    // Toggle visibility of CV form and template
    document.getElementById("cv-form").style.display = "none";
    document.getElementById("cv-template").style.display = "block";
    // setting img code
    var imgField = document.getElementById("imgField").files[0]; // Get the file
    var reader = new FileReader();
    reader.onloadend = function () {
        var imgCode = reader.result; // Access the data URL result here
        document.getElementById("imgT").src = imgCode; // Set the image source
    };
    if (imgField) {
        reader.readAsDataURL(imgField); // Start reading the file as a data URL
    }
});
// Function to edit the CV
function editCv() {
    // Switch the visibility of the CV template and form
    document.getElementById("cv-template").style.display = "none";
    document.getElementById("cv-form").style.display = "block";
    
    // Pre-fill the form with the current CV data from the generated template
    document.getElementById("nameField").value = document.getElementById("nameT").innerHTML;
    document.getElementById("contactField").value = document.getElementById("contactT").innerHTML;
    document.getElementById("addressField").value = document.getElementById("addressT").innerHTML;
    document.getElementById("githubLink").value = document.getElementById("LinkT1").innerHTML;
    document.getElementById("LinkedInLink").value = document.getElementById("LinkT2").innerHTML;
    document.getElementById("TwitterLink").value = document.getElementById("LinkT3").innerHTML;

    // Pre-fill education fields
    let educationList = document.getElementById("educationT").getElementsByTagName("li");
    let educationFields = document.getElementsByClassName("educationField");
    for (let i = 0; i < educationList.length; i++) {
        if (educationFields[i]) {
            educationFields[i].value = educationList[i].innerHTML;
        }
    }

    // Pre-fill work experience fields
    let workExperienceList = document.getElementById("weT").getElementsByTagName("li");
    let workExperienceFields = document.getElementsByClassName("workExperienceField");
    for (let i = 0; i < workExperienceList.length; i++) {
        if (workExperienceFields[i]) {
            workExperienceFields[i].value = workExperienceList[i].innerHTML;
        }
    }

    // Pre-fill skills fields
    let skillsList = document.getElementById("skillsT").getElementsByTagName("li");
    let skillsFields = document.getElementsByClassName("skillsField");
    for (let i = 0; i < skillsList.length; i++) {
        if (skillsFields[i]) {
            skillsFields[i].value = skillsList[i].innerHTML;
        }
    }
}


// Function to print the CV
function printCV() {
    // Ensure the form is hidden and the CV template is shown before printing
    document.getElementById("cv-form").style.display = "none";
    document.getElementById("cv-template").style.display = "block";
    
    // Delay the print slightly to ensure the UI is updated before printing
    setTimeout(function() {
        window.print(); // Trigger the print functionality
    }, 500);
}
document.getElementById("cvButtonPrint").addEventListener("click",printCV)




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

