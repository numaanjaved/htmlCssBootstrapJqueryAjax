import { createNewElement } from "../../components/createElement.js";
import { errorNotification } from "./errorNotification.js";
import { removeNotification } from "./remove.js";
let deleteAccCounter = 0;
export let accountDeleted = (src) => {
    try {
        deleteAccCounter += 1;
        let notificationContainer = $("<div></div>");
        notificationContainer.addClass(`notification_container deleteCont${deleteAccCounter}`);
        $(notificationContainer).attr("id", `delNotificationContainer${deleteAccCounter}`);
        $(".notifications_container").prepend(notificationContainer);
        let pictureContainer = createNewElement(["div", `picture_container delPicContainer${deleteAccCounter}`, `.deleteCont${deleteAccCounter}`]);
        let figureTag = createNewElement(["figure", `redBg redBorder delFigTag${deleteAccCounter}`, `.delPicContainer${deleteAccCounter}`]);
        createNewElement(["img", "delNotificationPic", `.delFigTag${deleteAccCounter}`, null, { src: src, alt: "User Profile Picture", id: "notification_Img" }]);
        let textContainer = createNewElement(["div", `redBg redBorder text_container delTextCont${deleteAccCounter}`, `.deleteCont${deleteAccCounter}`]);
        createNewElement(["h3", "notification_heading", `.delTextCont${deleteAccCounter}`, `Profile Deleted Successfully!`]);
        createNewElement(["button", "notification_close_btn notificationClose", `.delTextCont${deleteAccCounter}`, `<i class="fa-solid fa-circle-xmark"></i>`, { id: "accDelNotificationCloseBtn", type: "button" }]);
        removeNotification($(notificationContainer).attr("id"));
    } catch (error) { errorNotification(`Error in account Deleted Notification`); }
};

$(document).on("click", "#accDelNotificationCloseBtn", (e) => {
    let notification = e.target.parentElement.parentElement.parentElement;
    $(notification).remove();
});