import { userFirstName, userLastName, userEmail, userContactNumber, userAddress, userBio } from "../views/homeView/elementReferences.js";
import { nullCheck } from "../views/homeView/form/errorMessages.js";
import { User } from "../models/User.js";
let attributes = [
    { attr: userFirstName },
    { attr: userLastName },
    { attr: userEmail },
    { attr: userContactNumber },
    { attr: userAddress },
    { attr: userBio },
]
export let formValidation = () => {
    let validationCheck = true;
    let newUser = new User();
    $.each(attributes, (index, value) => {
        if (!newUser.isNull(value.attr)) {
            validationCheck = false; nullCheck(value.attr, validationCheck);
        } else { validationCheck = true; nullCheck(value.attr, validationCheck); }
    });

    if (validationCheck) {
        console.log(`Validation Successful`);
    } else {
        console.log(`ReEnter Values`);
    }
}