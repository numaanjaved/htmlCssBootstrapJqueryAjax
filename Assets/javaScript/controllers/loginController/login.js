import { credentialsValidation } from "./credentialsValidation.js";

let setCookie = (cookieKey, cookieVal, expiryTime) => {
    let expiry = new Date();
    expiry.setTime(expiry.getTime() + (expiryTime * 60 * 1000));
    document.cookie = `${cookieKey}=${encodeURIComponent(cookieVal)};expires=${expiry.toUTCString()};path=/`;
}
export let redirect = () => {
    if (credentialsValidation()) {
        let userNameValue = $("#login_userName").val();
        setCookie(`userName`, userNameValue, 59);
        try {
            window.location.href = "./index.html";
        } catch (error) {
            window.location.href = "http://localhost/htmlCssBootstrapJqueryAjax/index.html";
        }
    }
}