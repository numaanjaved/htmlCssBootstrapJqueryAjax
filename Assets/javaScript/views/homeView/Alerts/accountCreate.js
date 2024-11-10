import { createNewElement } from "../../components/createElement.js";


export let accountCreated = (src, id) => {
    let notificationContainer = $("<div></div>");
    notificationContainer.addClass("notification_container");
    $(".main").prepend(notificationContainer)
    let pictureContainer = createNewElement(["div", "picture_container", ".notification_container"]);
    let figureTag = createNewElement(["figure", null, pictureContainer]);
    createNewElement(["img", "notificationPic", figureTag, null, { src: src, alt: "User Profile Picture", id: "notification_Img" }])
    let textContainer = createNewElement(["div", "text_container successCustom ", ".notification_container"]);
    createNewElement(["h3", "notification_heading", textContainer, `Profile Created Successfully!`]);
    createNewElement(["button", "notification_close_btn", textContainer, `<i class="fa-solid fa-circle-xmark"></i>`, { id: "notificationCloseBtn", type: "button" }]);
};

$(document).on("click", "#notificationCloseBtn", () => { $(".notification_container").remove(); });