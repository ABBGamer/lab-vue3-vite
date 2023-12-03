<template>
  <h1 class="text-center">Кликер</h1>
  <div
      style="margin-top: 20px; display: flex; align-items: center; justify-content: center; flex-direction: column; border: white 2px solid; border-radius: 25px">
    <div style="font-size: 32px; font-weight: bold">{{ money }} ₽</div>
    <v-btn @click="addMoney" size="x-large"
           :icon="is_mobile?'mdi-gesture-tap':'mdi-cursor-default-click-outline'"
           variant="text"></v-btn>
  </div>
</template>

<script lang="ts">
import {money, price, salary} from "../../app_store";
import {ref} from "vue";
import {app} from "@/app_config";

export default {
  name: "ClickerView",
  computed: {
    money() {
      return money
    }
  },
  methods: {
    addSalary() {
      if (money.value - price.value > 0) {
        money.value -= price.value;
        price.value = Math.round(price.value * 1.7);
        salary.value += 1;
      }
    }
  },
  setup() {
    const salary = ref(0)
    const addMoney = () => money.value += 1

    return {
      addMoney,
      is_mobile: app.is_mobile
    }
  }
}

</script>

<style lang="scss">

</style>