import {ref, watch} from "vue";
import {getLS, setLS} from "@/utils/helper_utils";

export const money = ref(+getLS('money', 0));
export const salary = ref(+getLS('salary', 1))
export const price = ref(+getLS('price', 10))
export const localTheme = ref(getLS('theme','light'))


watch(money, (value) => setLS('money', value))
watch(salary, (value) => setLS('salary', value))
watch(price, (value) => setLS('price', value))
watch(localTheme, (value) => setLS('theme', value))
