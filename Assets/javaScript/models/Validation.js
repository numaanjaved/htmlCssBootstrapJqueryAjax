export class Validation {
    isNull(attr) {
        let nullCheck = true;
        if ($(attr).val() == "" || $(attr).val() == null) { nullCheck = false; }
        return nullCheck;
    }
    matchRegex(attr, regex) {
        let regexCheck = true;
        let value = $(attr).val();
        if (!(value == value.match(regex))) { regexCheck = false; }
        return regexCheck;
    }
    profilePicVal(img) {
        let imgCheck = true;
        let imgSrc = $(img).attr("src");
        if (imgSrc.includes("default_profile.png") || imgSrc == "") { imgCheck = false; }
        return imgCheck;
    }
}