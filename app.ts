// Function to add a new education field
function addNewEField(): void {
    const newField = document.createElement("textarea");
    newField.classList.add("form-control", "mt-2", "educationField");
    newField.setAttribute("placeholder", "Enter Here");
    newField.setAttribute("rows", "3");
    
    const academicQualification = document.getElementById("academicQualification");
    if (academicQualification) {
        academicQualification.appendChild(newField);
    } else {
        console.error("Element with ID 'academicQualification' not found.");
    }
    console.log("New education field added.");
}

// Function to add a new work experience field
function addNewWEField(): void {
    const newField = document.createElement("textarea");
    newField.classList.add("form-control", "mt-2", "workExperienceField");
    newField.setAttribute("placeholder", "Enter Here");
    newField.setAttribute("rows", "2");

    const we = document.getElementById("we");
    if (we) {
        we.appendChild(newField);
    } else {
        console.error("Element with ID 'we' not found.");
    }
    console.log("New work experience field added.");
}

// Function to add a new skills field
function addNewSkillField(): void {
    const newField = document.createElement("textarea");
    newField.classList.add("form-control", "mt-2", "skillsField");
    newField.setAttribute("placeholder", "Enter Here");
    newField.setAttribute("rows", "2");

    const skills = document.getElementById("skills");
    if (skills) {
        skills.appendChild(newField);
    } else {
        console.error("Element with ID 'skills' not found.");
    }
    console.log("New skills field added.");
}

// Event listener for the Generate Resume button
document.getElementById("cvButton")?.addEventListener("click", () => {
    console.log("Generating CV...");

    // Personal Information
    const nameField = (document.getElementById("nameField") as HTMLInputElement).value;
    const nameT = document.getElementById("nameT");
    const nameT2 = document.getElementById("nameT2");
    const contactField = (document.getElementById("contactField") as HTMLInputElement).value;
    const contactT = document.getElementById("contactT");
    const addressField = (document.getElementById("addressField") as HTMLInputElement).value;
    const addressT = document.getElementById("addressT");

    if (nameT) nameT.innerHTML = nameField;
    if (nameT2) nameT2.innerHTML = nameField;
    if (contactT) contactT.innerHTML = contactField;
    if (addressT) addressT.innerHTML = addressField;

    const githubLink = (document.getElementById("githubLink") as HTMLInputElement).value;
    const LinkedInLink = (document.getElementById("LinkedInLink") as HTMLInputElement).value;
    const TwitterLink = (document.getElementById("TwitterLink") as HTMLInputElement).value;

    const linkT1 = document.getElementById("LinkT1");
    const linkT2 = document.getElementById("LinkT2");
    const linkT3 = document.getElementById("LinkT3");

    if (linkT1) linkT1.innerHTML = githubLink;
    if (linkT2) linkT2.innerHTML = LinkedInLink;
    if (linkT3) linkT3.innerHTML = TwitterLink;

    // Professional Information: Education
    const educationField = document.getElementsByClassName("educationField") as HTMLCollectionOf<HTMLTextAreaElement>;
    let str1 = "";
    for (let e of educationField) {
        str1 += `<li>${e.value}</li>`;
    }
    const educationT = document.getElementById("educationT");
    if (educationT) {
        educationT.innerHTML = str1;
    } else {
        console.error("Element with ID 'educationT' not found.");
    }

    // Work experience information
    const workExperienceField = document.getElementsByClassName("workExperienceField") as HTMLCollectionOf<HTMLTextAreaElement>;
    let str2 = "";
    for (let w of workExperienceField) {
        str2 += `<li>${w.value}</li>`;
    }
    const workExperienceT = document.getElementById("weT");
    if (workExperienceT) {
        workExperienceT.innerHTML = str2;
    } else {
        console.error("Element with ID 'weT' not found.");
    }

    // Skills information
    const skillsField = document.getElementsByClassName("skillsField") as HTMLCollectionOf<HTMLTextAreaElement>;
    let str3 = "";
    for (let s of skillsField) {
        str3 += `<li>${s.value}</li>`;
    }
    const skillsT = document.getElementById("skillsT");
    if (skillsT) {
        skillsT.innerHTML = str3;
    } else {
        console.error("Element with ID 'skillsT' not found.");
    }

    // Toggle visibility of CV form and template
    const cvForm = document.getElementById("cv-form");
    const cvTemplate = document.getElementById("cv-template");
    if (cvForm) cvForm.style.display = "none";
    if (cvTemplate) cvTemplate.style.display = "block";

    // Setting image code
    const imgField = (document.getElementById("imgField") as HTMLInputElement).files?.[0];
    if (imgField) {
        const reader = new FileReader();
        reader.onloadend = function () {
            const imgCode = reader.result as string;
            const imgT = document.getElementById("imgT") as HTMLImageElement;
            if (imgT) imgT.src = imgCode;
        };
        reader.readAsDataURL(imgField);
    }
});

