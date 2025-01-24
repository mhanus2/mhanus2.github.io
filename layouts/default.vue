<template>
  <v-app>
    <NavBar v-if="route.path !== '/marketing'" />
    <v-main class="main-background">
      <v-container>
        <v-card class="pa-5 pa-md-10">
          <NuxtPage />
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { useRoute } from '#app' // Nuxt's route composable

const route = useRoute()
</script>

<style scoped>
.main-background {
  background-color: #fafafa;
}
</style>