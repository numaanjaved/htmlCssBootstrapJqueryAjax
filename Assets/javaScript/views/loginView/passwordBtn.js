import { errorNotification } from "../homeView/Alerts/errorNotification.js";
let passBtn = $("#passwordBtn")
$(passBtn).click((e) => {
    try {
        let icon = $(passBtn).find("i");
        if (icon.hasClass("fa-eye")) {
            $(passBtn).html(`<i class="fa-regular fa-eye-slash"></i>`);
            $(`#login_userPassword`).attr("type", "text");
        } else {
            $(passBtn).html(`<i class="fa-regular fa-eye"></i>`);
            $(`#login_userPassword`).attr("type", "password");
        }
    } catch (error) { errorNotification(`Error occurred while viewing password`); }
});