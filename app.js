// Function to add a new education field
const addNewEField = () => {
    const newField = document.createElement("textarea");
    newField.classList.add("form-control", "mt-2", "educationField");
    newField.setAttribute("placeholder", "Enter Here");
    newField.setAttribute("rows", "3");

    const academicQualification = document.getElementById("academicQualification");
    academicQualification?.appendChild(newField);
    console.log("New education field added.");
};

// Function to add a new work experience field
const addNewWEField = () => {
    const newField = document.createElement("textarea");
    newField.classList.add("form-control", "mt-2", "workExperienceField");
    newField.setAttribute("placeholder", "Enter Here");
    newField.setAttribute("rows", "2");

    const we = document.getElementById("we");
    we?.appendChild(newField);
    console.log("New work experience field added.");
};

// Function to add a new skills field
const addNewSkillField = () => {
    const newField = document.createElement("textarea");
    newField.classList.add("form-control", "mt-2", "skillsField");
    newField.setAttribute("placeholder", "Enter Here");
    newField.setAttribute("rows", "2");

    const skills = document.getElementById("skills");
    skills?.appendChild(newField);
    console.log("New skills field added.");
};

// Event listener for the Generate Resume button
document.getElementById("cvButton")?.addEventListener("click", () => {
    console.log("Generating CV...");

    // Personal Information
    const nameField = document.getElementById("nameField")?.value;
    const nameT = document.getElementById("nameT");
    const nameT2 = document.getElementById("nameT2");
    nameT ? nameT.innerHTML = nameField : null;
    nameT2 ? nameT2.innerHTML = nameField : null;

    const contactField = document.getElementById("contactField")?.value;
    const contactT = document.getElementById("contactT");
    contactT ? contactT.innerHTML = contactField : null;

    const addressField = document.getElementById("addressField")?.value;
    const addressT = document.getElementById("addressT");
    addressT ? addressT.innerHTML = addressField : null;

    const githubLink = document.getElementById("githubLink")?.value;
    const linkT1 = document.getElementById("LinkT1");
    linkT1 ? linkT1.innerHTML = githubLink : null;

    const LinkedInLink = document.getElementById("LinkedInLink")?.value;
    const linkT2 = document.getElementById("LinkT2");
    linkT2 ? linkT2.innerHTML = LinkedInLink : null;

    const TwitterLink = document.getElementById("TwitterLink")?.value;
    const linkT3 = document.getElementById("LinkT3");
    linkT3 ? linkT3.innerHTML = TwitterLink : null;

    // Professional Information: Education
    const educationField = document.getElementsByClassName("educationField");
    let str1 = "";
    for (const e of educationField) {
        str1 += `<li>${e.value}</li>`;
    }
    const educationT = document.getElementById("educationT");
    educationT ? educationT.innerHTML = str1 : console.error("Element with ID educationT not found.");

    // Work experience information
    const workExperienceField = document.getElementsByClassName("workExperienceField");
    let str2 = "";
    for (const w of workExperienceField) {
        str2 += `<li>${w.value}</li>`;
    }
    const workExperienceT = document.getElementById("weT");
    workExperienceT ? workExperienceT.innerHTML = str2 : console.error("Element with ID weT not found.");

    // Skills information
    const skillsField = document.getElementsByClassName("skillsField");
    let str3 = "";
    for (const s of skillsField) {
        str3 += `<li>${s.value}</li>`;
    }
    const skillsT = document.getElementById("skillsT");
    skillsT ? skillsT.innerHTML = str3 : console.error("Element with ID skillsT not found.");

    // Toggle visibility of CV form and template
    document.getElementById("cv-form").style.display = "none";
    document.getElementById("cv-template").style.display = "block";

    // Set image
    const imgField = document.getElementById("imgField")?.files[0]; // Get the file
    const reader = new FileReader();
    reader.onloadend = () => {
        const imgCode = reader.result; // Access the data URL result here
        document.getElementById("imgT").src = imgCode; // Set the image source
    };
    imgField ? reader.readAsDataURL(imgField) : null; // Start reading the file as a data URL
});

// Function to edit the CV
const editCv = () => {
    // Switch the visibility of the CV template and form
    document.getElementById("cv-template").style.display = "none";
    document.getElementById("cv-form").style.display = "block";

    // Pre-fill the form with the current CV data from the generated template
    document.getElementById("nameField").value = document.getElementById("nameT")?.innerHTML ?? '';
    document.getElementById("contactField").value = document.getElementById("contactT")?.innerHTML ?? '';
    document.getElementById("addressField").value = document.getElementById("addressT")?.innerHTML ?? '';
    document.getElementById("githubLink").value = document.getElementById("LinkT1")?.innerHTML ?? '';
    document.getElementById("LinkedInLink").value = document.getElementById("LinkT2")?.innerHTML ?? '';
    document.getElementById("TwitterLink").value = document.getElementById("LinkT3")?.innerHTML ?? '';

    // Pre-fill education fields
    const educationList = document.getElementById("educationT")?.getElementsByTagName("li");
    const educationFields = document.getElementsByClassName("educationField");
    for (let i = 0; i < educationList?.length; i++) {
        if (educationFields[i]) {
            educationFields[i].value = educationList[i].innerHTML;
        }
    }

    // Pre-fill work experience fields
    const workExperienceList = document.getElementById("weT")?.getElementsByTagName("li");
    const workExperienceFields = document.getElementsByClassName("workExperienceField");
    for (let i = 0; i < workExperienceList?.length; i++) {
        if (workExperienceFields[i]) {
            workExperienceFields[i].value = workExperienceList[i].innerHTML;
        }
    }

    // Pre-fill skills fields
    const skillsList = document.getElementById("skillsT")?.getElementsByTagName("li");
    const skillsFields = document.getElementsByClassName("skillsField");
    for (let i = 0; i < skillsList?.length; i++) {
        if (skillsFields[i]) {
            skillsFields[i].value = skillsList[i].innerHTML;
        }
    }
};

// Function to print the CV
const printCv = () => {
    // Ensure the form is hidden and the CV template is shown before printing
    document.getElementById("cv-form").style.display = "none";
    document.getElementById("cv-template").style.display = "block";

    // Delay the print slightly to ensure the UI is updated before printing
    setTimeout(() => {
        window.print();
          // After printing, show the sharing options
          document.getElementById("shareOptions").style.display = "block"; // Show sharing buttons (LinkedIn, Email)
    }, 500);

    const username = document.getElementById("nameField")?.value;
    const resumeURL = generateUniqueURL(username);

    const resumeLink = document.getElementById("resumeLink");
    resumeLink.href = resumeURL;
    resumeLink.innerText = resumeURL;

    // Show sharing options
    document.getElementById("shareOptions").style.display = "block";
};

document.getElementById("cvButtonPrint")?.addEventListener("click", printCv);


// Dummy function for URL generation
const generateUniqueURL = (username) => `https://example.com/resume/${encodeURIComponent(username)}`;

const shareViaLinkedIn = () => {
    const resumeURL = document.getElementById("resumeLink")?.href;
    const linkedInURL = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(resumeURL)}`;
    window.open(linkedInURL, "_blank");
};

document.getElementById("shareLinkedIn")?.addEventListener("click", shareViaLinkedIn);

const shareViaEmail = () => {
    const resumeURL = document.getElementById("resumeLink")?.href;
    const subject = "Check out my resume!";
    const body = `Hi,\n\nI wanted to share my resume with you. You can view it here: ${resumeURL}`;
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

document.getElementById("shareEmail")?.addEventListener("click", shareViaEmail);





