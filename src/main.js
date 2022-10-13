import { createApp } from 'vue'
import App from './App.vue'
import SearchLocation from './components/SearchLocation.vue'
import ListWeather from './components/ListWeather.vue'


const app = createApp(App);

app.component('search-location', SearchLocation);
app.component('list-weather', ListWeather)

app.mount('#app');

