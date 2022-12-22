/** Creare un input che permetta all'utente di inserire un messaggio e aggiungerlo ad una conversazione (tipo whatsapp).
 Dopo averlo aggiunto chiedere all'API una frase random (attraverso random/sentence) aggiungendo anch'essa al thread,
 differenziando i messaggi utente da quelli del computer. */

const { createApp } = Vue;

createApp({
  data() {
    return {

      userList: [],
      iaList: [],
      userMessage: '',
    }
  },

  methods: {
    addMessage(userMessage) {
      if (this.userMessage !== '') {
        this.userList.push(userMessage);
        this.userMessage = '';
        setTimeout(this.getRandomReply, 500);
      };
    },

    getRandomReply() {
      axios.get('https://flynn.boolean.careers/exercises/api/random/sentence')
        .then((response) => {
          console.log(response.data);
          this.iaList.push(response.data.response)
          console.log(this.iaList);
        })
    }
  },

}).mount('#app')