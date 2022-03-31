<template>
  <div class="home">
    <HelloWorld/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
  }
}
</script>

<style scoped>
.home{
  /*background-color: rgba(184, 204, 195, 0.73);*/
  background-image: url("@/assets/backmain.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>