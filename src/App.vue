<template>
  <v-app>
    <template v-if="is_mobile">
      <PageHeader :name="nameUser"/>
      <PageContent/>
      <PageFooter/>
    </template>
    <template v-else>
      <div class="wrapper">
        <PageHeader :name="nameUser"/>
        <PageContent/>
        <PageFooter/>
      </div>
    </template>

  </v-app>
</template>

<script lang="ts">
import PageHeader from "@/components/PageHeader.vue";
import PageContent from "@/components/PageContent.vue";
import PageFooter from "@/components/PageFooter.vue";
import {defineComponent} from "vue";
import {app} from "@/app_config";

const nameUser = 'Пользователь';
export default defineComponent({
  name: 'App',
  components: {
    PageHeader,
    PageContent,
    PageFooter
  },
  setup() {
    return {
      nameUser,
      is_mobile: app.is_mobile
    }
  }
})
</script>

<style scoped>
.wrapper {
  display: flex;
}
</style>
