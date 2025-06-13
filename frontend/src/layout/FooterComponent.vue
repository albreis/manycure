<template>
    

    <!-- Footer -->
    <footer id="footer" class="bg-gray-800 text-white py-12">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <div class="flex items-center mb-4">
                        <div class="h-10 w-10 bg-skyBlue rounded-full flex items-center justify-center text-white font-bold text-lg mr-2">
                            <i class="fa-solid fa-nail-polish"></i>
                        </div>
                        <h3 class="text-xl font-bold">NailBook</h3>
                    </div>
                    <p class="text-gray-400 mb-4">The easiest way to book your manicure appointments online.</p>
                    <div class="flex space-x-3">
                        <span class="text-gray-400 hover:text-white transition-colors cursor-pointer">
                            <i class="fa-brands fa-facebook-f"></i>
                        </span>
                        <span class="text-gray-400 hover:text-white transition-colors cursor-pointer">
                            <i class="fa-brands fa-instagram"></i>
                        </span>
                        <span class="text-gray-400 hover:text-white transition-colors cursor-pointer">
                            <i class="fa-brands fa-twitter"></i>
                        </span>
                        <span class="text-gray-400 hover:text-white transition-colors cursor-pointer">
                            <i class="fa-brands fa-pinterest"></i>
                        </span>
                    </div>
                    <AdminAuth class="mt-4" />
                </div>
                
                <div>
                    <h4 class="text-lg font-bold mb-4">Quick Links</h4>
                    <ul class="space-y-2">
                        <li><span class="text-gray-400 hover:text-white transition-colors cursor-pointer">Home</span></li>
                        <li><span class="text-gray-400 hover:text-white transition-colors cursor-pointer">Services</span></li>
                        <li><span class="text-gray-400 hover:text-white transition-colors cursor-pointer">How It Works</span></li>
                        <li><span class="text-gray-400 hover:text-white transition-colors cursor-pointer">Testimonials</span></li>
                        <li><span class="text-gray-400 hover:text-white transition-colors cursor-pointer">Contact Us</span></li>
                    </ul>
                </div>
                
                <div>
                    <h4 class="text-lg font-bold mb-4">Services</h4>
                    <ul class="space-y-2">
                        <li><span class="text-gray-400 hover:text-white transition-colors cursor-pointer">Classic Manicure</span></li>
                        <li><span class="text-gray-400 hover:text-white transition-colors cursor-pointer">Gel Manicure</span></li>
                        <li><span class="text-gray-400 hover:text-white transition-colors cursor-pointer">Nail Art Design</span></li>
                        <li><span class="text-gray-400 hover:text-white transition-colors cursor-pointer">Pedicure</span></li>
                        <li><span class="text-gray-400 hover:text-white transition-colors cursor-pointer">Nail Extensions</span></li>
                    </ul>
                </div>
                
                <div>
                    <h4 class="text-lg font-bold mb-4">Contact Info</h4>
                    <ul class="space-y-2">
                        <li class="flex items-center">
                            <i class="fa-solid fa-phone mr-2 text-skyBlue"></i>
                            <span class="text-gray-400">(555) 123-4567</span>
                        </li>
                        <li class="flex items-center">
                            <i class="fa-solid fa-envelope mr-2 text-skyBlue"></i>
                            <span class="text-gray-400">support@nailbook.com</span>
                        </li>
                        <li class="flex items-center">
                            <i class="fa-solid fa-location-dot mr-2 text-skyBlue"></i>
                            <span class="text-gray-400">123 Beauty Street, Suite 100<br>New York, NY 10001</span>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                <p>© 2023 NailBook. All rights reserved.</p>
            </div>
        </div>
    </footer>
</template>
<script setup>
import AdminAuth from '../components/AdminAuth.vue';
</script>