import { selectedIndexUpdate, userFirstName, userLastName, userEmail, userContactNumber, userAddress, userBio, selectUser, adminUsername, adminPassword, } from "../elementReferences.js"
import { formImg } from "./imageUpload.js";

export let resetForm = () => {
    selectedIndexUpdate(null);
    $(userFirstName).val('');
    $(userLastName).val('');
    $(userEmail).val('');
    $(userContactNumber).val('');
    $(userAddress).val('');
    $(userBio).val('');
    $(selectUser).val('User');
    $(adminUsername).val('');
    $(adminPassword).val('');
    $(formImg).attr("src", "./Assets/images/default_profile.png");
    $("#submit_btn").html("Submit");
    $("#reset_btn").html("Reset");
    $(".select_container").attr("style", "display: flex !important;");
    let adminCont = $(".admin_attr_container ")[0];
    adminCont.style.display = "none";
    $(".admin_heading").css("none", "block");
}

$("#reset_btn").click(() => {
    resetForm();
})