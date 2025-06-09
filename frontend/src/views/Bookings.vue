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
                <td>{{ booking.created_at }}</td>
                <td>{{ booking.phone }}</td>
                <td>{{ booking.date }}</td>
                <td>{{ booking.time }}</td>
                <td>{{ booking.service }}</td>
            </tr>
        </tbody>
    </table>
</div>
</template>
<script setup>
import { ref } from 'vue';
import ApiService from '@/services/ApiService';

const bookings = ref([]);

const fetchBookings = async () => {
    try {
        const response = await ApiService.get('bookings-list');
        bookings.value = response;
    } catch (error) {
        console.error('Error fetching bookings:', error);
    }
};

fetchBookings();
</script>