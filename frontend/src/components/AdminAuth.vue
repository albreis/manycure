<template>    
    <div class="flex items-center space-x-4">
        <div v-if="isAdminAuthenticated" class="flex items-center space-x-4">
            <router-link :to="{name: 'admin/dashboard'}" class="px-4 py-2 border border-skyBlue text-skyBlue font-semibold rounded-lg hover:bg-skyBlue hover:text-white transition-colors">
                <i class="fas fa-user-shield"></i>
            </router-link>
            <button @click="adminAuthStore.logout" class="px-4 py-2 border border-skyBlue text-skyBlue font-semibold rounded-lg hover:bg-skyBlue hover:text-white transition-colors">
                <i class="fas fa-sign-out-alt"></i>
            </button>
        </div>
        <div v-else>
            <router-link :to="{name: 'admin/login'}" class="px-4 py-2 border border-skyBlue text-skyBlue font-semibold rounded-lg hover:bg-skyBlue hover:text-white transition-colors">
                <i class="fas fa-user-shield"></i>
            </router-link>
        </div>
    </div>
</template>
<script setup>
import { useAdminAuthStore } from '@/stores/adminAuthStore';
import { computed } from 'vue';
const adminAuthStore = useAdminAuthStore();
const isAdminAuthenticated = computed(() => adminAuthStore.isAuthenticated);
</script>