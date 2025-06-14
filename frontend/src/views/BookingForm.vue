<template>
    <form ref="formData" @submit.prevent="submitForm" class="max-w-md mx-auto my-8 bg-white p-8 rounded shadow">
        <h2 class="text-2xl font-bold mb-6 text-center">Agendar Serviço</h2>
        <div class="mb-4">
            <label class="block mb-1 font-medium" for="name">Nome</label>
            <input
                v-model="form.name"
                name="name"
                id="name"
                type="text"
                class="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
            />
        </div>
        <div class="mb-4">
            <label class="block mb-1 font-medium" for="phone">Telefone</label>
            <input
                v-model="form.phone"
                name="phone"
                @keyup="form.phone = formatPhoneBr(form.phone)"
                id="phone"
                type="tel"
                class="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
            />
        </div>
        <div class="mb-4">
            <label class="block mb-1 font-medium" for="date">Data</label>
            <select
                v-model="form.date"
                id="date"
                class="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
            >
                <option value="" disabled>Selecione um horário</option>
                <option v-for="date in availableTimes" :key="date" :value="date">
                    {{ formatDate(date.date) }} ({{  dayOfWeek(date.date) }})
                </option>
            </select>
            <input type="hidden" name="date" :value="form.date?.date" />
        </div>
        <div class="mb-4" v-if="form.date">
            <label class="block mb-1 font-medium" for="time">Horário</label>
            <select
                v-model="form.time"
                name="time"
                id="time"
                class="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
            >
                <option value="" disabled>Selecione um horário</option>
                <option v-for="hour in form.date.hours" :key="hour" :value="hour">
                    {{ hour }}
                </option>
            </select>
        </div>
        <div class="mb-6">
            <label class="block mb-1 font-medium" for="service">Serviço</label>
            <select
                v-model="form.service"
                name="service"
                id="service"
                class="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
            >
                <option value="" disabled>Selecione um serviço</option>
                <option v-for="service in services" :key="service.id" :value="service.name">
                    {{ service.name }}
                </option>
            </select>
        </div>
        <div v-if="message" class="mb-4 text-green-600 font-semibold">
            {{ message }}
        </div>
        <button
            type="submit"
            class="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition"
        >
            Agendar
        </button>
    </form>
</template>
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import ApiService from '@/services/ApiService';

const router = useRouter();

const form = ref({
    name: '',
    phone: '',
    date: null,
    time: null,
    service: ''
});

const formData = ref(null);

const availableTimes = ref([]);
const services = ref([
    { id: 1, name: 'Corte de Cabelo' },
    { id: 2, name: 'Barba' },
    { id: 3, name: 'Manicure' }
]);

const fetchCalendar = async () => {
    try {
        const response = await ApiService.get('calendar');
        availableTimes.value = response.filter(item => item.hours?.length > 0);
        console.log('Horários disponíveis:', availableTimes.value);
    } catch (error) {
        console.error('Erro ao buscar horários disponíveis:', error);
    }
};

fetchCalendar()

const dayOfWeek = day => {
    const date = new Date(`${day} 00:00:00`);
    const options = { weekday: 'long' };
    return date.toLocaleDateString(navigator.language, options);
};

const formatDate = (date) => {
    if (!date) return '';
    const d = new Date(`${date} 00:00:00`);
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return d.toLocaleDateString(navigator.language, options);
};

const message = ref('');

const submitForm = () => {
    if (!form.value.date || !form.value.time || !form.value.service) {
        message.value = 'Por favor, preencha todos os campos obrigatórios.';
        return;
    }
    message.value = '';
    ApiService.post('bookings', new FormData(formData.value))
        .then(() => {
            message.value = ('Serviço agendado com sucesso!');
            router.push({ name: 'bookings' });
        })
        .catch(error => {
            console.error('Erro ao agendar serviço:', error);
            message.value = ('Ocorreu um erro ao agendar o serviço. Tente novamente.');
        });
};

const formatPhoneBr = (phone) => {
    if( !phone) return '';
    phone = phone.replace(/\D/g, ''); // Remove all non-digit characters
    if (phone.length > 11) {
        phone = phone.slice(0, 11);
    }
    phone = phone.replace(/\D/g, '').replace(/(\d{1,2})/, '($1)');
    phone = phone.replace(/\D/g, '').replace(/(\d{2})(\d{1,5})/, '($1) $2');
    phone = phone.replace(/\D/g, '').replace(/(\d{2})(\d{5})(\d{1,4})/, '($1) $2-$3');
    return phone;
};
</script>