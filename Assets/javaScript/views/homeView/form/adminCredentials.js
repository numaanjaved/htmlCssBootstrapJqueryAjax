let selectUser = $(".select_user_type");
selectUser.change((e) => {
    let value = e.target.value;
    if (value === "User") {
        let adminCont = $(".admin_attr_container ")[0];
        adminCont.style.display = "none";
        $(".admin_heading").css("display", "none");
    } else if (value === "Admin") {
        let adminCont = $(".admin_attr_container ")[0];
        adminCont.style.display = "flex";
        $(".admin_heading").css("display", "block");
    }
});