export let readUpdateDelete = (userDataContainer, ProfileBtnOpsContainer, id) => {
    let profileReadBtn = createNewElement(["button", "Ops_Buttons", ProfileBtnOpsContainer, `Read`, { id: "read_btn" }]);
    let profileUpdateBtn = createNewElement(["button", "Ops_Buttons", ProfileBtnOpsContainer, `Update`, { id: "update_btn" }]);
    let profileDelBtn = createNewElement(["button", "Ops_Buttons", ProfileBtnOpsContainer, `Delete`, { id: "delete_btn" }]);
    profileReadBtn.addEventListener("click", e => readProfile(id));
    profileDelBtn.addEventListener("click", e => delProfile(id));
    profileUpdateBtn.addEventListener("click", e => updateProfile(id));
};