let print = document.getElementById("print");
let edit = document.getElementById("edited");
let form = document.getElementById("form");
let formOut = document.getElementById("form-output");
//Get Value
let fullName = document.getElementById("fname");
let gardian = document.getElementById("gardian");
let email = document.getElementById("mail");
let phone = document.getElementById("phone");
let address = document.getElementById("address");
let date = document.getElementById("dob");
let national = document.getElementById("nati");
let selectGender = document.getElementById("gender");
let selectStatus = document.getElementById("status");
let profile = document.getElementById("pro-pic");
// HTML Inner
let candidate = document.getElementById("p-name");
let gardianN = document.getElementById("g-name");
let dob = document.getElementById("p-dob");
let mail = document.getElementById("p-mail");
let gender = document.getElementById("p-gen");
let addre = document.getElementById("p-add");
let ph = document.getElementById("p-phone");
let nationalo = document.getElementById("p-nat");
let status = document.getElementById("p-sta");
let pro = document.getElementById("pic");
// //Split
function skillSeperate() {
    const skill = document.getElementById("skills");
    const skillLi = document.getElementById("skill-li");
    skillLi.innerHTML = "";
    const skillValues = skill.value.split(",");
    skillValues.forEach(value => {
        const trimmedValue = value.trim();
        if (trimmedValue) {
            const listItem = document.createElement("li");
            listItem.textContent = trimmedValue;
            skillLi.appendChild(listItem);
        }
    });
    return skillValues;
}
;
function eduSeperate() {
    let education = document.getElementById("edu");
    let eduLi = document.getElementById("edu-li");
    eduLi.innerHTML = "";
    const eduValues = education.value.split(",");
    eduValues.forEach(value => {
        const trimmedValue = value.trim();
        if (trimmedValue) {
            const listItem = document.createElement("li");
            listItem.textContent = trimmedValue;
            eduLi.appendChild(listItem);
        }
    });
    return eduValues;
}
;
function expSeperate() {
    let exp = document.getElementById("experience");
    const expLi = document.getElementById("exp-li");
    expLi.innerHTML = "";
    const expValues = exp.value.split(",");
    expValues.forEach(value => {
        const trimmedValue = value.trim();
        if (trimmedValue) {
            const listItem = document.createElement("li");
            listItem.textContent = trimmedValue;
            expLi.appendChild(listItem);
        }
    });
    return expValues;
}
;
function langSeperate() {
    let language = document.getElementById("lang");
    let langLi = document.getElementById("lang-li");
    langLi.innerHTML = "";
    const langValues = language.value.split(",");
    langValues.forEach(value => {
        const trimmedValue = value.trim();
        if (trimmedValue) {
            const listItem = document.createElement("li");
            listItem.textContent = trimmedValue;
            langLi.appendChild(listItem);
        }
    });
    return langValues;
}
;
// //Add File
function addFile() {
    let fileInput = document.getElementById("file");
    let file = fileInput.files[0];
    if (file) {
        let fileReader = new FileReader();
        fileReader.onload = function () {
            let fileURL = fileReader.result;
            pro.src = fileURL;
        };
        fileReader.readAsDataURL(file);
        fileInput.value = "";
    }
}
//Show Div
function showDiv() {
    formOut.style.display = "block";
    formOut.scrollIntoView({ behavior: "smooth" });
}
// // Function
function HandleCVSubmit() {
    showDiv();
    addFile();
    skillSeperate();
    langSeperate();
    eduSeperate();
    expSeperate();
    candidate.innerHTML = fullName.value;
    gardianN.innerHTML = gardian.value;
    dob.innerHTML = date.value;
    nationalo.innerHTML = national.value;
    mail.innerHTML = email.value;
    ph.innerHTML = phone.value;
    addre.innerHTML = address.value;
    gender.innerHTML = selectGender.value;
    status.innerHTML = selectStatus.value;
}
;
// Resume Generated
form.addEventListener("submit", (event) => {
    event.preventDefault();
    HandleCVSubmit();
});
edit.addEventListener("click", () => {
    formOut.style.display = "none";
});
print.addEventListener("click", () => {
    window.print();
});
