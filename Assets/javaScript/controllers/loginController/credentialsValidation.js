import { Admin } from "../../models/Admin.js"
import { userName, userPassword } from "../../views/loginView/elementReferences.js";
import { invalidLogin, nullCheck } from "../../views/loginView/loginErrMsg.js";
import { redirect } from "./login.js";
import { errorNotification } from "../../views/homeView/Alerts/errorNotification.js"
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
            invalidLogin(userName, false);
        }
    };
    if (validationCheck) {
        reset();
        return true;
    } else {
        errorNotification(`Invalid Credentials`);
        return false;
    }
}
let reset = () => {
    try {
        $(userName).val("");
        $(userPassword).val("");
        $(".invalid_login_Err").html(``);
    } catch (err) { errorNotification(`Error while form reset`) }
};
$(".login_form").submit((e) => {
    e.preventDefault();
    redirect();
});