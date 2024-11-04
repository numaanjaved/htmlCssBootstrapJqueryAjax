class User {
    static id = 0;
    userId;
    firstName;
    lastName;
    email;
    contactNum;
    address;
    bio;
    create([fName, lName, email, contactNum, address, bio]) {
        User.id += 1;
        this.setUserId(User.id);
        this.setFName(fName);
        this.setLName(lName);
        this.setEmail(email);
        this.setContactNum(contactNum);
        this.setAddress(address);
        this.setBio(bio);
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
};