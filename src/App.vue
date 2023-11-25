<template>
  <v-app>
    <div class="wrapper">
      <PageHeader :name="nameUser"/>
      <PageContent/>
      <PageFooter/>
    </div>
  </v-app>
</template>

<script setup lang="ts">
import PageHeader from "@/components/PageHeader.vue";
import PageContent from "@/components/PageContent.vue";
import PageFooter from "@/components/PageFooter.vue";

const nameUser = 'Антон';
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}
</style>
