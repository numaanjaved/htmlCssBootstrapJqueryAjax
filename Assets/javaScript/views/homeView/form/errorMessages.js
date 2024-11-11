import { errorNotification } from "../Alerts/errorNotification.js";
let errorMsg = (attribute, statusMsg) => {
    let attributeName = errorContainers[$(attribute).attr("name")];
    errorNotification(`${attributeName}: ${statusMsg.errorMsg}`);
};
let successMsg = () => { $(`notifications_container`).html(``) };
let errorsArray = [
    { "errorCode": "isNull", "errorMsg": "Please Enter Data in the field" },
    { "errorCode": "matchFormat", "errorMsg": "Please Match The Requested Format" },
    { "errorCode": "limitExceed", "errorMsg": "Character Limit Exceeded" },
    { "errorCode": "noPicture", "errorMsg": "Please Upload Profile Picture" },
    { "errorCode": "adminFound", "errorMsg": "There is Already an Admin Account" },
];
let errorContainers = {
    user_Fname: "First Name",
    user_Lname: "Last Name",
    user_email: "Email",
    user_contact: "Contact Number",
    user_address: "Address",
    user_bio: "Bio",
    profile_img: "Profile Picture",
    admin_name: "Username",
    admin_password: "User Password",
    select_user: "User type"
};
export let nullCheck = (attr, check) => { if (check) { successMsg() } else { errorMsg(attr, errorsArray[0]); } };
export let regexCheck = (attr, check) => { if (check) { successMsg() } else { errorMsg(attr, errorsArray[1]); } };
export let lenCheck = (attr, check) => { if (check) { successMsg() } else { errorMsg(attr, errorsArray[2]); } };
export let profileImgCheck = (attr, check) => { if (check) { successMsg() } else { errorMsg(attr, errorsArray[3]); } };
export let adminAccCheck = (attr, check = true) => { if (check) { successMsg() } else { errorMsg(attr, errorsArray[4]); } };