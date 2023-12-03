<template>
  <div :class="is_mobile ? 'wrapper-mobile' : 'wrapper-desktop'">
    <RouterView/>
  </div>
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