<template>
  <div class="pedidos">
    <First/>
  </div>
  <Footer/>
</template>

<script>
import Footer from "../components/Footer.vue";
import First from "../components/Second.vue";

export default {
  name:"Pedidos",
  components:{
    Footer,
    First
  }
}
</script>

<style scoped>
.pedidos{
  /*background-color: rgba(184, 204, 195, 0.73);*/
  background-image: url("@/assets/backmain.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 1rem;
}
@media (min-width: 768px){
  .pedidos{
    height: 350px;
    padding-bottom: 1rem;
  }
}
</style>