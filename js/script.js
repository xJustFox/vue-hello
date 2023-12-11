const {createApp} = Vue;

createApp({
    data() {
        return {
            message: 'You have been hacked!!!',
            img: './img/logo.png'
        }
    },
}).mount('#app')