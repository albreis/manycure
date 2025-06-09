<template>
    <header id="header" class="bg-white shadow-sm py-4">
        <div class="container mx-auto px-4 flex justify-between items-center">
            <div class="flex items-center">
                <div class="h-12 w-12 bg-skyBlue rounded-full flex items-center justify-center text-white font-bold text-xl mr-3">
                    <i class="fa-solid fa-nail-polish"></i>
                </div>
                <h1 class="text-2xl font-bold">NailBook</h1>
            </div>
            <nav class="hidden md:flex space-x-8">
                <span class="font-semibold hover:text-skyBlue transition-colors cursor-pointer">Services</span>
                <span class="font-semibold hover:text-skyBlue transition-colors cursor-pointer">How It Works</span>
                <span class="font-semibold hover:text-skyBlue transition-colors cursor-pointer">Testimonials</span>
                <span class="font-semibold hover:text-skyBlue transition-colors cursor-pointer">Contact</span>
            </nav>
            <Auth />
            <button class="md:hidden text-gray-600">
                <i class="fa-solid fa-bars text-2xl"></i>
            </button>
        </div>
    </header>
</template>
<script setup>
import Auth from '@/components/Auth.vue';
</script>