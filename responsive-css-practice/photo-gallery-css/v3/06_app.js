var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue 05!",
    contador: 0,

  },
  computed: {
    invertido() {
      return this.message.split('').reverse().join('');
    },
    color(){
      return{
        'bg-succes' : this.contador <= 20,
        'bg-warning' : this.contador >= 30,
        'bg-danger' : this.contador >=60
      }
    }
  }

});