<template>
  <div class="about">
    <Order/>
  </div>
  <Footer/>
</template>

<script>
import Footer from "../components/Footer.vue";
import Order from "../components/Order.vue";

export default {
  name: 'Nosotros',
    components:{
      Footer,
      Order,
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
}
@media (min-width: 768px){
  .about{
    height: 620px;
  }
}
</style>