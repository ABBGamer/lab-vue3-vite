<template>
  <div style="height: 68px"></div>
  <div style="flex-grow: 1; display: flex;align-items: center;justify-content: center">
    <div style="display: flex; flex-direction: column; align-items: center">
      <div style="font-size: 32px; font-weight: bold">{{ score }} ₽</div>
<!--      <v-btn size="x-large" @click="console.log('click')" icon="mdi-gesture-tap" variant="text"></v-btn>-->
      <v-btn @click="addMoney" icon="mdi-cursor-default-click-outline" variant="text"></v-btn>
    </div>
  </div>
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