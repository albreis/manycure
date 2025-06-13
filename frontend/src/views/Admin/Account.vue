<template>
  <div class="flex items-center justify-center min-h-[70vh]">
    <div class="grid grid-cols-3 gap-4">
        <router-link :to="{ name: 'booking-form', params: { id: 0 } }" class="shadow p-8 rounded-md bg-slate-300 flex flex-col items-center">
            <i class="fas fa-plus-circle text-2xl mb-2"></i>
            <span>Cria Booking</span>
        </router-link>
        <router-link :to="{ name: 'bookings' }" class="shadow p-8 rounded-md bg-slate-300 flex flex-col items-center">
            <i class="fas fa-calendar-alt text-2xl mb-2"></i>
            <span>Bookings</span>
        </router-link>
        <router-link :to="{ name: 'settings' }" class="shadow p-8 rounded-md bg-slate-300 flex flex-col items-center">
            <i class="fas fa-cog text-2xl mb-2"></i>
            <span>Settings</span>
        </router-link>
    </div>
  </div>
</template>
