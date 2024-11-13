import { usersDataMainContainer } from "./record.js";
import { createNewElement } from "../components/createElement.js";
import { errorNotification } from "./Alerts/errorNotification.js";
export let modal = ([profilePic, userName, userEmail, userContactNum, userAddress, userBio, id = null]) => {
    try {
        let modalMainContainer = createNewElement(["section", "user_modal flex-row justify-content-between align-items-center", ".individual_user_data_container", null, { id: `${id}` }]);
        let modalImageContainer = createNewElement(["div", "image_container d-flex justify-content-center align-items-center flex-column", modalMainContainer]);
        let modalPicFigureTag = createNewElement(["figure", "profile_figure_tag d-flex justify-content-center align-items-center", modalImageContainer]);
        createNewElement(["img", null, modalPicFigureTag, null, { src: `${profilePic}` }]);
        createNewElement(["p", "profile_info", modalImageContainer, `Profile ID: ${id}`]);
        let modalTextContainer = createNewElement(["div", "modal_text_container", modalMainContainer]);
        createNewElement(["p", "modal_data_headings", modalTextContainer, `Full Name:`]);
        createNewElement(["p", "modal_data", modalTextContainer, `${userName}`]);
        createNewElement(["p", "modal_data_headings", modalTextContainer, `Email:`]);
        createNewElement(["p", "modal_data", modalTextContainer, `${userEmail}`]);
        createNewElement(["p", "modal_data_headings", modalTextContainer, `Contact Number:`]);
        createNewElement(["p", "modal_data", modalTextContainer, `${userContactNum}`]);
        createNewElement(["p", "modal_data_headings", modalTextContainer, `Address:`]);
        createNewElement(["p", "modal_data", modalTextContainer, `${userAddress}`]);
        createNewElement(["p", "modal_data_headings", modalTextContainer, `Profile Description or Bio:`]);
        createNewElement(["p", "modal_data", modalTextContainer, `${userBio}`, { disabled: "disabled" }]);
        let btnContainer = createNewElement(["div", "modal_btn_container w-100 d-flex justify-content-center align-items-center", modalTextContainer]);
        let modalCloseBtn = createNewElement(["button", "modal_close_btn btn btn-danger", btnContainer, `Close`, { id: `modal_close_btn` }]);
    } catch (error) { errorNotification(`Error occurred while creating Modal`); }
    $(".modal_close_btn").click(() => {
        try {
            $(".user_modal").remove()
            let records = $(`.individual_user_data`);
            $.each(records, (ind, record) => { $(record).css("filter", "blur(0px)"); });
            $(".user_modal").css("display", "none");
            $(usersDataMainContainer).css("minHeight", "");
        } catch (error) { errorNotification(`Error Occurred while closing Modal`); }
    });
};