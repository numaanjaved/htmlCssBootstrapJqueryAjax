export class loginValidation {
    matchUsername(userName) {
        let userNameCheck = true
        let LS = JSON.parse(localStorage.getItem('Data'));
        let admin = LS.find(rec => rec.userType === "Admin");
        if (admin.adminName !== $(userName).val()) { userNameCheck = false; }
        return userNameCheck;
    }
    matchPassword(userPass) {
        let userPassCheck = true;
        let LS = JSON.parse(localStorage.getItem('Data'));
        let admin = LS.find(rec => rec.userType === "Admin");
        if (admin.adminPassword !== $(userPass).val()) { userPassCheck = false; }
        return userPassCheck;
    }
    matchCredentials(userName, userPass) {
        let userCheck = true;
        if (!this.matchUsername(userName) || !this.matchPassword(userPass)) {
            userCheck = false;
        }
        return userCheck;
    }
};