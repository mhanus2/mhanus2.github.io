<template>
    <!-- TOP NAVBAR (App Bar) -->
    <v-app-bar app>
        <!-- Hamburger icon: only visible on smaller screens -->
        <v-app-bar-nav-icon v-if="!lgAndUp" @click="drawerOpen = !drawerOpen" aria-label="Toggle navigation" />

        <!-- <v-toolbar-title>Build Better Sentences</v-toolbar-title> -->
        <v-toolbar-title>
            <v-btn to="/marketing">
                Build Better Sentences
            </v-btn>
        </v-toolbar-title>

        <v-spacer />

        <!-- Desktop links: only visible on large screens -->
        <div v-if="lgAndUp">
            <v-btn variant="plain" to="/">Home</v-btn>
            <v-menu open-on-hover>
                <template v-slot:activator="{ props }">
                    <v-btn v-bind="props"> The Tenses </v-btn>
                </template>
                <v-list>
                    <v-list-item to="/tenses/simple" title="Simple" />
                    <v-list-item to="/tenses/continuous" title="Continuous" />
                    <v-list-item to="/tenses/perfect" title="Perfect" />
                    <v-list-item to="/tenses/perfect-continuous" title="Perfect Continuous" />
                </v-list>
            </v-menu>
            <v-btn variant="plain" to="/word-order">Word Order</v-btn>
            <v-btn variant="plain" to="/time-reference">Time Reference</v-btn>
            <v-btn variant="plain" to="/passive">Passive</v-btn>
            <v-btn variant="plain" to="/contact">Contact</v-btn>
        </div>
    </v-app-bar>

    <!-- NAV DRAWER: slides in from the side on small screens -->
    <v-navigation-drawer v-model="drawerOpen" temporary app class="d-lg-none">
        <v-list>
            <v-list-item to="/" title="Home" />
            <v-list-group title="The Tenses">
                <template #activator="{ props }">
                    <v-list-item v-bind="props"></v-list-item>
                </template>

                <v-list-item to="/tenses/simple" title="Simple" />
                <v-list-item to="/tenses/continuous" title="Continuous" />
                <v-list-item to="/tenses/perfect" title="Perfect" />
                <v-list-item to="/tenses/perfect-continuous" title="Perfect Continuous" />
            </v-list-group>
            <v-list-item to="/word-order" title="Word Order" />
            <v-list-item to="/time-reference" title="Time Reference" />
            <v-list-item to="/passive" title="Passive" />
            <v-list-item to="/contact" title="Contact" />
        </v-list>
    </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useDisplay } from 'vuetify'

// Tracks whether the drawer is open
const drawerOpen = ref(false)

// Vuetify's display composable for breakpoints
// lgAndUp = true if the screen is >= "lg" size, false otherwise
const { lgAndUp } = useDisplay()
</script>

<style scoped></style>