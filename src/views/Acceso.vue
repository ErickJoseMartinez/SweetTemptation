<template>
  <div class="about">
    <Access/>
  </div>
  <Footer/>
</template>

<script>
import Footer from "../components/Footer.vue";
import Access from "../components/Acceso.vue";

export default {
  name: 'Acceso',
    components:{
      Footer,
      Access,
  }
}
</script>


<style scoped>
.about{
  /*background-color: rgba(184, 204, 195, 0.73);*/
  background-image: url("@/assets/backmain.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  align-content: space-around;
  padding-bottom: 1rem;
}
@media (min-width: 768px){
  .about{
    height: 450px;
  }
}
</style>