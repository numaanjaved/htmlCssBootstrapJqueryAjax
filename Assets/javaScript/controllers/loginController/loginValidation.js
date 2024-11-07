import { Admin } from "../../models/Admin.js"
import { userName, userPassword } from "../../views/loginView/elementReferences.js";
import { nullCheck } from "../../views/loginView/loginErrMsg.js";
console.log()
$(".login_form").submit((e) => {
    e.preventDefault();
    let validationCheck = true;
    let adminInstance = new Admin();
    if (!adminInstance.isNull(userName) || !adminInstance.isNull(userPassword)) {
        validationCheck = false;
        nullCheck(userName, false);
    } else { nullCheck(userName, true); };
    if (validationCheck) {
        console.log(`Successful`)
    } else {
        console.log(`Recheck`);
    }
})