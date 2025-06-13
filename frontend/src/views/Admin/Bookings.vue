<template>
    <div class="container mx-auto p-6">
        <h1 class="text-3xl font-bold mb-6">Agendamentos</h1>
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Criado em</th>
                    <th>Telefone</th>
                <th>Dia</th>
                <th>Hora</th>
                <th>Serviço</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="booking in bookings" :key="booking.id">
                <td>{{ booking.name }}</td>
                <td>{{ formatDate(booking.created_at, true) }}</td>
                <td>{{ booking.phone }}</td>
                <td>{{ formatDate(`${booking.date} 00:00:00`) }}</td>
                <td>{{ booking.time }}</td>
                <td>{{ booking.service }}</td>
            </tr>
        </tbody>
    </table>
</div>
</template>
<script setup>
import { ref } from 'vue';
import AdminApiService from '@/services/AdminApiService';

const bookings = ref([]);

const formatDate = (date, showHour) => {
    if (!date) return '';
    const d = new Date(date);
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    if (showHour) {
        options.hour = '2-digit';
        options.minute = '2-digit';
    }
    return d.toLocaleDateString(navigator.language, options);
};

const fetchBookings = async () => {
    try {
        const response = await AdminApiService.get('bookings-list');
        bookings.value = response;
    } catch (error) {
        console.error('Error fetching bookings:', error);
    }
};

fetchBookings();
</script>