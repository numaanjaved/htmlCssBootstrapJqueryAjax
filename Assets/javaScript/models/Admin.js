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
}



let newUse2 = new Admin();
newUse2.create(["Ahmed", "Kahout", "ahmedkkkk@gmail.com", "0333591891", "Hospital Road CHakwal", "I'm web developer", "./Assets/images/image1.png", "ahmed_admin", "ahmed123"]);
console.log(newUse2)