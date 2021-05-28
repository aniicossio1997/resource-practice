Vue.component('saludo',{
  template: //html
  `<div>
  <h1> {{saludo}} </h1>
  </div>
  `,
  data(){
    return{
      saludo:'hola desde carpeta component saludo'
    }
  }
});