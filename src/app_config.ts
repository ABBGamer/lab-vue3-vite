class App {
    is_mobile = false;

    constructor() {
        this.is_mobile = window.navigator.userAgent.includes("Mobile");
    }
}

export const app = new App()
window.addEventListener('resize', () => app.is_mobile = window.navigator.userAgent.includes("Mobile"))
