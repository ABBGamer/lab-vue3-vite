<template>
  <div style="height: 68px"></div>
    <RouterView/>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {app} from "@/app_config";

export default defineComponent({
  name: "PageContent",
  setup() {
    return {
      is_mobile: app.is_mobile
    }
  }
})
</script>

<style scoped>

</style>