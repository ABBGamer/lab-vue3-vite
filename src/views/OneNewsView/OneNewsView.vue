<template>
  <h1>Новости</h1>
  <div v-if="post">{{ post?.post }}</div>
  <div v-else>
    <p>Пост не найден</p>
    <p>Возможно на данном этапе разработки его просто нет :)</p>
  </div>
</template>

<script lang="ts">
import {useRoute} from "vue-router";
import {posts} from "@/mock/posts";

export default {
  setup() {
    const route = useRoute()
    const post = posts.find((el) => el.id === +route.params.id)
    return {
      post
    }
  }
}

</script>

<style lang="scss">

</style>