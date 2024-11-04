export class Validation {
    attribute;
    regex;
    length;
    isNull(attr) {
        this.setAttribute(attr);
        let nullCheck = true;
        if ($(this.getAttribute()).val() == "" || $(this.getAttribute()).val() == null) { nullCheck = false; }
        return nullCheck;
    }
    matchRegex(attr, regex) {
        let regexCheck = true;
        this.setAttribute(attr);
        this.setRegex(regex);
        let value = $(this.getAttribute()).val();
        if (!(value == value.match(this.getRegex()))) { regexCheck = false; }
        return regexCheck;
    }
    profilePicVal(img) {
        let imgCheck = true;
        let imgSrc = $(img).attr("src");
        if (imgSrc.includes("default_profile.png") || imgSrc == "") { imgCheck = false; }
        return imgCheck;
    }
    setAttribute(att) {
        this.attribute = att;
    }
    getAttribute() {
        return this.attribute;
    }
    setRegex(reg) {
        this.regex = reg;
    }
    getRegex() {
        return this.regex;
    }
    setLength(len) {
        this.length = len;
    }
    getLength() {
        return this.length;
    }
}