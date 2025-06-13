const API_BASE_URL = 'https://api.manycure.app/webhook/admin/';

class ApiService {
    static async request(endpoint, options = {}) {
        const url = `${API_BASE_URL}${endpoint}`;
        const defaultHeaders = { };
        const headers = { ...defaultHeaders, ...(options.headers || {}) };

        const token = localStorage.getItem('token');
        
        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }

        const config = {
            method: options.method || 'GET',
            headers,
            ...options,
        };

        if (options.body && typeof options.body !== 'string') {
            config.body = options.body;
        }

        const response = await fetch(url, config);
        return response.json();
    }

    static get(endpoint, options = {}) {
        return this.request(endpoint, { ...options, method: 'GET' });
    }

    static post(endpoint, data, options = {}) {
        return this.request(endpoint, { ...options, method: 'POST', body: data });
    }

    static put(endpoint, data, options = {}) {
        return this.request(endpoint, { ...options, method: 'PUT', body: data });
    }

    static delete(endpoint, options = {}) {
        return this.request(endpoint, { ...options, method: 'DELETE' });
    }
}

export default ApiService;