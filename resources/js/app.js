import {createApp} from 'vue'
import Index from './components/Index'
import router from './router'

require('./bootstrap');

createApp({
    components:{Index},

}).use(router).mount('#app')

