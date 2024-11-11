import { User } from "./User.js";
import { Admin } from "./Admin.js";
export class Validation {
    attribute;
    regex;
    length;
    isNull(attr) {
        this.setAttribute(attr);
        let nullCheck = true;
        if ($(this.getAttribute()).val() == "" || $(this.getAttribute()).val() == null) { nullCheck = false; }
        return nullCheck;
    }
    matchRegex(attr, regex) {
        let regexCheck = true;
        this.setAttribute(attr);
        this.setRegex(regex);
        let value = $(this.getAttribute()).val();
        if (!(value == value.match(this.getRegex()))) { regexCheck = false; }
        return regexCheck;
    }
    checkLength(attr, len) {
        let lengthCheck = true;
        this.setAttribute(attr);
        this.setLength(len);
        if ($(this.getAttribute()).val().length > this.getLength()) { lengthCheck = false; }
        return lengthCheck;
    }
    profilePicVal(img) {
        let imgCheck = true;
        let imgSrc = $(img).attr("src");
        if (imgSrc.includes("default_profile.png") || imgSrc == "") { imgCheck = false; }
        return imgCheck;
    }
    createUser(dataArr) {
        let newUser = new User();
        newUser.create(dataArr);
        let tempArr = [];
        let storedData = localStorage.getItem('Data');
        if (storedData) { tempArr = JSON.parse(storedData); }
        tempArr.push(newUser);
        localStorage.setItem('Data', JSON.stringify(tempArr));
    }
    updateUser(selectedIndex, dataArr) {
        let storedData = JSON.parse(localStorage.getItem('Data'));
        let currUser = storedData[selectedIndex];
        let userClassInstance = new User();
        userClassInstance.update(dataArr);
        userClassInstance.setUserId(currUser.userId);
        userClassInstance.setUserType(currUser.userType);
        storedData[selectedIndex] = userClassInstance;
        localStorage.setItem('Data', JSON.stringify(storedData))
    }
    createAdmin(dataArr) {
        let adminCheck = true;
        let newAdmin = new Admin();
        newAdmin.create(dataArr);
        if (!this.adminExists()) {
            let tempArr = [];
            let storedData = localStorage.getItem('Data');
            if (storedData) { tempArr = JSON.parse(storedData); }
            tempArr.push(newAdmin);
            localStorage.setItem('Data', JSON.stringify(tempArr));

        } else { adminCheck = false; }
        return adminCheck;
    }
    updateAdmin(selectedIndex, dataArr) {
        let storedData = JSON.parse(localStorage.getItem('Data'));
        let currData = storedData[selectedIndex];
        let adminClassInstance = new Admin();
        adminClassInstance.update(dataArr);
        adminClassInstance.setUserType(currData.userType);
        adminClassInstance.setUserId(currData.userId);
        storedData[selectedIndex] = adminClassInstance;
        localStorage.setItem('Data', JSON.stringify(storedData));
    }
    adminExists() {
        let LS = JSON.parse(localStorage.getItem('Data'));
        if (LS !== null) {
            let adminAcc = LS.find((record) => record.userType === "Admin");
            if (adminAcc) { return true; } else { return false; }
        }
    }
    setAttribute(att) {
        this.attribute = att;
    }
    getAttribute() {
        return this.attribute;
    }
    setRegex(reg) {
        this.regex = reg;
    }
    getRegex() {
        return this.regex;
    }
    setLength(len) {
        this.length = len;
    }
    getLength() {
        return this.length;
    }
}