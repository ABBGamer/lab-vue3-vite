<template>
  <v-app>
    <div v-bind:class="is_mobile?'wrapper-mobile':'wrapper-desktop'">
      <PageHeader :name="nameUser"/>
      <PageContent/>
      <PageFooter/>
    </div>
  </v-app>
</template>

<script lang="ts">
import PageHeader from "@/components/PageHeader.vue";
import PageFooter from "@/components/PageFooter.vue";
import {defineComponent, onMounted, watch} from "vue";
import {app} from "@/app_config";
import {useTheme} from "vuetify";
import {localTheme} from "@/app_store";
import PageContent from "@/components/PageContent.vue";

const nameUser = 'Пользователь';
export default defineComponent({
  name: 'App',
  components: {
    PageContent,
    PageHeader,
    PageFooter
  },
  setup() {
    const globalTheme = useTheme()
    const syncTheme = () => globalTheme.global.name.value = localTheme.value
    onMounted(() => syncTheme())
    watch(localTheme, () => syncTheme())
    return {
      nameUser,
      is_mobile: app.is_mobile
    }
  }
})
</script>

<style scoped>

</style>
