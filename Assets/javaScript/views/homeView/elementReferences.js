import { errorNotification } from "./Alerts/errorNotification.js";
export let usersDataArray = [];
export let selectedIndex = null;
export let selectedIndexUpdate = (value) => {
    try {
        selectedIndex = value;
        return selectedIndex;
    } catch (error) { errorNotification(`Error in Selected Index Update`); }
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