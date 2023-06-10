<template>
  <div class="home">
    <div class="row mx-0">
      <div class="col-lg-6">
        <div class="img-cont">
          <img alt="Mazebook logo" src="../assets/img/logo.svg">
          <h2 class="text-center text-lg-start">
            Conéctate con amigos y con el resto del mundo usando Mazebook
          </h2>
        </div>
      </div>
      <div class="col-lg-6">
        <card-comp :btns="btnArray" class="mx-auto cardcomp">
          <template #default>
            <form action="">
              <div class="mb-3 mt-2">
                <input type="email" class="form-control" placeholder="Ingresa tu mail">
              </div>
              <div class="mb-3 mt-2">
                <input type="email" class="form-control" placeholder="Contraseña">
              </div>
            </form>
          </template>
          <template #footer>
            <hr />
            <button class="btn btn-success">Crear cuenta</button>
          </template>
        </card-comp>
      </div>
    </div>    
  </div>
</template>

<script>
import CardComp from '../components/CardComp.vue';
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'HomeView',
  components: {
    CardComp 
  },
  data(){
    return{
      btnArray: [
        {
          txt: 'Iniciar sesión',
          class: 'btn-primary',
        },
        {
          txt: 'Olvidaste tu contraseña',
          class: '',
        },
      ]
    }
  },
}
</script>

<style scoped>
  h2{
    max-width: 470px;
    margin: auto;
    font-size: 1.8rem;
  } 
  .home{
    max-width: 895px;
    margin: auto;
  }
  .img-cont{
    display: flex;
    flex-direction: column;
  }
  img{
    max-width: 315px;
    margin: 1em auto 0 auto;
  }
  .cardcomp{
    max-width: 398px;
  }
  .btn-success{
    margin: auto;
    min-width: 195px;
  }
  @media(min-width: 992px){
    .home{
      margin: 4em auto;
    }
    img{
      margin: 0;
      margin-top: 5.6em;
    }
    h2{
      margin: 0;
      margin-top: -0.8em;
      margin-left: 0.8em;
    }
    .cardcomp{
      margin-top: 3rem;
    }
  }
</style>