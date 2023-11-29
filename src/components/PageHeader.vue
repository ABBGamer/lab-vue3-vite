<template>
  <v-app-bar>
    <div style="width: 100%;display: flex; justify-content: space-between;align-items: center; padding: 10px">
      <div>
        <p style="font-weight: bold; color: red">Симулятор обмана | Simulator of scam</p>
<!--        <p style="font-size: 12px">Добро пожаловать, {{ $props.name ? $props.name : 'No Name' }}!</p>-->
      </div>
      <v-btn @click="toggleTheme" icon="mdi-theme-light-dark" variant="text"></v-btn>
    </div>
  </v-app-bar>

</template>

<script lang="ts">
import {defineComponent} from "vue";
import {useTheme} from "vuetify";

export default defineComponent({
  name: "PageHeader",
  props: {
    name: String
  },
  setup() {
    const theme = useTheme()

    function toggleTheme() {
      console.log(theme.global.name.value)
      theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
    }

    return {
      toggleTheme
    }
  }
})
</script>

<style scoped>

</style>