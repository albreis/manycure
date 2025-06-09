<template>
    <HeaderComponent />
    <router-view />
    <FooterComponent />
</template>
<script setup>
import HeaderComponent from './layout/HeaderComponent.vue';
import FooterComponent from './layout/FooterComponent.vue'; 
</script>