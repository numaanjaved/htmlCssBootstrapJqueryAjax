export class loginValidation {
    matchUsername(userName) {
        let LS = JSON.parse(localStorage.getItem('Data'));
        let admin = LS.find(rec => rec.userType === "Admin");
        return admin.adminName !== $(userName).val() ? false : true;
    }
    matchPassword(userPass) {
        let LS = JSON.parse(localStorage.getItem('Data'));
        let admin = LS.find(rec => rec.userType === "Admin");
        return admin.adminPassword !== $(userPass).val() ? false : true;
    }
    matchCredentials(userName, userPass) {
        let userCheck = true;
        if (!this.matchUsername(userName) || !this.matchPassword(userPass)) {
            userCheck = false;
        }
        return userCheck;
    }
};