<template>
    <div>
        <!-- Hero Section -->
    <section id="hero" class="bg-gradient-to-r from-skyBlue/20 to-softPink/20 py-16 h-[600px]">
        <div class="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div class="md:w-1/2 mb-10 md:mb-0">
                <h2 class="text-4xl md:text-5xl font-bold mb-6">Book Your Perfect Manicure in Seconds</h2>
                <p class="text-lg mb-8">Schedule appointments with top nail technicians in your area. Easy booking, reminders, and personalized service.</p>
                <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <button class="px-6 py-3 bg-skyBlue text-white font-bold rounded-lg text-lg hover:bg-blue-400 transition-colors shadow-md">Book Appointment</button>
                    <button class="px-6 py-3 border border-gray-300 bg-white text-gray-700 font-semibold rounded-lg text-lg hover:bg-gray-100 transition-colors">View Services</button>
                </div>
            </div>
            <div class="md:w-1/2">
                <div class="relative">
                    <div class="absolute -top-4 -left-4 w-24 h-24 bg-mintGreen/30 rounded-full"></div>
                    <div class="absolute -bottom-4 -right-4 w-32 h-32 bg-softPink/30 rounded-full"></div>
                    <img class="rounded-xl shadow-lg relative z-10" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/021acd8ee6-d976d6ea248e2b4e4147.png" alt="manicure appointment scheduling app interface on a smartphone with beautiful nail designs in background, professional photo">
                </div>
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-16 bg-white">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-12">Why Choose Our Scheduling System</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div id="feature-1" class="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div class="w-16 h-16 bg-skyBlue/20 rounded-full flex items-center justify-center mb-4">
                        <i class="fa-solid fa-calendar-check text-skyBlue text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3">Easy Scheduling</h3>
                    <p class="text-gray-600">Book appointments in just a few clicks. Select your preferred date, time, and technician.</p>
                </div>
                <div id="feature-2" class="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div class="w-16 h-16 bg-softPink/20 rounded-full flex items-center justify-center mb-4">
                        <i class="fa-solid fa-bell text-softPink text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3">Reminders</h3>
                    <p class="text-gray-600">Never miss an appointment with automated reminders via email or text message.</p>
                </div>
                <div id="feature-3" class="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div class="w-16 h-16 bg-mintGreen/20 rounded-full flex items-center justify-center mb-4">
                        <i class="fa-solid fa-wand-magic-sparkles text-green-500 text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3">Personalized Experience</h3>
                    <p class="text-gray-600">Save your preferences and favorite styles for a customized manicure experience.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-4">Our Services</h2>
            <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Choose from our wide range of manicure and nail care services, all available for easy online booking.</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div id="service-1" class="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div class="h-48 overflow-hidden">
                        <img class="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/9c2d315983-56498bf9c9206e384f78.png" alt="classic manicure with red polish, close-up of hands">
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2">Classic Manicure</h3>
                        <p class="text-gray-600 mb-4">A traditional manicure with nail shaping, cuticle care, and polish application.</p>
                        <div class="flex justify-between items-center">
                            <span class="text-lg font-bold text-skyBlue">$35</span>
                            <span class="text-gray-500">30 minutes</span>
                        </div>
                    </div>
                </div>
                <div id="service-2" class="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div class="h-48 overflow-hidden">
                        <img class="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/30da1d239a-43fb6e62de64dfd2dc57.png" alt="gel manicure with pink polish, professional salon setting">
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2">Gel Manicure</h3>
                        <p class="text-gray-600 mb-4">Long-lasting gel polish that dries instantly and stays perfect for weeks.</p>
                        <div class="flex justify-between items-center">
                            <span class="text-lg font-bold text-skyBlue">$45</span>
                            <span class="text-gray-500">45 minutes</span>
                        </div>
                    </div>
                </div>
                <div id="service-3" class="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div class="h-48 overflow-hidden">
                        <img class="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/b2c3d7e77a-b7b832056c669de5ea8d.png" alt="nail art design with rhinestones and patterns, elegant and creative">
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2">Nail Art Design</h3>
                        <p class="text-gray-600 mb-4">Custom nail art and designs to express your personal style.</p>
                        <div class="flex justify-between items-center">
                            <span class="text-lg font-bold text-skyBlue">$60</span>
                            <span class="text-gray-500">60 minutes</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="text-center mt-10">
                <button class="px-6 py-3 bg-skyBlue text-white font-bold rounded-lg hover:bg-blue-400 transition-colors shadow-sm">View All Services</button>
            </div>
        </div>
    </section>

    <!-- How It Works Section -->
    <section id="how-it-works" class="py-16 bg-white">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-12">How It Works</h2>
            
            <div class="flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto">
                <div id="step-1" class="flex flex-col items-center text-center mb-8 md:mb-0">
                    <div class="w-16 h-16 bg-skyBlue rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">1</div>
                    <h3 class="text-xl font-bold mb-2">Create Account</h3>
                    <p class="text-gray-600 max-w-xs">Sign up in seconds with your email or social media account.</p>
                </div>
                
                <div class="hidden md:block text-skyBlue text-4xl">
                    <i class="fa-solid fa-chevron-right"></i>
                </div>
                
                <div id="step-2" class="flex flex-col items-center text-center mb-8 md:mb-0">
                    <div class="w-16 h-16 bg-skyBlue rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">2</div>
                    <h3 class="text-xl font-bold mb-2">Choose Service</h3>
                    <p class="text-gray-600 max-w-xs">Browse services and select the one that fits your needs.</p>
                </div>
                
                <div class="hidden md:block text-skyBlue text-4xl">
                    <i class="fa-solid fa-chevron-right"></i>
                </div>
                
                <div id="step-3" class="flex flex-col items-center text-center">
                    <div class="w-16 h-16 bg-skyBlue rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">3</div>
                    <h3 class="text-xl font-bold mb-2">Book &amp; Relax</h3>
                    <p class="text-gray-600 max-w-xs">Select a time slot and confirm your appointment.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonials Section -->
    <section id="testimonials" class="py-16 bg-gradient-to-r from-skyBlue/10 to-softPink/10">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div id="testimonial-1" class="bg-white p-6 rounded-xl shadow-sm">
                    <div class="flex items-center mb-4">
                        <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg" alt="Client" class="w-12 h-12 rounded-full mr-3">
                        <div>
                            <h4 class="font-bold">Emily Johnson</h4>
                            <div class="flex text-yellow-400">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                        </div>
                    </div>
                    <p class="text-gray-600">"I love how easy it is to book my appointments now. The reminders are super helpful and I never miss a session!"</p>
                </div>
                
                <div id="testimonial-2" class="bg-white p-6 rounded-xl shadow-sm">
                    <div class="flex items-center mb-4">
                        <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg" alt="Client" class="w-12 h-12 rounded-full mr-3">
                        <div>
                            <h4 class="font-bold">Michael Torres</h4>
                            <div class="flex text-yellow-400">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star-half-stroke"></i>
                            </div>
                        </div>
                    </div>
                    <p class="text-gray-600">"Great scheduling system! I can book appointments for my wife and myself without any hassle. Very user-friendly."</p>
                </div>
                
                <div id="testimonial-3" class="bg-white p-6 rounded-xl shadow-sm">
                    <div class="flex items-center mb-4">
                        <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg" alt="Client" class="w-12 h-12 rounded-full mr-3">
                        <div>
                            <h4 class="font-bold">Sophia Chen</h4>
                            <div class="flex text-yellow-400">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                        </div>
                    </div>
                    <p class="text-gray-600">"The ability to see all available time slots and technicians makes scheduling so convenient. I've recommended it to all my friends!"</p>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section id="cta" class="py-16 bg-white">
        <div class="container mx-auto px-4">
            <div class="bg-skyBlue/10 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
                <div class="text-center">
                    <h2 class="text-3xl font-bold mb-4">Ready for Your Next Manicure?</h2>
                    <p class="text-lg mb-8 max-w-2xl mx-auto">Join thousands of satisfied clients who book their nail appointments online. Get started today and enjoy a seamless booking experience.</p>
                    <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <button class="px-6 py-3 bg-skyBlue text-white font-bold rounded-lg text-lg hover:bg-blue-400 transition-colors shadow-md">Create Account</button>
                        <button class="px-6 py-3 border border-skyBlue bg-white text-skyBlue font-bold rounded-lg text-lg hover:bg-skyBlue/5 transition-colors">Book as Guest</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-12">Contact Us</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div id="contact-info">
                    <h3 class="text-xl font-bold mb-4">Get in Touch</h3>
                    <p class="text-gray-600 mb-6">Have questions about our scheduling system? Reach out to our team for assistance.</p>
                    
                    <div class="space-y-4">
                        <div class="flex items-center">
                            <div class="w-10 h-10 bg-skyBlue/20 rounded-full flex items-center justify-center mr-3">
                                <i class="fa-solid fa-phone text-skyBlue"></i>
                            </div>
                            <span>(555) 123-4567</span>
                        </div>
                        
                        <div class="flex items-center">
                            <div class="w-10 h-10 bg-skyBlue/20 rounded-full flex items-center justify-center mr-3">
                                <i class="fa-solid fa-envelope text-skyBlue"></i>
                            </div>
                            <span>support@nailbook.com</span>
                        </div>
                        
                        <div class="flex items-center">
                            <div class="w-10 h-10 bg-skyBlue/20 rounded-full flex items-center justify-center mr-3">
                                <i class="fa-solid fa-location-dot text-skyBlue"></i>
                            </div>
                            <span>123 Beauty Street, Suite 100<br>New York, NY 10001</span>
                        </div>
                    </div>
                    
                    <div class="mt-8">
                        <h4 class="font-bold mb-3">Follow Us</h4>
                        <div class="flex space-x-4">
                            <span class="w-10 h-10 bg-skyBlue rounded-full flex items-center justify-center text-white hover:bg-blue-400 transition-colors cursor-pointer">
                                <i class="fa-brands fa-facebook-f"></i>
                            </span>
                            <span class="w-10 h-10 bg-skyBlue rounded-full flex items-center justify-center text-white hover:bg-blue-400 transition-colors cursor-pointer">
                                <i class="fa-brands fa-instagram"></i>
                            </span>
                            <span class="w-10 h-10 bg-skyBlue rounded-full flex items-center justify-center text-white hover:bg-blue-400 transition-colors cursor-pointer">
                                <i class="fa-brands fa-twitter"></i>
                            </span>
                            <span class="w-10 h-10 bg-skyBlue rounded-full flex items-center justify-center text-white hover:bg-blue-400 transition-colors cursor-pointer">
                                <i class="fa-brands fa-pinterest"></i>
                            </span>
                        </div>
                    </div>
                </div>
                
                <div id="contact-form">
                    <form class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium mb-1" for="name">Name</label>
                            <input type="text" id="name" class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-skyBlue" placeholder="Your name">
                        </div>
                        
                        <div>
                            <label class="block text-sm font-medium mb-1" for="email">Email</label>
                            <input type="email" id="email" class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-skyBlue" placeholder="Your email">
                        </div>
                        
                        <div>
                            <label class="block text-sm font-medium mb-1" for="subject">Subject</label>
                            <input type="text" id="subject" class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-skyBlue" placeholder="Subject">
                        </div>
                        
                        <div>
                            <label class="block text-sm font-medium mb-1" for="message">Message</label>
                            <textarea id="message" rows="4" class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-skyBlue" placeholder="Your message"></textarea>
                        </div>
                        
                        <button type="submit" class="w-full px-6 py-3 bg-skyBlue text-white font-bold rounded-lg hover:bg-blue-400 transition-colors">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
    </div>
</template>
<script setup>
</script>