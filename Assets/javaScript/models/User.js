import { Validation } from "./Validation.js";
export class User {
    static id = 0;
    userId;
    firstName;
    lastName;
    email;
    contactNum;
    address;
    bio;
    pic;
    validation;
    create([fName, lName, email, contactNum, address, bio, profilePic]) {
        User.id += 1;
        this.setUserId(User.id);
        this.setFName(fName);
        this.setLName(lName);
        this.setEmail(email);
        this.setContactNum(contactNum);
        this.setAddress(address);
        this.setBio(bio);
        this.setProfilePic(profilePic);
    }

    isNull(attr) {
        this.validation = new Validation();
        return this.validation.isNull(attr) ? true : false;
    }
    matchRegex(attr, regex) {
        this.validation = new Validation();
        return this.validation.matchRegex(attr, regex) ? true : false;
    }
    checkLength(attr, len) {
        this.validation = new Validation();
        return this.validation.checkLength(attr, len) ? true : false;
    }
    profilePicValidation(img) {
        this.validation = new Validation();
        return this.validation.profilePicVal(img) ? true : false;
    }
    setUserId(userId) {
        this.userId = `prof00${userId}`;
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
};