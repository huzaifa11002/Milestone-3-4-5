let print = document.getElementById("print") as HTMLButtonElement;
let edit = document.getElementById("edited") as HTMLButtonElement;
let form = document.getElementById("form") as HTMLFormElement;
let formOut = document.getElementById("form-output") as HTMLDivElement;

//Get Value

let fullName = (document.getElementById("fname") as HTMLInputElement);
let gardian = (document.getElementById("gardian") as HTMLInputElement);
let email = (document.getElementById("mail") as HTMLInputElement);
let phone = (document.getElementById("phone") as HTMLInputElement);
let address = (document.getElementById("address") as HTMLInputElement);
let date = (document.getElementById("dob") as HTMLInputElement);
let national = (document.getElementById("nati") as HTMLInputElement);
let selectGender = (document.getElementById("gender") as HTMLSelectElement);
let selectStatus = (document.getElementById("status") as HTMLSelectElement);
let profile = document.getElementById("pro-pic") as HTMLInputElement;

// HTML Inner

let candidate = document.getElementById("p-name") as HTMLHeadingElement;
let gardianN = document.getElementById("g-name") as HTMLSpanElement;
let dob = document.getElementById("p-dob") as HTMLSpanElement;
let mail = document.getElementById("p-mail") as HTMLSpanElement;
let gender = document.getElementById("p-gen") as HTMLSpanElement;
let addre = document.getElementById("p-add") as HTMLSpanElement;
let ph = document.getElementById("p-phone") as HTMLSpanElement;
let nationalo = document.getElementById("p-nat") as HTMLSpanElement;
let status = document.getElementById("p-sta") as HTMLSpanElement;
let pro:any = document.getElementById("pic") as HTMLImageElement


// //Split

function skillSeperate() {
    const skill = document.getElementById("skills") as HTMLInputElement;
    const skillLi = document.getElementById("skill-li") as HTMLUListElement;
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
};

function eduSeperate() {
    let education = (document.getElementById("edu") as HTMLInputElement);
    let eduLi = document.getElementById("edu-li") as HTMLUListElement;
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
};

function expSeperate() {
    let exp = (document.getElementById("experience") as HTMLInputElement);
    const expLi = document.getElementById("exp-li") as HTMLUListElement;
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
};

function langSeperate() {
    let language = (document.getElementById("lang") as HTMLInputElement);
    let langLi = document.getElementById("lang-li") as HTMLUListElement;
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
};

// //Add File
function addFile() {
    let fileInput:any = document.getElementById("file")as HTMLInputElement;
    let file = fileInput.files[0];
    if (file) {
        let fileReader = new FileReader();
        fileReader.onload = function () {
            let fileURL = fileReader.result;
            pro.src = fileURL;
        }
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
};

// Resume Generated
form.addEventListener("submit", (event) => {
    event.preventDefault();
    HandleCVSubmit();
})

edit.addEventListener("click",()=> {
    formOut.style.display = "none";
});

print.addEventListener("click", () => {
    window.print();
});