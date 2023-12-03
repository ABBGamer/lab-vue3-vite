<template>
  <div style="max-width: 720px; margin: 0 auto">
    <v-tabs
        v-model="currentItem"
        fixed-tabs
    >
      <v-tab
          v-for="item in items"
          :key="item"
          :value="'tab-' + item"
      >
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-window v-model="currentItem">
      <v-window-item
          v-for="item in items"
          :key="item"
          :value="'tab-' + item"
      >
        <v-card flat v-if="item === 'Авторизация'">
          <v-card-text>
            Введите логин и пароль
          </v-card-text>
          <v-text-field
              v-model="login"
              label="Логин"
              hide-details
              required
          ></v-text-field>
          <v-text-field
              v-model="pass"
              label="Пароль"
              hide-details
              required
          ></v-text-field>
          <div style="margin: 10px">
            <VBtn block>Войти</VBtn>
          </div>
        </v-card>
        <v-card flat v-if="item === 'Регистрация'">
          <v-card-text>
            Введите данные и нажмите кнопку "Зарегистрироваться"
          </v-card-text>
          <v-text-field
              v-model="firstname"
              :rules="nameRules"
              :counter="10"
              label="Имя"
              required
              hide-details
          ></v-text-field>
          <v-text-field
              v-model="lastname"
              :rules="nameRules"
              :counter="10"
              label="Фамилия"
              hide-details
              required
          ></v-text-field>
          <v-text-field
              v-model="email"
              :rules="emailRules"
              label="Почта"
              hide-details
              required
          ></v-text-field>
          <v-text-field
              v-model="pass"
              label="Пароль"
              hide-details
              required
          ></v-text-field>
          <div style="margin: 10px">
            <VBtn block>Зарегистрироваться</VBtn>
          </div>
        </v-card>
      </v-window-item>
    </v-window>
  </div>
</template>

<script lang="ts">
export default {
  name: "AuthView",
  data: () => ({
    currentItem: 'tab-Web',
    items: [
      'Авторизация', 'Регистрация',
    ],

    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  }),
}
</script>

<style>

</style>