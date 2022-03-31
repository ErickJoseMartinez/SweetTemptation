<template>
   <div class="contenedor-header">
    <div><img class="logo" alt="Vue logo" src="./assets/sweet_temptation-removebg-preview.png">  </div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/nosotros">Nosotros</router-link> |
      <router-link to="/catalogo">Catalogo</router-link> |
      <router-link to="/orders">Orden</router-link> |
      <router-link to="/pedidos">Pedidos</router-link> |
      <router-link to="/almacen">Almacen</router-link> |
      <router-link to="/acceso">Acceso</router-link> |
    </nav>
  </div>
  
  <router-view/>
 
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /*font-family: Georgia, serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*color: #2c3e50;*/
  color: /*#51182c;*/ #35495e;
}
h1 {
  /*font-family: 'Poiret One';*/
  font-family: Georgia, serif;
  font-size: 36px;
  letter-spacing: 3.6px;
  padding-top: 1rem;
  color: #41b883;
}
body{
  background-color: white;
}
nav {
  padding: 25px;
  text-align: right;
  margin-left: auto;
}

nav a {
  font-weight: bold;
  color: /*#791c3f;*/
  #35495e;
  text-decoration:none;
}

nav a.router-link-exact-active {
  color: #41b883;
}
.contenedor-header{
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}
.logo{
  width: 200px;
  height: 100px;
  text-align: left;
}
footer{
    background-color: #a0a0a0 !important;
    color: #fff;
}
.icon{
  color: #fff;
 }
</style>
