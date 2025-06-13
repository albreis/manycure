<template>
    <div class="p-8 bg-gray-100 flex gap-4">
        <form ref="formElement" @submit.prevent="submitForm" class="w-full bg-white p-6 rounded shadow">
            <div class="mb-4">
            <label for="date" class="block text-gray-700 font-semibold mb-2">Dia disponível:</label>
            <input type="date" id="date" name="date" v-model="availableDate" _required class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div class="mb-4">
            <label class="block text-gray-700 font-semibold mb-2">Horários disponíveis:</label>
            <div v-for="(hour, index) in availableHours" :key="index" class="flex items-center mb-2">
                <input type="time" name="hours[]" v-model="availableHours[index]" _required class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <button type="button" @click="removeHour(index)" class="ml-2 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600">Remover</button>
            </div>
            <button type="button" @click="addHour" class="mt-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">Adicionar horário</button>
            </div>
            <button type="submit" class="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 font-semibold">Salvar</button>
        </form>
        <div class="w-full bg-white p-6 rounded shadow">
            <h3 class="text-lg font-semibold mb-2">Datas disponíveis:</h3>
            <ul class="p-2 flex flex-col gap-2">
                <li @click="select(item)" v-for="(item, index) in availableDates" :key="index" class="cursor-pointer p-2 rounded mb-2 bg-slate-200 flex gap-2 items-center">
                    <div class="w-full">
                        {{ formatDate(item.date) }} ({{ dayOfWeek(item.date) }})
                        <div>
                            <small v-for="(hour, hourIndex) in item.hours" :key="hourIndex" class="inline-block bg-gray-400 rounded px-2 py-1 mr-2 mb-2">
                                {{ hour }}
                            </small>
                        </div>
                    </div>
                    <div class="flex flex-col gap-2">
                        <button @click.stop="select(item)" class="mr-2 w-full px-2 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button @click.stop="copy(item)" class="w-full px-2 py-1 bg-gray-500 text-white rounded hover:bg-gray-600">
                            <i class="fas fa-copy"></i>
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import AdminApiService from '@/services/AdminApiService';
import ApiService from '@/services/ApiService';

const defaultDate = ''
const defaultHours = []
const availableDate = ref(defaultDate); // Default to today's date
const availableHours = ref(defaultHours);
const availableDates = ref([]);

const select = (item) => {
    availableDate.value = item.date;
    availableHours.value = item.hours;
};
const copy = (item) => {
    const newItem = JSON.parse(JSON.stringify(item));
    availableHours.value = newItem.hours;
};

const addHour = () => {
    availableHours.value.push('');
};

const removeHour = (index) => {
    availableHours.value.splice(index, 1);
};

const formElement = ref(null);

const fetchCalendar = async () => {
    try {
        const response = await ApiService.get('calendar');
        availableDates.value = response.filter(item => item.hours?.length > 0);
        console.log('Datas disponíveis:', availableDates.value);
    } catch (error) {
        console.error('Erro ao buscar horários disponíveis:', error);
    }
};

fetchCalendar()

const submitForm = () => {
    const data = {
        date: availableDate.value,
        hours: availableHours.value
    };
    console.log('Form submitted:', data);
    AdminApiService.post('calendar', new FormData(formElement.value))
        .then(response => {
            console.log('Available date created:', response);
            // Optionally reset the form or show a success message
            availableDate.value = defaultDate;
            availableHours.value = defaultHours;
        })
        .catch(error => {
            console.error('Error creating available date:', error);
            // Optionally show an error message
        }).finally(fetchCalendar)
};

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
</script>