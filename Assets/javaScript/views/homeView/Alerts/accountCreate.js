import { createNewElement } from "../../components/createElement.js";
import { errorNotification } from "./errorNotification.js";
import { removeNotification } from "./remove.js";
let createAccCounter = 0;
export let accountCreated = (src) => {
    try {
        createAccCounter += 1;
        let notificationContainer = $("<div></div>");
        notificationContainer.addClass(`notification_container successCont${createAccCounter}`);
        $(notificationContainer).attr("id", `createNotificationContainer${createAccCounter}`);
        $(".notifications_container").prepend(notificationContainer);
        let pictureContainer = createNewElement(["div", `picture_container picContainer${createAccCounter}`, `.successCont${createAccCounter}`]);
        let figureTag = createNewElement(["figure", `greenBg greenBorder figTag${createAccCounter}`, `.picContainer${createAccCounter}`]);
        createNewElement(["img", "notificationPic", `.figTag${createAccCounter}`, null, { src: src, alt: "User Profile Picture", id: "notification_Img" }]);
        let textContainer = createNewElement(["div", `greenBg greenBorder text_container textCont${createAccCounter}`, `.successCont${createAccCounter}`]);
        createNewElement(["h3", "notification_heading", `.textCont${createAccCounter}`, `Profile Created Successfully!`]);
        createNewElement(["button", "notification_close_btn notificationClose", `.textCont${createAccCounter}`, `<i class="fa-solid fa-circle-xmark"></i>`, { id: "successNotificationCloseBtn", type: "button" }]);
        removeNotification($(notificationContainer).attr("id"));
    } catch (error) { errorNotification(`Error in account created notification`); }
};

$(document).on("click", "#successNotificationCloseBtn", (e) => {
    let notification = e.target.parentElement.parentElement.parentElement;
    $(notification).remove();
});