import { errorNotification } from "./Alerts/errorNotification.js";
$(".logout_btn").click((e) => {
    if (document.cookie.includes(`userName`)) {
        try {
            document.cookie = "userName=;expires= thu, 01 jan 1970 00:00:00 UTC; path=/;";
            window.location.href = "./index.html";
        } catch (error) { errorNotification(`Error occurred while logout`); }
    }
});