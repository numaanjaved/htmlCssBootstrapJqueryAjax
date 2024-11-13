import { createNewElement } from "../../components/createElement.js";
import { errorNotification } from "./errorNotification.js";

let updateAccCounter = 0;
export let accountUpdated = (src) => {
    try {
        updateAccCounter += 1;
        let notificationContainer = $("<div></div>");
        notificationContainer.addClass(`notification_container updateCont${updateAccCounter}`);
        $(".notifications_container").prepend(notificationContainer);
        let pictureContainer = createNewElement(["div", `picture_container updatePicContainer${updateAccCounter}`, `.updateCont${updateAccCounter}`]);
        let figureTag = createNewElement(["figure", `updateFigTag${updateAccCounter} blueBg blueBorder`, `.updatePicContainer${updateAccCounter}`]);
        createNewElement(["img", "notificationPic", `.updateFigTag${updateAccCounter}`, null, { src: src, alt: "User Profile Picture", id: "notification_Img" }]);
        let textContainer = createNewElement(["div", `text_container blueBg blueBorder updateTextCont${updateAccCounter}`, `.updateCont${updateAccCounter}`]);
        createNewElement(["h3", "notification_heading", `.updateTextCont${updateAccCounter}`, `Profile Updated Successfully!`]);
        createNewElement(["button", "notification_close_btn notificationClose", `.updateTextCont${updateAccCounter}`, `<i class="fa-solid fa-circle-xmark"></i>`, { id: "updateNotificationCloseBtn", type: "button" }]);
    } catch (error) { errorNotification(`Error in account update notification`); }
};

$(document).on("click", "#updateNotificationCloseBtn", (e) => {
    let notification = e.target.parentElement.parentElement.parentElement;
    $(notification).remove();
});