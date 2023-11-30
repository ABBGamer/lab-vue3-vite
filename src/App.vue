<template>
  <v-app>
    <template v-if="state">
      <div>is mobile</div>
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
import {defineComponent, inject} from "vue";

const nameUser = 'Пользователь';
export default defineComponent({
  name: 'App',
  components: {
    PageHeader,
    PageContent,
    PageFooter
  }
  ,
  setup() {
    const state = inject('state');
    return {
      nameUser,
      state
    }
  }
})


</script>

<style scoped>
.wrapper {
  display: flex;
}
</style>
