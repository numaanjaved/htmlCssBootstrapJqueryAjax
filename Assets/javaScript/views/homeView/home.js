import { formValidation } from "../../controllers/formValidation.js";
let form = $('form');
$(form).submit((e) => {
    e.preventDefault();
    formValidation();
});