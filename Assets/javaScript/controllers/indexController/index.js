import { Admin } from "../../models/Admin.js"
let LS = JSON.parse(localStorage.getItem('Data' || '[]'));

let createAdmin = () => {
    let createAdmin = new Admin();
    createAdmin.create(["Ahmed", "Tahiri", "ahmedtahiri.webdev@gmail.com", "03335891211", "Swing street, Main Road, Lahore, Punjab, Pakistan", "I'm Professional Full Stack Website Developer.", "./Assets/images/image1.png", "ahmed_tahiri", "Ahmed#123"]);
    let tempArr = [];
    tempArr.push(createAdmin);
    localStorage.setItem('Data', JSON.stringify(tempArr));
}
let auth = () => {
    document.cookie.includes("userName") ? window.location.href = "./home.html" : window.location.href = "./login.html";
}

let findAdmin = () => {
    let adminAcc = LS.find((rec) => rec.userType === "Admin");
    return adminAcc ? true : false;
};

window.onload = () => {
    if (LS === null || LS === '[]') {
        createAdmin();
        auth();
    } else { findAdmin() ? auth() : createAdmin(); }
};