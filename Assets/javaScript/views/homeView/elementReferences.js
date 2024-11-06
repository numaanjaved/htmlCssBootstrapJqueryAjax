export let usersDataArray = [];
export let selectedIndex = null;
export let selectedIndexUpdate = (value) => {
    selectedIndex = value;
    return selectedIndex;
}
export let userFirstName = $("#user_Fname");
export let userLastName = $("#user_Lname");
export let userEmail = $("#user_email");
export let userContactNumber = $("#user_contact");
export let userAddress = $("#user_address");
export let userBio = $("#user_bio");
export let bioLimitText = $(".limit_text");
export let bioLimitExceed = $(".limit_exceed_text");
export let selectUser = $("#select_user");
export let adminUsername = $("#admin_name_input");
export let adminPassword = $("#admin_password_input");
// Error messages
export let FnameErr = $(".Fname_error");
export let LnameErr = $(".Lname_error");
export let emailErr = $(".email_error");
export let contactErr = $(".contact_error");
export let addressErr = $(".address_error");
export let bioErr = $(".bio_error");
export let userTypeErr = $(".userType_error");
export let userNameErr = $(".user_admin");
export let userPassErr = $(".user_admin_password");
export let invalidLoginErr = $(".invalid_login_Err");
export let image_error_msg = $("#img_error");