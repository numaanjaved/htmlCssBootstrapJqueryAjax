import { userFirstName, userLastName, userEmail, userContactNumber, userAddress, userBio, selectUser, adminUsername, adminPassword, usersDataArray } from "../../views/homeView/elementReferences.js";
import { formImg } from "../../views/homeView/form/imageUpload.js";
import { lenCheck, nullCheck, profileImgCheck, regexCheck, adminAccCheck } from "../../views/homeView/form/errorMessages.js";
import { User } from "../../models/User.js";
import { Admin } from "../../models/Admin.js"
import { refreshRecords } from "../../views/homeView/refreshRecords.js";
import { selectedIndex } from "../../views/homeView/elementReferences.js";
import { resetForm } from "../../views/homeView/form/fromReset.js";
import { accountCreated } from "../../views/homeView/Alerts/accountCreate.js";
import { accountCreateErr } from "../../views/homeView/Alerts/accountCreateErr.js";
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
    let userObj = new User();
    let adminObj = new Admin();
    if ($(selectUser).val() === "Admin") {
        attributes.push({ attr: adminUsername, regex: /^[a-zA-Z0-9_]*$/, length: 30 },
            { attr: adminPassword, regex: /^[a-zA-Z0-9_#@.&$]*$/, length: 30 });
    }
    $.each(attributes, (index, value) => {
        let isValid = true;
        if (!userObj.isNull(value.attr)) {
            isValid = false;
            nullCheck(value.attr, false);
        } else {
            nullCheck(value.attr, true);
            if (!userObj.matchRegex(value.attr, value.regex)) {
                isValid = false;
                regexCheck(value.attr, false);
            } else {
                regexCheck(value.attr, true);
                if (!userObj.checkLength(value.attr, value.length)) {
                    isValid = false;
                    lenCheck(value.attr, false);
                } else { lenCheck(value.attr, true) }
            }
        }
        if (!isValid) { validationCheck = false; }
    });
    if ($(selectUser).val() === "Admin" && selectedIndex === null && adminObj.adminExists()) {
        validationCheck = false;
        adminAccCheck(selectUser, false);
    }
    if (!userObj.profilePicValidation(formImg)) { validationCheck = false; profileImgCheck(formImg); }
    let formData = [$(userFirstName).val(), $(userLastName).val(), $(userEmail).val(), $(userContactNumber).val(), $(userAddress).val(), $(userBio).val(), $(formImg).attr("src")];
    if ($(selectUser).val() === "Admin") { formData.push($(adminUsername).val(), $(adminPassword).val()); }

    if (validationCheck) {
        if (selectedIndex !== null) {
            $(selectUser).val() === "Admin" ? adminObj.updateAdmin(selectedIndex, formData) : userObj.updateUser(selectedIndex, formData);
        } else {
            try {
                $(selectUser).val() === "Admin" ? adminObj.createAdmin(formData) : userObj.createUser(formData);
                accountCreated($(formImg).attr("src"));
            } catch (error) {
                accountCreateErr(`Error While Creating Account`);
            }

        }
        refreshRecords();
        resetForm();
    } else { accountCreateErr(`Error While Creating Account`); }
}
refreshRecords();