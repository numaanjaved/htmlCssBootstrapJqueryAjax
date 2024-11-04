export class Validation {
    isNull(attr) {
        let nullCheck = true;
        if ($(attr).val() == "" || $(attr).val() == null) { nullCheck = false; }
        return nullCheck;
    }
    profilePicVal(img) {
        let imgCheck = true;
        let imgSrc = $(img).attr("src");
        if (imgSrc.includes("default_profile.png") || imgSrc == "") { imgCheck = false; }
        return imgCheck;
    }
}