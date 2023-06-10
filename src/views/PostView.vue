<template>
    <div class="post">
        <img src="../assets/img/logo.svg" alt="Mazebook logo" class="logo">
        <CardComp class="mt-2 mx-auto single-post" parrafo="hello!" picture="https://images.pexels.com/photos/14623857/pexels-photo-14623857.jpeg" />
        <CardComp class="mt-2 mx-auto single-post" parrafo="hola!" picture="https://images.pexels.com/photos/10401968/pexels-photo-10401968.jpeg" />
        <CardComp class="mt-2 mx-auto single-post" parrafo="chau!" picture="https://images.pexels.com/photos/2440079/pexels-photo-2440079.jpeg" />
    
    </div>
</template>
<script>
import CardComp from '../components/CardComp.vue';
export default {
    name: "PostView",
    components: {
        CardComp,
    }
}

</script>
<style scoped>
  .post{
    min-height: 60vh;
    max-width: 895px;
    margin: auto;
  }
  .logo{
    max-width: 115px;
    padding: 0.2rem;
  }
  .single-post{
    max-width: 550px;
  }
</style>