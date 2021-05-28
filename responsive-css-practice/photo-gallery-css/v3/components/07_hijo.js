Vue.component('hijo', {
  template: //html
    `<div class="p-5 bg-primary  text-white text-center ">
  <h4>componente hijo <strong>{{numero}}</strong></h4>
  <h4>Nombre: {{nombre}}</h4>
  </div>`,
  props:['numero'],
  data(){
    return{
      nombre: 'Ana'
    }
  },
  mouted(){
    this.$emit('nombreHijo',this.nombre)
  },
})