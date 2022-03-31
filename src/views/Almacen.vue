<template>
  <div class="almacen">
    <First/>
  </div>
  <Footer/>
</template>

<script>
import Footer from "../components/Footer.vue";
import First from "../components/First.vue";

export default {
  name:"Almacen",
  components:{
    Footer,
    First
  }
}
</script>

<style scoped>
.almacen{
  /*background-color: rgba(184, 204, 195, 0.73);*/
  background-image: url("@/assets/backmain.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 1rem;
}
@media (min-width: 768px){
  .almacen{
    height: 450px;
    padding-bottom: 1rem;
  }
}
</style>