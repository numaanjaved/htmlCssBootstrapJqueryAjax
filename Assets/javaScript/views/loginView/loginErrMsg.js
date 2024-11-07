import { loginErr } from "./elementReferences.js";

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
    { "errorCode": "invalid", "errorMsg": "Please Enter Valid Credentials" },
];
let errorContainers = {
    login_userName: loginErr,
    login_userPassword: loginErr
};
export let nullCheck = (attr, check) => check ? successMsg(attr) : errorMsg(attr, errorsArray[0]);