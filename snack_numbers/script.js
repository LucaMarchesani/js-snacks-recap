/**
Creare due div; uno conterrà numeri dispari di colore rosso e l'altro conterrà numeri pari in verde.
 Ad ogni click di un bottone chiedere all'API un numero, se è dispari metterlo nel blocco dispari, e se è pari in quello pari.
*/

const { createApp } = Vue

createApp({
    data() {
        return {
            greenList: [],
            redList: [],

        }
    },
    methods: {
        getRandomNumber() {
            axios.get("https://flynn.boolean.careers/exercises/api/random/int")
                .then((response) => {
                    console.log(response.data.response);
                    if (response.data.response % 2 === 0) {
                        this.greenList.push(response.data.response);
                    } else {
                        this.redList.push(response.data.response);
                    }
                })
        },
        created() {
            this.getRandomNumber()
        }
    }
}).mount('#app')