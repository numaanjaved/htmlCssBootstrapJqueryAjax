import { userFirstName, userLastName, userEmail, userContactNumber, userAddress, userBio } from "../views/homeView/elementReferences.js";
import { User } from "../models/User.js";
export let formValidation = () => {
    let validationCheck = true;
    let newUser = new User();
    if (!newUser.isNull(userFirstName)) {
        validationCheck = false;
    }
    if (validationCheck) {
        console.log(`Validation Successful`);
    } else {
        console.log(`ReEnter Values`);
    }
}