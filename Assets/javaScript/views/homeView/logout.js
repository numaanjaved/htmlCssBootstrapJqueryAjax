$(".logout_btn").click((e) => {
    if (document.cookie.includes(`userName`)) {
        document.cookie = "userName=;expires= thu, 01 jan 1970 00:00:00 UTC; path=/;";
        window.location.href = "./index.html";
    }
})
