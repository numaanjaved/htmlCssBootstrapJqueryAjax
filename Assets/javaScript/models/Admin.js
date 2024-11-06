import { Validation } from "./Validation.js";
import { User } from "./User.js";
export class Admin extends User {
    userType;
    adminName;
    adminPassword;
    constructor() { super(); }
    create([fName, lName, email, contactNum, address, bio, profilePic, username, adminPass]) {
        super.create([fName, lName, email, contactNum, address, bio, profilePic]);
        this.setAdminName(username);
        this.setAdminPassword(adminPass);
        this.setUserType("Admin");
    }
    createAdmin(dataArr) {
        this.validator = new Validation();
        this.validator.createAdmin(dataArr);
    }
    update([fName, lName, email, contactNum, address, bio, profilePic, username, adminPass]) {
        super.update([fName, lName, email, contactNum, address, bio, profilePic]);
        this.setAdminName(username);
        this.setAdminPassword(adminPass);
        this.setUserType("Admin");
    }
    adminExists() {
        this.validator = new Validation()
        if (this.validator.adminExists()) { return true; }
    }
    setAdminName(username) {
        this.adminName = username;
    }
    getAdminName() {
        return this.adminName;
    }
    setAdminPassword(pass) {
        this.adminPassword = pass;
    }
    getAdminPassword() {
        return this.adminPassword;
    }
    setUserType(type) {
        this.userType = type;
    }
    getUserType() {
        return this.userType;
    }
};