import { Validation } from "./Validation.js";
export class User {
    static id = 0;
    userType;
    userId;
    firstName;
    lastName;
    email;
    contactNum;
    address;
    bio;
    pic;
    validator;

    constructor() {
        let LS = JSON.parse(localStorage.getItem('Data'));
        if (LS !== null) {
            let largest = 0;
            let trimId;
            $.each(LS, (ind, record) => {
                let id = record.userId;
                trimId = id.substring(6);
                let toNum = parseInt(trimId);
                if (toNum > largest) { largest = toNum; }
            });
            User.id = largest;
        };
    }
    create([fName, lName, email, contactNum, address, bio, profilePic]) {
        User.id += 1;
        this.setUserType("User")
        this.setUserId(`prof00${User.id}`);
        this.setFName(fName);
        this.setLName(lName);
        this.setEmail(email);
        this.setContactNum(contactNum);
        this.setAddress(address);
        this.setBio(bio);
        this.setProfilePic(profilePic);
    }
    Read(id) {
        let LS = JSON.parse(localStorage.getItem('Data'));
        let record = LS.find(record => record.userId === id);
        if (record) { return record; }
    }
    Update(id) {
        let LS = JSON.parse(localStorage.getItem('Data'));
        let record = LS.findIndex(record => record.userId === id);
        return record;
    }
    Delete(id) {
        let LS = JSON.parse(localStorage.getItem('Data'));
        let record = LS.findIndex(record => record.userId === id);
        LS.splice(record, 1);
        let tempArr = LS;
        localStorage.setItem('Data', JSON.stringify(tempArr));
    }

    update([fName, lName, email, contactNum, address, bio, profilePic]) {
        this.setFName(fName);
        this.setLName(lName);
        this.setEmail(email);
        this.setContactNum(contactNum);
        this.setAddress(address);
        this.setBio(bio);
        this.setProfilePic(profilePic);
    }
    updateUser(index, dataArray) {
        this.validator = new Validation();
        this.validator.updateUser(index, dataArray)
    }
    isNull(attr) {
        this.validator = new Validation();
        return this.validator.isNull(attr) ? true : false;
    }
    matchRegex(attr, regex) {
        this.validator = new Validation();
        return this.validator.matchRegex(attr, regex) ? true : false;
    }
    checkLength(attr, len) {
        this.validator = new Validation();
        return this.validator.checkLength(attr, len) ? true : false;
    }
    profilePicValidation(img) {
        this.validator = new Validation();
        return this.validator.profilePicVal(img) ? true : false;
    }
    createUser(dataArr) {
        this.validator = new Validation();
        this.validator.createUser(dataArr);
    }
    setUserId(userId) {
        this.userId = userId;
    }

    getUserId() {
        return this.userId;
    }
    setFName(fname) {
        this.firstName = fname;
    }
    getFname() {
        return this.firstName;
    }
    setLName(lname) {
        this.lastName = lname;
    }
    getLname() {
        return this.lastName;
    }
    setEmail(email) {
        this.email = email;
    }
    getEmail() {
        return this.email;
    }
    setContactNum(num) {
        this.contactNum = num;
    }
    getContactNum() {
        return this.contactNum;
    }
    setAddress(add) {
        this.address = add;
    }
    getAddress() {
        return this.address;
    }
    setBio(bio) {
        this.bio = bio;
    }
    getBio() {
        return this.bio;
    }
    setProfilePic(picture) {
        this.pic = picture;
    }
    getProfilePic() {
        return this.pic;
    }
    setUserType(type) {
        this.userType = type;
    }
    getUserType() {
        return this.userType;
    }
};