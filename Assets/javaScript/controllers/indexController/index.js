import { Admin } from "../../models/Admin.js";
import { errorNotification } from "../../views/homeView/Alerts/errorNotification.js";
let LS = JSON.parse(localStorage.getItem('Data' || '[]'));

let createAdmin = () => {
    try {
        let createAdmin = new Admin();
        createAdmin.create(["Ahmed", "Tahiri", "ahmedtahiri.webdev@gmail.com", "03335891211", "Swing street, Main Road, Lahore, Punjab, Pakistan", "I'm Professional Full Stack Website Developer.", "./Assets/images/image1.png", "ahmed_tahiri", "Ahmed#123"]);
        let tempArr = [];
        tempArr.push(createAdmin);
        localStorage.setItem('Data', JSON.stringify(tempArr));
    } catch (error) { errorNotification(`Error While Creating Admin`); }
}
let auth = () => {
    if (document.cookie.includes("userName")) {
        try { window.location.href = "./home.html"; } catch (error) { errorNotification(`Error while loading home.html`); }
    } else {
        try { window.location.href = "./login.html"; } catch (error) { errorNotification(`Error while loading login.html`); }
    }
}

let findAdmin = () => {
    try {
        let adminAcc = LS.find((rec) => rec.userType === "Admin");
        if (adminAcc) { return true; } else { return false; }
    } catch (error) { errorNotification(`Error while finding Admin account`); }
};
try {
    window.onload = () => {
        if (LS === null || LS === '[]') {
            createAdmin();
            auth();
        } else { if (findAdmin()) { auth(); } else { createAdmin(); } }
    };
} catch (error) { errorNotification(`Error while loading index.html window`); }