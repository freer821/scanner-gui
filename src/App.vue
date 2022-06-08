<template>
  <dashboard-layout>
    <router-view />
  </dashboard-layout>
</template>

<script setup>
import store from "./store";
import DashboardLayout from './dashboard/Layout.vue';
store.dispatch('fetchAllImages')

</script>
