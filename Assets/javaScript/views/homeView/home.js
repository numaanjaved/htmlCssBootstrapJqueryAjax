import { formValidation } from "../../controllers/homeController/formValidation.js"
let form = $('form');
$(form).submit((e) => {
    e.preventDefault();
    formValidation();
    $(".notification_container").css("right", "0");
});