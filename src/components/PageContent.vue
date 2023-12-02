<template>
  <div style="height: 68px"></div>
  <template v-if="is_mobile">
    <div style="">
      <h1 style="text-align: center">Добро пожаловать</h1>
      <div style="text-align: justify">
        Место, где кликер денег становится безумным весельем! Здесь вы можете щелкать
        мышкой, чтобы заработать виртуальные деньги и затем тратить их на самые нелепые и безумные вещи в нашем
        магазине.
        У нас также есть казино, где вы можете испытать свою удачу и выиграть еще больше виртуальных богатств!
        Откройте
        для себя безграничное разнообразие виртуальных товаров и наслаждайтесь азартным безумием!
      </div>
      <div style="display: flex; justify-content: center">
        <img src="/main.png" alt="main" width="300">
      </div>
      <div
          style="display: flex; align-items: center; justify-content: center; flex-direction: column; border: white 2px solid; border-radius: 25px">
        <div style="font-size: 32px; font-weight: bold">{{ money }} ₽</div>
        <v-btn @click="addMoney" size="x-large" :icon="is_mobile?'mdi-gesture-tap':'mdi-cursor-default-click-outline'"
               variant="text"></v-btn>
      </div>
      <div style="margin-top: 20px; border: 2px solid red; padding: 15px; border-radius: 25px">
        **Примечание:**<br>
        Симулятор обмана предназначен только для развлекательных целей. Виртуальные деньги и товары не имеют реальной
        ценности
        и не могут быть обменены на реальные деньги или товары. Пожалуйста, играйте ответственно и помните, что здесь
        главное - веселье и разрядка!
      </div>

    </div>
  </template>
  <template v-else>
    <div style="padding-bottom: 60px">
      <h1 style="text-align: center">Добро пожаловать в Симулятор обмана</h1>
      <div>
        <div style="display: flex; justify-content: space-between; align-items: center">
          <div>
            <img src="/main.png" alt="main">
          </div>
          <div>
            <div style="text-align: justify; font-size: 20px">
              Место, где кликер денег становится безумным весельем! Здесь вы можете щелкать
              мышкой, чтобы заработать виртуальные деньги и затем тратить их на самые нелепые и безумные вещи в нашем
              магазине.
              У нас также есть казино, где вы можете испытать свою удачу и выиграть еще больше виртуальных богатств!
              Откройте
              для себя безграничное разнообразие виртуальных товаров и наслаждайтесь азартным безумием!
            </div>
            <div style="margin-top: 20px; border: 2px solid red; padding: 15px; border-radius: 25px">
              **Примечание:**<br>
              Симулятор обмана предназначен только для развлекательных целей. Виртуальные деньги и товары не имеют
              реальной
              ценности
              и не могут быть обменены на реальные деньги или товары. Пожалуйста, играйте ответственно и помните, что
              здесь
              главное - веселье и разрядка!
            </div>
            <div
                style="margin-top: 20px; display: flex; align-items: center; justify-content: center; flex-direction: column; border: white 2px solid; border-radius: 25px">
              <div style="font-size: 32px; font-weight: bold">{{ money }} ₽</div>
              <v-btn @click="addMoney" size="x-large" :icon="is_mobile?'mdi-gesture-tap':'mdi-cursor-default-click-outline'"
                     variant="text"></v-btn>
            </div>
          </div>
        </div>

      </div>

    </div>
  </template>


</template>

<script lang="ts">
import {defineComponent} from "vue";
import {app} from "@/app_config";
import {money, price, salary} from "@/app_store";

export default defineComponent({
  data() {
    const addMoney = () => money.value += salary.value
    return {
      addMoney,
      money,
      is_mobile: app.is_mobile
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
  }
})

</script>

<style scoped>

</style>