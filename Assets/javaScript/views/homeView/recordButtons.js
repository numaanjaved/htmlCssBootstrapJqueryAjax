import { modal } from "./modal.js";
import { User } from "../../models/User.js"
import { usersDataMainContainer } from "./record.js";
import { refreshRecords } from "./refreshRecords.js"
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
    let userInstance = new User();
    userInstance.Delete(id);
    refreshRecords();
}
let updateProfile = (id) => {
    console.log(id)
}
export let readUpdateDelete = (userDataContainer, ProfileBtnOpsContainer, id) => {
    let profileReadBtn = createNewElement(["button", "Ops_Buttons btn btn-success", ProfileBtnOpsContainer, `Read`, { id: "read_btn" }]);
    let profileUpdateBtn = createNewElement(["button", "Ops_Buttons btn btn-primary", ProfileBtnOpsContainer, `Update`, { id: "update_btn" }]);
    let profileDelBtn = createNewElement(["button", "Ops_Buttons btn btn-danger", ProfileBtnOpsContainer, `Delete`, { id: "delete_btn" }]);
    $(profileReadBtn).click(e => readProfile(id));
    $(profileDelBtn).click(e => delProfile(id));
    $(profileUpdateBtn).click(e => updateProfile(id));
};