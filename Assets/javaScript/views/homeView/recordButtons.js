import { modal } from "./modal.js";
import { User } from "../../models/User.js"
import { usersDataMainContainer } from "./record.js";
import { refreshRecords } from "./refreshRecords.js"
import { selectedIndexUpdate, userFirstName, userLastName, userEmail, userContactNumber, userAddress, userBio, adminUsername, adminPassword, selectUser } from "./elementReferences.js";
import { formImg } from "./form/imageUpload.js";
import { createNewElement } from "../components/createElement.js";
import { accountDeleted } from "./Alerts/accountDelete.js";
let readProfile = (id) => {
    let userInstance = new User();
    let record = userInstance.Read(id)
    modal([record.pic, `${record.firstName} ${record.lastName}`, record.email, record.contactNum, record.address, record.bio, record.userId]);
    let allRecords = $(`.individual_user_data`);
    $.each(allRecords, (ind, rec) => { $(rec).css("filter", "blur(3px)") });
    $(".user_modal").css("display", "flex");
    $(usersDataMainContainer).css("minHeight", "600px")
    $(window).scrollTop("900");
}
let delProfile = (id) => {
    let LS = JSON.parse(localStorage.getItem('Data'));
    let currAcc = LS.find(user => user.userId === id);
    accountDeleted(currAcc.pic);
    let userInstance = new User();
    userInstance.Delete(id);
    refreshRecords();
}
let hideAndScroll = () => {
    $(".select_container").attr("style", "display: none !important;");
    $(window).scrollTop("100");
    $("#submit_btn").html("Update");
    $("#reset_btn").html("Cancel");
}
let feedData = (recData) => {
    $(formImg).attr("src", recData.pic)
    userFirstName.val(recData.firstName);
    userLastName.val(recData.lastName);
    userEmail.val(recData.email);
    userContactNumber.val(recData.contactNum);
    userAddress.val(recData.address);
    userBio.val(recData.bio);
    $(selectUser).val(recData.userType);
    hideAndScroll();
    if (recData.userType === "Admin") {
        let adminCont = $(".admin_attr_container ")[0];
        adminCont.style.display = "flex";
        $(".admin_heading").css("display", "block");
        adminUsername.val(recData.adminName);
        adminPassword.val(recData.adminPassword);
    }
}
let updateProfile = (id) => {
    let LS = JSON.parse(localStorage.getItem('Data'));
    let userClassInstance = new User();
    let record = userClassInstance.Update(id);
    let currRec = selectedIndexUpdate(record);
    feedData(LS[currRec]);
}
export let readUpdateDelete = (userDataContainer, ProfileBtnOpsContainer, id) => {
    let profileReadBtn = createNewElement(["button", "Ops_Buttons btn btn-success", ProfileBtnOpsContainer, `Read`, { id: "read_btn" }]);
    let profileUpdateBtn = createNewElement(["button", "Ops_Buttons btn btn-primary", ProfileBtnOpsContainer, `Update`, { id: "update_btn" }]);
    let profileDelBtn = createNewElement(["button", "Ops_Buttons btn btn-danger", ProfileBtnOpsContainer, `Delete`, { id: "delete_btn" }]);
    $(profileReadBtn).click(e => readProfile(id));
    $(profileDelBtn).click(e => delProfile(id));
    $(profileUpdateBtn).click(e => updateProfile(id));
};