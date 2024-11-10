import { createNewElement } from "../../components/createElement.js";


let accountCreated = (src, id) => {
    let notificationContainer = $("<div></div>");
    notificationContainer.addClass("notification_container");
    console.log(notificationContainer)
    $(".main").prepend(notificationContainer)
    let pictureContainer = createNewElement(["div", "picture_container", ".notification_container"]);
    let figureTag = createNewElement(["figure", null, pictureContainer]);
    createNewElement(["img", "notificationPic", figureTag, null, { src: src, alt: "User Profile Picture", id: "notification_Img" }])
    let textContainer = createNewElement(["div", "text_container", ".notification_container"]);
    let notificationHeading = createNewElement(["h3", "notification_heading", textContainer, `Profile "<span>${id}</span>" Created Successfully!`]);
    let notificationHideBtn = createNewElement(["btn", "notification_close_btn", textContainer, `<i class="fa-solid fa-circle-xmark"></i>`, { id: "notification_close_btn" }]);
}

accountCreated("https://static.vecteezy.com/system/resources/thumbnails/001/840/612/small_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg", "prof001");

window.addEventListener("load", () => {
    $(".notification_container").css("right", "0")
})