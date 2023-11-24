<template>
  <div class="wrapper">
    <PageHeader/>
    <PageContent/>
    <PageFooter/>
  </div>
</template>

<script setup lang="ts">
import PageHeader from "@/components/PageHeader.vue";
import PageContent from "@/components/PageContent.vue";
import PageFooter from "@/components/PageFooter.vue";
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}
</style>
