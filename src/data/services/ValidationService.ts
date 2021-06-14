export const ValidationService = {
    zipcode(zipcode = ""): boolean {
        return  zipcode.replace(/\D/g, "").length === 8;
    }
}