<template>
    <div>
        <h1>CATALOGO</h1>
        <div class="data_almacen form_contenedor">
            <div>
               <h2>LOS MÁS BUSCADOS</h2> 
               <p>Disfruta con la creme de la creme</p>
            </div>
            <div class="data_item">
                <div class="itm">
                    <div><img src="../assets/empanada.webp" alt=""></div>
                    <div><h4>Croassant</h4></div>
                    <div class="end_point"><p>$25</p><button class="button">Agregar</button></div>
                </div>
                <div>
                    <div><img src="../assets/pastelito.webp" alt=""></div>
                    <div><h4>Pastel</h4></div>
                    <div class="end_point"><p>$25</p><button class="button">Agregar</button></div>
                </div>
                <div>
                    <div><img src="../assets/naranja.webp" alt=""></div>
                    <div><h4>Naranja</h4></div>
                    <div class="end_point"><p>$25</p><button class="button">Agregar</button></div>
                </div>
                <div>
                    <div><img src="../assets/dona.webp" alt=""></div>
                    <div><h4>Dona</h4></div>
                    <div class="end_point"><p>$25</p><button class="button">Agregar</button></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
section{
    display: block;
}
h1 {
  font-family: Georgia, serif;
  font-size: 36px;
  letter-spacing: 3.6px;
  padding-top: 1rem;
  color: #41b883;
}
h2{
    letter-spacing: 1px;
}
h4{
    margin: 0;
    font-size:22px;
}
.data_almacen {
    background-color: rgba(255, 254, 254, .6);
    display: grid;
    align-content: space-around;
}
.data_item{
    display: grid;
    align-content: space-around;
}
.pedido_input{
    width: 80%;
}
.pedido_label{
    width: 90%;
}
.button {
  display: inline-block;
  border-radius: 4px;
  background-color: /*#51182c; */ #41b883;
  border: none;
  color: #FFFFFF;
  text-align: center;
  font-size: 16px;
  padding: 5px;
  width: 100px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}
@media (min-width: 768px){
  .data_almacen{
    display: grid;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
  }
  .data_almacen p{
    font-size: 18px;
    margin: 0;
  }
  .data_item{
        display: grid;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
  }
  .end_point{
      display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: flex-start;
    justify-content: space-around;
    align-items: center;
  }
  .data_item img{
      max-width: 70%;
  }
  .itm{
    padding-bottom: 1rem;
    padding-top: 1rem;
  }
}
</style>