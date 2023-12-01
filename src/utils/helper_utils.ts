export function setLS(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value))
}

export function getLS(key: string, defaultValue = null as any) {
    const savedValue = localStorage.getItem(key)
    if (savedValue) {
        return JSON.parse(savedValue)
    } else {
        return defaultValue
    }
}
