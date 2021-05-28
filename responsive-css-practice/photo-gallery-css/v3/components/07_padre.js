Vue.component('padre',{
  template: //html
  `<div class="p-5 bg-dark text-white text-center ">
  <h4>componente padre <strong>{{numeroPadre}} </strong> </h4>
  <button class="btn btn-danger" @click="numeroPadre++">+</button>
  <hijo :numero="numeroPadre" @nombreHijo="nombrePadre = $event"></hijo>
  <p>nombrePadre:</p>{{nombrePadre}}
  </div>`,
  data(){
    return{
      numeroPadre:0,
      nombrePadre:''
    }
  }
})