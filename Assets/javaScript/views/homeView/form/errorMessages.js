import { FnameErr, LnameErr, emailErr, contactErr, addressErr, bioErr, image_error_msg, userNameErr, userPassErr, userTypeErr } from "../elementReferences.js";
import { formImg } from "./imageUpload.js";
let errorMsg = (attribute, statusMsg) => {
    let msg = errorContainers[$(attribute).attr("name")];
    $(msg).css("display", "block").html(`${statusMsg.errorCode}: ${statusMsg.errorMsg}`);
};
let successMsg = (attr) => {
    let msg = errorContainers[$(attr).attr("name")];
    $(msg).css("display", "none").html(``);
};
let errorsArray = [
    { "errorCode": "isNull", "errorMsg": "Please Enter Data in the field" },
    { "errorCode": "matchFormat", "errorMsg": "Please Match The Requested Format" },
    { "errorCode": "limitExceed", "errorMsg": "Character Limit Exceeded" },
    { "errorCode": "noPicture", "errorMsg": "Please Upload Profile Picture" },
    { "errorCode": "adminFound", "errorMsg": "There is Already an Admin Account" },
];
let errorContainers = {
    user_Fname: FnameErr,
    user_Lname: LnameErr,
    user_email: emailErr,
    user_contact: contactErr,
    user_address: addressErr,
    user_bio: bioErr,
    profile_img: image_error_msg,
    admin_name: userNameErr,
    admin_password: userPassErr,
    select_user: userTypeErr
};
export let nullCheck = (attr, check) => { if (check) { successMsg(attr) } else { errorMsg(attr, errorsArray[0]); } };
export let regexCheck = (attr, check) => { if (check) { successMsg(attr) } else { errorMsg(attr, errorsArray[1]); } };
export let lenCheck = (attr, check) => { if (check) { successMsg(attr) } else { errorMsg(attr, errorsArray[2]); } };
export let profileImgCheck = (attr, check) => { if (check) { successMsg(attr) } else { errorMsg(attr, errorsArray[3]); } };
export let adminAccCheck = (attr, check = true) => { if (check) { successMsg(attr) } else { errorMsg(attr, errorsArray[4]); } };