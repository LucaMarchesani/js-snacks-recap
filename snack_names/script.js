/***
Chiedere all'API 10 nomi da inserire in un array di invitati.
 Una volta generata la lista chiedere all'utente di dire il proprio nome.
 Se è uno degli invitati ritornare un messaggio di benvenuto, altrimenti di accesso negato.
*/

const { createApp } = Vue;

createApp({
  data() {
    return {
      namesList: [],
      randomName: null,
      inputName: '',
      isNameValid: false,

    }
  },
  methods: {
    isValid(inputName) {
      this.isNameValid = this.namesList.includes(inputName);
    },
    getRandomNames() {
      let i = 0;
      while (i < 10) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/name')
          .then((response) => {
            console.log(response.data);
            this.randomName = response.data.response;
            this.namesList.push(this.randomName);
          })
        i++
      }
    }
  },

  created() {
    this.getRandomNames();
  },

}).mount('#app');