export class Validation {
    isNull(attr) {
        let nullCheck = true;
        if ($(attr).val() == "" || $(attr).val() == null) { nullCheck = false; }
        return nullCheck;
    }
}