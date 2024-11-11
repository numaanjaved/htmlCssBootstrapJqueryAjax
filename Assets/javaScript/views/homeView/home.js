import { formValidation } from "../../controllers/homeController/formValidation.js"
let form = $('form');
$(form).submit((e) => {
    e.preventDefault();
    $(`.notifications_container`).html(``);
    formValidation();
});