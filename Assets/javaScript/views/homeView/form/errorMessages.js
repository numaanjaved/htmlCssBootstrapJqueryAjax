import { FnameErr, LnameErr, emailErr, contactErr, addressErr, bioErr } from "../elementReferences.js";

let errorMsg = (statusMsg) => {
    let msg = errorContainers[$(statusMsg).attr("name")];
    $(msg).css("display", "block");
    $(msg).html(`Enter Value in the field`);

}
let successMsg = (statusMsg) => {
    let msg = errorContainers[$(statusMsg).attr("name")];
    $(msg).css("display", "none");
    $(msg).html(``);
}

let errorContainers = {
    user_Fname: FnameErr,
    user_Lname: LnameErr,
    user_email: emailErr,
    user_contact: contactErr,
    user_address: addressErr,
    user_bio: bioErr,
}
export let nullCheck = (attr, check) => check ? successMsg(attr) : errorMsg(attr);