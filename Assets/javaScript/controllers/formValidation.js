import { userFirstName, userLastName, userEmail, userContactNumber, userAddress, userBio } from "../views/homeView/elementReferences.js";
import { formImg } from "../views/homeView/form/imageUpload.js";
import { lenCheck, nullCheck, profileImgCheck, regexCheck, } from "../views/homeView/form/errorMessages.js";
import { User } from "../models/User.js";
export let selectedIndex = null;
export let usersDataArray = [];
let attributes = [
    { attr: userFirstName, regex: /^[a-zA-Z\s]*$/, length: 30 },
    { attr: userLastName, regex: /^[a-zA-Z\s]*$/, length: 30 },
    { attr: userEmail, regex: /^[a-zA-Z0-9]+(?:[._][a-zA-Z0-9]+)*@[A-Za-z]+\.[A-Za-z]{2,}$/, length: 100 },
    { attr: userContactNumber, regex: /^[0-9]{2,}[0-9]{7,}$/, length: 20 },
    { attr: userAddress, regex: /^[a-zA-Z0-9\s,.'-]*$/, length: 150 },
    { attr: userBio, regex: /^[a-zA-Z0-9\s,.'-]*$/, length: 300 }
];
export let formValidation = () => {
    let validationCheck = true;
    let newUser = new User();
    $.each(attributes, (index, value) => {
        let isValid = true;
        if (!newUser.isNull(value.attr)) {
            isValid = false;
            nullCheck(value.attr, false);
        } else {
            nullCheck(value.attr, true);
            if (!newUser.matchRegex(value.attr, value.regex)) {
                isValid = false;
                regexCheck(value.attr, false);
            } else {
                regexCheck(value.attr, true);
                if (!newUser.checkLength(value.attr, value.length)) {
                    isValid = false;
                    lenCheck(value.attr, false);
                } else { lenCheck(value.attr, true) }
            }
        }
        if (!isValid) { validationCheck = false; }
    });
    if (!newUser.profilePicValidation(formImg)) { validationCheck = false; profileImgCheck(formImg); }
    if (validationCheck) {
        let formData = [$(userFirstName).val(), $(userLastName).val(), $(userEmail).val(), $(userContactNumber).val(), $(userAddress).val(), $(userBio).val(), $(formImg).attr("src")]
        newUser.create(formData);
        usersDataArray.push(formData);
        console.log(`Validation Successful`);
        console.log(newUser)
    } else {
        console.log(`ReEnter Values`);
    }
};