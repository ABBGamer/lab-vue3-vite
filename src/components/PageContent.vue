<template>
  <div style="height: 68px"></div>
  <div style="display: flex; flex-direction: column; align-items: center; justify-content: center">
    <h1 style="font-size: 32px; font-weight: bold; color: red;">Симулятор обмана | Simulator of scam</h1>
    <div style="width:100%;display: flex; justify-content: space-between;">
      <div style="width: 100%; display: flex; align-items: center">
        <img src="/main.png" alt="main-img">
      </div>
      <div style="display: flex; align-items: center">
        <br>Описание: ScamBuster - это увлекательный симулятор скам-проектов, созданный для помощи пользователям разобраться в распространенных мошеннических схемах и избегать обмана. Вместо того, чтобы попадаться в ловушки скамеров, вы сможете использовать ScamBuster для развлечения и обучения, играя в мини-игры, основанные на популярных схемах мошенничества.
        <br><br>ScamBuster предлагает разнообразные мини-игры, которые воссоздают ситуации, характерные для скам-проектов. Вы сможете испытать свои навыки и интуицию, распознавая поддельные веб-сайты, фишинговые письма и мошеннические звонки. Каждая игра будет представлять уникальную схему мошенничества, и ваша задача будет заключаться в том, чтобы правильно распознать и избежать обмана.
        <br><br>ScamBuster также предоставляет обучающие материалы и подсказки, чтобы помочь вам понять, как работают различные мошеннические схемы, и как распознавать их. Вы сможете узнать о таких темах, как фишинг, пирамидные схемы, лживые инвестиции и другие распространенные мошеннические методы.
        <br>Играя в ScamBuster, вы не только будете получать удовольствие от игрового процесса, но и развивать свою осведомленность и навыки в области защиты от мошенничества. Помните, что лучший способ бороться с мошенничеством - это быть хорошо информированным и бдительным.
        <br><br>Примечание: ScamBuster разработан исключительно для развлекательных и образовательных целей. Не рекомендуется использовать его для реальных мошеннических действий или нарушения законов.
      </div>
    </div>
  </div>
  <!--  <div style="flex-grow: 1; display: flex;align-items: center;justify-content: center">-->
  <!--    <div style="display: flex; flex-direction: column; align-items: center">-->
  <!--&lt;!&ndash;      <div style="font-size: 32px; font-weight: bold">{{ score }} ₽</div>&ndash;&gt;-->
  <!--&lt;!&ndash;      <v-btn size="x-large" @click="console.log('click')" icon="mdi-gesture-tap" variant="text"></v-btn>&ndash;&gt;-->
  <!--&lt;!&ndash;      <v-btn @click="addMoney" icon="mdi-cursor-default-click-outline" variant="text"></v-btn>&ndash;&gt;-->
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