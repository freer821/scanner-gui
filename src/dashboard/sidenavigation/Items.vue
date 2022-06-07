<template>
  <ul class="md:pl-3">
    <sidenav-item title="Home" to="/">
      <home-icon />
    </sidenav-item>

    <sidenav-item title="Status" to="#">
      <status-icon />
    </sidenav-item>

    <sidenav-item title="Archives" to="#">
      <archives-icon />
    </sidenav-item>

    <sidenav-item title="Credits" to="#">
      <credits-icon />
    </sidenav-item>

    <sidenav-item title="Settings" to="#">
      <settings-icon />
    </sidenav-item>

    <sidenav-item title="Documentation" to="#">
      <documentation-icon />
    </sidenav-item>
  </ul>
</template>

<script setup>
import SidenavItem from "./Item.vue";

/* ICONS */
import HomeIcon from "./icons/Home.vue";
import StatusIcon from "./icons/Status.vue";
import CreditsIcon from "./icons/Credits.vue";
import SettingsIcon from "./icons/Settings.vue";
import ArchivesIcon from "./icons/Archives.vue";
import DocumentationIcon from "./icons/Documentation.vue";
</script>
