<template>
    <div>
        <h1>ORDEN</h1> 
        <div>
            <div class="data_almacen form_contenedor initial">
                <div>
                    <label for="name">Pecador, arrepientete y danos tu nombre</label>
                    <input type="text" id="name" placeholder="Pecador" name="name" required minlength="4" maxlength="50" size="25">
                </div>
                <div>
                    <label for="cliente">Tu id de pecador si eres tan amable</label>
                    <input type="number" id="cliente" placeholder="1" name="cliente" required minlength="4" maxlength="50" size="25">
                </div>
            </div>
            <div>
                <hr>
                <h4>Mi carrito</h4>
                <div class="data_almacen form_contenedor">
                    <div class="head_carrito">
                        <p>PRODUCTO</p>
                        <p>CANTIDAD</p>
                        <p>TOTAL</p>
                    </div>
                    <div class="head_carrito">
                        <div class="itm_carrito">
                            <img src="../assets/empanada.webp" alt="">
                            <p>Croassant</p>
                        </div>
                        <div><p>1</p></div>
                        <div><p>25$</p></div>
                    </div>
                     <div class="head_carrito">
                        <div class="itm_carrito">
                            <img src="../assets/dona.webp" alt="">
                            <p>Dona</p>
                        </div>
                        <div><p>1</p></div>
                        <div><p>25$</p></div>
                    </div>
                    <hr>
                    <div class="head_carrito">
                        <p>TOTAL</p>
                        <p></p>
                        <p>50$</p>
                    </div>
                </div>
                <button class="button">A Pecar</button>
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
}
.data_almacen.form_contenedor.initial{
    width: min(90%, 50rem);
    margin: 0 auto;
}
.head_carrito img{
      max-width: 35%;
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
  .head_carrito img{
      max-width: 35%;
  }
  .data_almacen.form_contenedor {
    width: min(98%, 50rem);
    margin: 0 auto;
    }
  .head_carrito{
    display: grid;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
    padding: .5rem;
  }
  .data_almacen p{
    font-size: 18px;
    margin: 0;
  }
  .itm_carrito{
      display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: flex-start;
    justify-content: center;
    align-items: center;
  }
  .data_almacen.form_contenedor.initial{
    width: min(80%, 20rem);
    margin: 0 auto;
    padding-bottom: 1rem;
    padding-top: 1rem;
    }
}
</style>