export default class store {

    static hasVal(key) {
        return !!localStorage.getItem(key)
    }

    static getVal(key) {
        return localStorage.getItem(key) ?? null
    }

    static setVal(key, value) {
        localStorage.setItem(key, value)
    }

}