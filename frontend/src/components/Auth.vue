<template>    
    <div class="flex items-center space-x-4">
        <div v-if="isAuthenticated">
            <divc class="flex items-center space-x-4">
                <router-link :to="{name: 'account'}" class="px-4 py-2 border border-skyBlue text-skyBlue font-semibold rounded-lg hover:bg-skyBlue hover:text-white transition-colors">Account</router-link>
                <button @click="authStore.logout" class="px-4 py-2 border border-gray-500 text-gray-500 font-semibold rounded-lg hover:bg-skyBlue hover:text-white transition-colors">Logout</button>
            </divc>
        </div>
        <div v-else>
            <div class="flex items-center space-x-4">
                <router-link :to="{name: 'register'}" class="px-4 py-2 border border-skyBlue text-skyBlue font-semibold rounded-lg hover:bg-skyBlue hover:text-white transition-colors">Sign Up</router-link>
                <router-link :to="{name: 'login'}" class="px-4 py-2 bg-skyBlue text-white font-semibold rounded-lg hover:bg-blue-400 transition-colors">Log In</router-link>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useAuthStore } from '@/stores/authStore';
import { computed } from 'vue';
const authStore = useAuthStore();
const isAuthenticated = computed(() => authStore.isAuthenticated);
</script>