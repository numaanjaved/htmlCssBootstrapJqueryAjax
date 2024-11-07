import { Admin } from "../../models/Admin.js"
import { userName, userPassword } from "../../views/loginView/elementReferences.js";
import { invalidLogin, nullCheck } from "../../views/loginView/loginErrMsg.js";
import { redirect } from "./login.js";

export let credentialsValidation = () => {
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
        return true;
    } else { return false; }
}
let reset = () => {
    $(userName).val("");
    $(userPassword).val("");
    $(".invalid_login_Err").html(``);
};
$(".login_form").submit((e) => {
    e.preventDefault();
    redirect();
});