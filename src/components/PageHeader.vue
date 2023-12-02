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
    <div style="padding: 0 5px; display: flex; align-items: center; justify-content: space-between; width: 100%">
      <v-btn @click.stop="drawer = !drawer" icon="mdi-menu" variant="text"></v-btn>
      <div style="width: 100%;display: flex; align-items: center; flex-direction: column">
        <p style="font-weight: bold; color: red;width: 100%; text-align: center">
          {{ is_mobile ? 'Симулятор обмана' : 'Симулятор обмана | Simulator of scam' }}</p>
        <p style="font-size: 12px">{{ $props.name ? $props.name : 'No Name' }}</p>

        <div style="font-size: 12px"> Ваши деньги: {{ money }}</div>
      </div>
      <template v-if="is_mobile">
        <v-btn @click="toggleTheme" v-model="localTheme" icon="mdi-theme-light-dark"
               variant="text"></v-btn>
      </template>
      <template v-if="!is_mobile">
        <v-switch style="min-width: 130px; margin-top: 13px;"
                  inset
                  v-model="localTheme"
                  true-value="dark"
                  false-value="light"
                  :label="displayLabel"
        ></v-switch>
      </template>
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
import {computed, defineComponent, ref} from "vue";
import {useTheme} from "vuetify";
import {localTheme, money} from "@/app_store";
import {app} from "@/app_config";
import {setLS} from "@/utils/helper_utils";

export default defineComponent({
  name: "PageHeader",
  props: {
    name: String
  },
  setup() {
    const theme = useTheme()
    const drawer = ref(false)
    const is_mobile = app.is_mobile
    const displayLabel = computed(() => is_mobile ? '' : localTheme.value === "dark" ? 'Темная' : 'Cветлая')


    function toggleTheme() {
      setLS('theme', theme.global.current.value.dark ? 'light' : 'dark')
      theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
    }

    return {
      is_mobile,
      drawer,
      displayLabel,

      toggleTheme,

      localTheme,
      money: money,
    }
  }
})
</script>

<style scoped>

</style>