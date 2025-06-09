<template>
    <div class="min-h-screen bg-gray-100 py-8 flex items-center justify-center">
        <form ref="form" @submit.prevent="login" class="max-w-md mx-auto bg-white p-8 rounded shadow">
            <div class="mb-4">
            <label for="email" class="block text-gray-700 font-bold mb-2">Email:</label>
            <input type="email" id="email" name="email" v-model="email" required
                class="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div class="mb-4">
            <label for="password" class="block text-gray-700 font-bold mb-2">Senha:</label>
            <input type="password" id="password" name="password" v-model="password" required
                class="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div v-if="error" class="mb-4 text-red-600 text-sm">{{ error }}</div>
            <button type="submit"
            class="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition">
            Entrar
            </button>
        </form>
    </div>
</template>
<script setup>
import ApiService from '@/services/ApiService';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/authStore';
const router = useRouter();
const authStore = useAuthStore();
import { ref } from 'vue';
const email = ref('contato@umatagpordia.com.br');
const password = ref('123432');
const error = ref('');
const form = ref(null);
const login = async () => {
    try {
        const response = await ApiService.post('login', new FormData(form.value));
        // Redirecionar ou mostrar mensagem de sucesso
        console.log('Usuário logado com sucesso:', response);
        // Armazenar token no localStorage
        authStore.setToken(response.token);
        // Redirecionar para a página inicial
        router.push({name: 'account'});
    } catch (err) {
        error.value = err.message || 'Erro desconhecido.';
    }
};
</script>