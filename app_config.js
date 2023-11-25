import {checkMobile} from "@/utils/utils";

class App {
    is_mobile = false;
    constructor() {
        this.is_mobile = checkMobile();
    }
}

export const app = new App()
window.addEventListener('resize', () => app.is_mobile = checkMobile())
console.log(app.is_mobile)
