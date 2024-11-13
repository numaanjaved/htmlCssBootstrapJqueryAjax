import { formValidation } from "../../controllers/homeController/formValidation.js"
import { errorNotification } from "./Alerts/errorNotification.js";
let form = $('form');
$(form).submit((e) => {
    try {
        e.preventDefault();
        // $(`.notifications_container`).html(``);
        formValidation();
    } catch (error) { errorNotification(`Error in Home form Submit`); }
});