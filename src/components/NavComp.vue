<template>
  <nav class="navbar navbar-expand-lg bg-primary">
    <div class="container justify-content-evenly">
        <router-link class="nav-link" :class="{ active : ActivePath.home }" to="/"><span class="material-icons-round">home</span></router-link> 
        <router-link class="nav-link" :class="{ active : ActivePath.about }" to="/about"><span class="material-icons-round">info</span></router-link>
        <router-link class="nav-link" :class="{ active : ActivePath.post }" to="/post"><span class="material-icons-round">featured_play_list</span></router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavComp",
  computed: {
    ActivePath(){
      if(this.$route.path === "/"){
        return{
          home: true,
          about: false,
          post: false,
        }
      }else if(this.$route.path === "/about"){
        return{
          home: false,
          about: true,
          post: false,
        }
      }else if(this.$route.path === "/post"){
        return{
          home: false,
          about: false,
          post: true,
        }
      }
    },
  },
}
</script>

<style scoped>
  .material-icons-round{
    color: white;
    font-size: 1.4em;
    background-color: rgba(218, 218, 218, 0.158);
    padding: 0.3em;
    border-radius: 50%;
    margin: 0.1em;
  }
  .active .material-icons-round{
    color: white;
    background-color: rgba(133, 128, 128, 0.158);
    border: 1px solid rgba( 248, 244, 244, 0.342);
  }
</style>