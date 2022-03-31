<template>
  <div class="footer">
    <div class="contenedor">
      <div class="footer__elementos">
        <p><span>SWEET TEMPTATION</span></p>
        <a href="#">Eventos Especiales</a><br>
        <a href="#">Bolsa de Trabajo</a><br>
        <a href="#">Uber Eats</a>
      </div>
      <div class="footer__elementos">
        <p><span>INVITADOS</span></p>
        <a href="#">Mi cuenta</a><br>
        <a href="#">Facturación</a><br>
        <a href="#">Atención a Clientes</a><br>
      </div>
      <div class="footer__elementos">
        <p><span>LEGAL</span></p>
        <a href="#">Aviso de Privacidad</a><br>
        <a href="#">Términos y Condiciones</a>
      </div>
      <div class="footer__elementos">
        <p><span>REDES SOCIALES</span></p>
        <a href="https://www.instagram.com/erickmalo02/" ><img src="../assets/instagram.png" alt=""></a>
        <a href="https://www.facebook.com/ericmalonito/" ><img src="../assets/facebook.png" alt=""></a>
        <a href="https://wa.me/+525535258306/?text=Hola Chiquibaby" ><img src="../assets/whatsapp.png" alt=""></a>
      </div>
    </div>
    <div class="mentions">
      <p>2022 | Erick José Martínez López</p>
    </div>
  </div>
   
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');
:root{
  --fondo: #35495e;
  --original:  #51182c;
}
.contenedor {
  width: min(90%, 120rem);
  margin: 0 auto;
  color: white;
  padding-top: 1.5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
.contenedor a{
  text-decoration: none;
  color:white;
  font-size: 12px;
}
@media (min-width: 768px){
  .contenedor {
    color: white;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    padding-top: 1.5rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}
.footer {
  font-family:Open Sans;
    background-color: /*#35495e;*/ #3c676a;
    color: var(--blanco);
    font-size: 1rem;
    text-decoration: none;
}
.mentions{
  color: white;
  font-size: 13px;
}
</style>