import { userFirstName, userLastName, userEmail, userContactNumber, userAddress, userBio } from "../views/homeView/elementReferences.js";
import { User } from "../models/User.js";
export let formValidation = () => {
    let validationCheck = true;
    let newUser = new User();
    if (!newUser.isNull(userFirstName)) { validationCheck = false; }
    if (!newUser.isNull(userLastName)) { validationCheck = false; }
    if (!newUser.isNull(userEmail)) { validationCheck = false; }
    if (!newUser.isNull(userContactNumber)) { validationCheck = false; }
    if (!newUser.isNull(userAddress)) { validationCheck = false; }
    if (!newUser.isNull(userBio)) { validationCheck = false; }

    if (validationCheck) {
        console.log(`Validation Successful`);
    } else {
        console.log(`ReEnter Values`);
    }
}