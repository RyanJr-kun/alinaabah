import './bootstrap';

import { createApp } from 'vue';

// Import PrimeVue
import PrimeVue from 'primevue/config';

// WAJIB: Import tema dari @primeuix/themes
import '@primeuix/themes/lara/light/indigo/theme.css'; // <--- BARIS INI YANG DISESUAIKAN

// Import PrimeIcons
import 'primeicons/primeicons.css';

// (Opsional) Import komponen Vue Anda di sini
import ExampleComponent from './components/ExampleComponent.vue';

// Buat aplikasi Vue
const app = createApp({});

// Daftarkan PrimeVue sebagai plugin
app.use(PrimeVue);

// (Opsional) Daftarkan komponen Anda secara global
app.component('example-component', ExampleComponent);

// Mount aplikasi Vue ke elemen dengan id="app"
app.mount('#app');
