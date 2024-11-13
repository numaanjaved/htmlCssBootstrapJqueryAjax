import { createNewElement } from "../../components/createElement.js";
let containerId = 0;

export let errorNotification = (errorMsg) => {
    try {
        containerId += 1;
        let errNotificationContainer = $("<div></div>");
        errNotificationContainer.addClass(`err_notification_container cont${containerId}`);
        $(".notifications_container").prepend(errNotificationContainer);
        createNewElement(["div", `err_text_container errorCustom errTextCont${containerId}`, `.cont${containerId}`]);
        createNewElement(["h3", "notification_err_heading", `.errTextCont${containerId}`, errorMsg]);
        createNewElement(["button", "err_notification_close_btn", `.errTextCont${containerId}`, `<i i class="fa-solid fa-circle-xmark" ></i > `, { id: `errNotificationCloseBtn`, type: "button" }]);
    } catch (error) { errorNotification(`Error in error notification`); }
};

$(document).on("click", "#errNotificationCloseBtn", (e) => {
    let notification = e.target.parentElement.parentElement.parentElement;
    $(notification).remove();
});