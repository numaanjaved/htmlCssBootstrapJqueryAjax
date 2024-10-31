let charLimitCheck = () => {
    userBio.on("input", (e) => {
        let userBioVal = e.target.value;
        if (userBioVal.length > 300) {
            bioLimitExceed.html(`Character Limit Exceeded`);
            userBio.css({ "outline": "1px solid #a31b1b", "border": "2px solid #a31b1b" });
        } else {
            userBio.css({ "outline": "1px solid #90c5cf", "border": "2px solid #90c5cf" });
            bioLimitExceed.html(``);
        }
        $(`.limit_text`).html(`${userBioVal.length}/300`);
    })
}
charLimitCheck();