import { errorNotification } from "../../views/homeView/Alerts/errorNotification.js"
let errorMsg = (attribute, statusMsg) => {
    errorNotification(`Credentials: ${statusMsg.errorMsg}`);
};
let successMsg = (attr) => { $(".notifications_container").html(``); };
let errorsArray = [
    { "errorCode": "isNull", "errorMsg": "Please Enter Data in the field" },
    { "errorCode": "invalid", "errorMsg": "Please Enter Valid Credentials" },
];
export let nullCheck = (attr, check) => {
    if (check) { successMsg(attr); } else { errorMsg(attr, errorsArray[0]); }
};
export let invalidLogin = (attr, check = true) => {
    if (check) { successMsg(attr) } else { errorMsg(attr, errorsArray[1]) }
};