<template>
  <div class="sweet">
    <h1>SWEET TEMPTATION</h1>
     <!-- <img alt="Vue logo" src="../assets/chocolate_cake.jpg"> -->
     <video class="videos" src="@/assets/preview.mp4" autoplay muted loop></video>
    <p>¡Vamos! Pecar es dulce y divertido </p>
  </div>
  <div>
    <button class="button"><span>Pecar </span></button>
  </div>
  <Footer/>
</template>

<script>

import Footer from "../components/Footer.vue";


export default {
  name: 'HelloWorld',
    components:{
      Footer,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.videos{
   width: 60%; 
   height: auto;
}
h1 {
  /*font-family: 'Poiret One';*/
  font-family: Georgia, serif;
  font-size: 36px;
  letter-spacing: 3.6px;
  padding-top: 1rem;
  color: #41b883;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
img{
  max-width: 50%;
}

.button {
  display: inline-block;
  border-radius: 4px;
  background-color: /*#51182c; */ #41b883;
  border: none;
  color: #FFFFFF;
  text-align: center;
  font-size: 20px;
  padding: 10px;
  width: 150px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}

.button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button span:after {
  content: ':*';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button:hover span {
  padding-right: 25px;
}

.button:hover span:after {
  opacity: 1;
  right: 0;
}
</style>
