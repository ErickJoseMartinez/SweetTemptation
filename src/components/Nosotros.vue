<template>
  <div class="sweet">
    <div class="nosotros_grl">
      <div class="data">
        <h1>SWEET TEMPTATION</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id nisl id nunc aliquet sodales quis eget libero. Nunc rutrum augue molestie lacus cursus tincidunt. Sed sit amet ante bibendum, mattis orci eu, consequat sapien. Suspendisse blandit leo sed arcu imperdiet dapibus. Maecenas nec imperdiet sapien.</p>
      </div>
      <div><img src="../assets/antique.jpg" alt=""></div>
    </div>
    <div class="data new">
      <h2>Información SWEET TEMPTATION</h2>
      <h4>Dirección</h4>
      <p>Av. Juárez S/N, Centro Histórico de la Cdad. de México, Centro, Cuauhtémoc, 06050 Ciudad de México, CDMX</p>
      <h4>Teléfono</h4>
      <p>55 35258306</p>
      <h4>Horarios de Atención</h4>
      <p>Lunes - Viernes 08:00 - 18:00</p>
    </div>
  </div>
</template>
 
<style scoped>
.nosotros_grl {
  width: min(90%, 120rem);
   margin: 0 auto;
}
img {
    max-width: 100%;
}
p {
  font-size: 18px;
}
.data {
  background-color: rgba(255, 254, 254, .6);
}
@media (min-width: 768px){
  .nosotros_grl{
    display: flex;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
  }
  .data{
    width: 50%;
  }
  .data.new{
    width: 100%;
    padding: 1rem;
  }
  .data p{
    font-size: 18px;
  }
  img {
    width: 500px;
  }
}
h1 {
  font-family: Georgia, serif;
  font-size: 36px;
  letter-spacing: 3px;
  padding-top: 1rem;
  font-size: 2em;
  margin: 0.67em 0;
  color: #41b883;
}

</style>