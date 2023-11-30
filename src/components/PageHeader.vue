<template>
  <v-app-bar>
    <v-card>
      <v-layout>
        <v-main style="height: 250px">
          <div class="d-flex justify-center align-center h-100">
          </div>
        </v-main>
      </v-layout>
    </v-card>
    <div style="width: 100%;display: flex; justify-content: space-between;align-items: center; padding: 10px">
      <v-btn @click.stop="drawer = !drawer" icon="mdi-menu" variant="text"></v-btn>
      <div style="display: flex; flex-direction: column; align-items: center">
        <p style="font-weight: bold; color: red">Симулятор обмана | Simulator of scam</p>
        <p style="font-size: 12px">Добро пожаловать, {{ $props.name ? $props.name : 'No Name' }}!</p>
      </div>
      <v-btn @click="toggleTheme" icon="mdi-theme-light-dark" variant="text"></v-btn>
    </div>
  </v-app-bar>
  <v-navigation-drawer
      v-model="drawer"
  >
    <v-list-item
        prepend-avatar="https://cdn1.flamp.ru/a5c123d2ff93fe9097ce208e8660e8a8.jpg"
        :title="$props.name ? $props.name : 'No Name'"
    ></v-list-item>
    <v-divider></v-divider>
    <v-list density="compact" nav>
      <v-list-item prepend-icon="mdi-home" title="Главная" value="home"></v-list-item>
      <v-list-item prepend-icon="mdi-information" title="Информация" value="about"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import {useTheme} from "vuetify";

export default defineComponent({
  name: "PageHeader",
  props: {
    name: String
  },
  setup() {
    const theme = useTheme()
    const drawer = ref(false)
    function toggleTheme() {
      console.log(theme.global.name.value)
      theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
    }

    return {
      toggleTheme,
      drawer,
    }
  }
})
</script>

<style scoped>

</style>