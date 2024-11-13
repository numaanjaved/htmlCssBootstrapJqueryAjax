import { errorNotification } from "../../views/homeView/Alerts/errorNotification.js"
let errorMsg = (attribute, statusMsg) => {
    try {
        errorNotification(`Credentials: ${statusMsg.errorMsg}`);
    } catch (error) { errorNotification(`Error Occurred in Error Msg`) }
};
let successMsg = (attr) => { try { $(".notifications_container").html(``); } catch (err) { errorNotification(`Error Occurred while successMsg`) } };
let errorsArray = [
    { "errorCode": "isNull", "errorMsg": "Please Enter Data in the field" },
    { "errorCode": "invalid", "errorMsg": "Please Enter Valid Credentials" },
];
export let nullCheck = (attr, check) => {
    try {
        if (check) { successMsg(attr); } else { errorMsg(attr, errorsArray[0]); }
    } catch (error) { errorNotification(`Error Occurred in Null Check`); }
};
export let invalidLogin = (attr, check = true) => {
    try {
        if (check) { successMsg(attr) } else { errorMsg(attr, errorsArray[1]) }
    } catch (error) { errorNotification(`Error Occurred in Invalid Login Check`); }
};