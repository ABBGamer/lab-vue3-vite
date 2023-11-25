export function checkMobile() {
    return window.navigator.userAgent.includes("Mobile")
}

export function setLS(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

export function getLS(key, defaultValue = null) {
    const savedValue = localStorage.getItem(key)
    if (savedValue) {
        return JSON.parse(savedValue)
    } else {
        return defaultValue
    }
}
