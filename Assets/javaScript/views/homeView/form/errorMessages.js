import { errorNotification } from "../Alerts/errorNotification.js";
let errorMsg = (attribute, statusMsg) => {
    try {
        let attributeName = errorContainers[$(attribute).attr("name")];
        errorNotification(`${attributeName}: ${statusMsg.errorMsg}`);
    } catch (error) { errorNotification(`Error in errorMsg`); }
};
let successMsg = () => {
    try { $(`.errors_container`).html(``) } catch (error) { errorNotification(`Error in Success Message`); }
};
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
export let nullCheck = (attr, check) => {
    try { if (check) { successMsg() } else { errorMsg(attr, errorsArray[0]); } } catch (error) { errorNotification(`Error in null Check`); }
};
export let regexCheck = (attr, check) => {
    try { if (check) { successMsg() } else { errorMsg(attr, errorsArray[1]); } } catch (err) { errorNotification(`Error in regex Check`); }
};
export let lenCheck = (attr, check) => {
    try {
        if (check) { successMsg() } else { errorMsg(attr, errorsArray[2]); }
    } catch (error) { errorNotification(`Error in Length Check`); }
};
export let profileImgCheck = (attr, check) => {
    try { if (check) { successMsg() } else { errorMsg(attr, errorsArray[3]); } } catch (error) { errorNotification(`Error in profile Image check`); }
};
export let adminAccCheck = (attr, check = true) => { try { if (check) { successMsg() } else { errorMsg(attr, errorsArray[4]); } } catch (error) { errorNotification(`Error in Admin Account Check`); } };