import { createNewElement } from "../../components/createElement.js";
import { removeNotification } from "./remove.js";
let containerId = 0;
let errorsContainer = createNewElement(["div", "errors_container d-flex flex-column gap-2", ".notifications_container"]);

export let errorNotification = (errorMsg) => {
    containerId += 1;
    let errNotificationContainer = $("<div></div>");
    errNotificationContainer.addClass(`err_notification_container cont${containerId}`);
    $(errNotificationContainer).attr("id", `errNotificationContainer${containerId}`);
    $(".errors_container").prepend(errNotificationContainer);
    createNewElement(["div", `err_text_container errorCustom errTextCont${containerId}`, `.cont${containerId}`]);
    createNewElement(["h3", "notification_err_heading", `.errTextCont${containerId}`, errorMsg]);
    createNewElement(["button", "err_notification_close_btn", `.errTextCont${containerId}`, `<i i class="fa-solid fa-circle-xmark" ></i > `, { id: `errNotificationCloseBtn`, type: "button" }]);
    removeNotification($(errNotificationContainer).attr("id"));
};

$(document).on("click", "#errNotificationCloseBtn", (e) => {
    let notification = e.target.parentElement.parentElement.parentElement;
    $(notification).remove();
});