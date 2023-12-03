<template>
  <div class="flex-box flex-column">
    <h1 class="text-center">Новости проекта [в разработке] </h1>
    <div class="text-center">
      <VBtn @click="isShow = !isShow">{{ isShow ? 'Скрыть' : 'Показать' }}</VBtn>
      <ul v-if="isShow">
        <li @click="$router.push(`/news/${post.id}`)" v-for="post in posts()" :key="post.id" style="cursor: pointer">{{ post.post }}</li>
      </ul>
      <p v-else>На данном этапе разработки {{ posts().length }} тестовых постов</p>
    </div>
  </div>
</template>

<script lang="ts">

import {posts} from "../../mock/posts";
import {defineComponent, ref} from "vue";

const isShow = ref(false)

export default defineComponent({

  setup() {
    return {
      isShow
    }
  },
  methods: {
    posts() {
      return posts
    }
  }
})

</script>

<style>

</style>