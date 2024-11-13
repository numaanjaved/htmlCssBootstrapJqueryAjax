import { readUpdateDelete } from "./recordButtons.js";
import { createNewElement } from "../components/createElement.js";
import { errorNotification } from "./Alerts/errorNotification.js";
export let usersDataMainContainer = $(".individual_user_data_container")[0];
export let recordRow = ([profilePic, userId, userName, userType]) => {
    try {
        let userDataContainer = createNewElement(["div", "individual_user_data w-100 d-flex justify-content-between align-items-center", usersDataMainContainer]);
        let userTextRecordContainer = createNewElement(["div", "text_record d-flex justify-content-evenly align-items-center", userDataContainer]);
        let userProfilePicContainer = createNewElement(["div", "user_profile_data d-flex justify-content-center align-items-center", userTextRecordContainer]);
        let userProfilePicFigureTag = createNewElement(["figure", "profile_img_container",
            userProfilePicContainer]);
        createNewElement(["img", "user_profile_img", userProfilePicFigureTag, null, { src: `${profilePic}`, alt: "Profile Picture" }]);
        createNewElement(["p", "user_profile_data", userTextRecordContainer, `${userId}`, { id: "user_id" }]);
        createNewElement(["p", "user_profile_data", userTextRecordContainer, `${userName}`, { id: "user_fullName_data" }]);
        createNewElement(["p", "user_profile_data", userTextRecordContainer, `${userType}`, { id: "user_type_data" }]);
        let ProfileBtnOpsContainer = createNewElement(["div", "profile_btns_container d-flex justify-content-evenly flex-row align-items-center", userDataContainer]);
        readUpdateDelete(userDataContainer, ProfileBtnOpsContainer, userId);
    } catch (error) { errorNotification(`Error occurred while displaying records`); }
};