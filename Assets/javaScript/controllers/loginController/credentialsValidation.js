import { Admin } from "../../models/Admin.js"
import { userName, userPassword } from "../../views/loginView/elementReferences.js";
import { invalidLogin, nullCheck } from "../../views/loginView/loginErrMsg.js";
console.log()
$(".login_form").submit((e) => {
    e.preventDefault();
    let validationCheck = true;
    let adminInstance = new Admin();
    if (!adminInstance.isNull(userName) || !adminInstance.isNull(userPassword)) {
        validationCheck = false;
        nullCheck(userName, false);
    } else {
        nullCheck(userName, true);
        if (!adminInstance.matchCredentials(userName, userPassword)) {
            validationCheck = false;
            invalidLogin(userName, false)
        }
    };
    if (validationCheck) {
        reset();
    } else {
        console.log(`Recheck`);
    }
});

let reset = () => {
    $(userName).val("");
    $(userPassword).val("");
    $(".invalid_login_Err").html(``);
};