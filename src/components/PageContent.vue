<template>
  <div style="height: 68px"></div>
  <div
      style=" display: flex; flex-direction: column; align-items: center;flex-grow: 1; width: 960px; margin: 0 auto; padding: 20px 50px">
    <h1 style="text-align: center; font-weight: bold">
      Симулятор обмана | Simulator of scam
    </h1>
    <div style="width: 100%; display: flex; justify-content: space-around; margin-top: 25px">
      <div>
        <img src="/main.png" alt="main-img" width="400">
      </div>
      <div style="    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: justify;"><b>Симулятор обмана</b> - это виртуальный мир, где обман и удача сливаются в увлекательном
        симуляторе. Откройте для себя
        мир возможностей, испытайте азарт и насладитесь виртуальными деньгами и предметами, которые вы можете получить
        внутри игры. Присоединяйтесь к DeceptionSim и станьте настоящим мастером обмана!
      </div>
    </div>
    <div style="font-size: 24px; text-align: justify">
      Добро пожаловать на сайт <b>Симулятор обмана</b> - захватывающий веб-сайт, предлагающий уникальный симулятор
      обмана! Здесь вы сможете погрузиться в виртуальный мир и насладиться различными игровыми возможностями, связанными
      с обманом и удачей.
    </div>
    <div style="text-align: justify; margin-top: 25px">
      Тут Вас ждет захватывающий кликер, где вы сможете зарабатывать виртуальные деньги, нажимая на экран.
      Используйте свои навыки и стратегии, чтобы максимизировать свои заработки и стать самым богатым обманщиком
      виртуального мира. <br>
      Кроме кликера, вас ждут захватывающие рулетки с предметами из различных игр. Вы сможете испытать свою удачу и
      надежду на получение ценных предметов, которые будут доступны для продажи внутри игровой экономики.
      Симулятор обмана также предлагает вам вступить в мир казино и попробовать свои силы в азартных играх. <br>
      Вы сможете сыграть в популярные игры, такие как покер, блэкджек и рулетка, и испытать адреналин, связанный с
      рискованными
      ставками и возможностью выиграть виртуальные деньги.
    </div>

    <div style="text-align: justify; padding: 20px; border: 5px solid red; border-radius: 25px; margin-top: 25px">
      <b>Примечание:</b> <br> <b>Симулятор обмана</b> разработан исключительно для развлекательных целей. Внутриигровые
      деньги и предметы
      являются виртуальными и не могут быть обменены на реальные деньги или товары. Пожалуйста, играйте ответственно и
      помните о важности разумного использования времени и ресурсов.
    </div>
  </div>


  <!--  <div style="flex-grow: 1; display: flex;align-items: center;justify-content: center">-->
  <!--    <div style="display: flex; flex-direction: column; align-items: center">-->
  <!--      <div style="font-size: 32px; font-weight: bold">{{ score }} ₽</div>-->
  <!--      <v-btn size="x-large" @click="console.log('click')" icon="mdi-gesture-tap" variant="text"></v-btn>-->
  <!--      <v-btn @click="addMoney" icon="mdi-cursor-default-click-outline" variant="text"></v-btn>-->
  <!--    </div>-->
  <!--  </div>-->
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  data() {
    return {
      score: 0
    }
  },
  methods: {
    addMoney() {
      this.score++
    }
  }
})

</script>

<style scoped>

</style>