// Function to edit the CV
function editCv(): void {
    // Switch visibility of the CV template and form
    const cvForm = document.getElementById("cv-form");
    const cvTemplate = document.getElementById("cv-template");
    if (cvForm) cvForm.style.display = "block";
    if (cvTemplate) cvTemplate.style.display = "none";

    // Pre-fill the form with the current CV data
    const nameT = document.getElementById("nameT")?.innerHTML;
    const contactT = document.getElementById("contactT")?.innerHTML;
    const addressT = document.getElementById("addressT")?.innerHTML;
    const linkT1 = document.getElementById("LinkT1")?.innerHTML;
    const linkT2 = document.getElementById("LinkT2")?.innerHTML;
    const linkT3 = document.getElementById("LinkT3")?.innerHTML;

    if (nameT) (document.getElementById("nameField") as HTMLInputElement).value = nameT;
    if (contactT) (document.getElementById("contactField") as HTMLInputElement).value = contactT;
    if (addressT) (document.getElementById("addressField") as HTMLInputElement).value = addressT;
    if (linkT1) (document.getElementById("githubLink") as HTMLInputElement).value = linkT1;
    if (linkT2) (document.getElementById("LinkedInLink") as HTMLInputElement).value = linkT2;
    if (linkT3) (document.getElementById("TwitterLink") as HTMLInputElement).value = linkT3;

    // Pre-fill education fields
    const educationList = document.getElementById("educationT")?.getElementsByTagName("li");
    const educationFields = document.getElementsByClassName("educationField") as HTMLCollectionOf<HTMLTextAreaElement>;
    if (educationList) {
        for (let i = 0; i < educationList.length; i++) {
            if (educationFields[i]) educationFields[i].value = educationList[i].innerHTML;
        }
    }

    // Pre-fill work experience fields
    const workExperienceList = document.getElementById("weT")?.getElementsByTagName("li");
    const workExperienceFields = document.getElementsByClassName("workExperienceField") as HTMLCollectionOf<HTMLTextAreaElement>;
    if (workExperienceList) {
        for (let i = 0; i < workExperienceList.length; i++) {
            if (workExperienceFields[i]) workExperienceFields[i].value = workExperienceList[i].innerHTML;
        }
    }

    // Pre-fill skills fields
    const skillsList = document.getElementById("skillsT")?.getElementsByTagName("li");
    const skillsFields = document.getElementsByClassName("skillsField") as HTMLCollectionOf<HTMLTextAreaElement>;
    if (skillsList) {
        for (let i = 0; i < skillsList.length; i++) {
            if (skillsFields[i]) skillsFields[i].value = skillsList[i].innerHTML;
        }
    }
}

// Function to print the CV
function printCV(): void {
    // Ensure the form is hidden and the CV template is shown before printing
    const cvForm = document.getElementById("cv-form");
    const cvTemplate = document.getElementById("cv-template");
    if (cvForm) cvForm.style.display = "none";
    if (cvTemplate) cvTemplate.style.display = "block";

    // Delay the print slightly to ensure the UI is updated before printing
    setTimeout(() => {
        window.print(); // Trigger the print functionality
    }, 500);

    const username = (document.getElementById("nameField") as HTMLInputElement).value;
    const resumeURL = generateUniqueURL(username);
    
    const resumeLink = document.getElementById("resumeLink") as HTMLAnchorElement;
    if (resumeLink) {
        resumeLink.href = resumeURL;
        resumeLink.innerText = resumeURL;
    }

    // Show sharing options
    const shareOptions = document.getElementById("shareOptions");
    if (shareOptions) shareOptions.style.display = "block";
}

document.getElementById("cvButtonPrint")?.addEventListener("click", printCV);

// Dummy function for URL generation
function generateUniqueURL(username: string): string {
    return `https://example.com/resume/${encodeURIComponent(username)}`;
}

