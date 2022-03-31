<template>
    <div>
        <h1>ALMACEN</h1>
        <h2>Lista de Almacen</h2>
        <div class="data_almacen form_contenedor">
            <section>
                <div>
                    <div class="pedido_label">
                        <label>Harina: </label>
                    </div>
                    <div class="pedido_input">
                        <input list="cantidad_harina" name="harina"/>
                        <datalist id="cantidad_harina">
                            <option value="20%"></option>
                            <option value="40%"></option>
                            <option value="60%"></option>
                            <option value="80%"></option>
                            <option value="100%"></option>
                        </datalist>
                    </div>
                </div>
                <div>
                    <div class="pedido_label">
                        <label>Leche: </label>
                    </div>
                    <div class="pedido_input">
                        <input list="cantidad_leche" name="leche"/>
                        <datalist id="cantidad_leche">
                            <option value="20%"></option>
                            <option value="40%"></option>
                            <option value="60%"></option>
                            <option value="80%"></option>
                            <option value="100%"></option>
                        </datalist>
                    </div>
                </div>
                <div>
                    <div class="pedido_label">
                        <label>Levadura: </label>
                    </div>
                    <div class="pedido_input">
                        <input list="cantidad_levadura" name="levadura"/>
                        <datalist id="cantidad_levadura">
                            <option value="20%"></option>
                            <option value="40%"></option>
                            <option value="60%"></option>
                            <option value="80%"></option>
                            <option value="100%"></option>
                        </datalist>
                    </div>
                </div>
                <div>
                    <div class="pedido_label">
                        <label>Huevos: </label>
                    </div>
                    <div class="pedido_input">
                         <input list="cantidad_huevos" name="huevos"/>
                        <datalist id="cantidad_huevos">
                            <option value="20%"></option>
                            <option value="40%"></option>
                            <option value="60%"></option>
                            <option value="80%"></option>
                            <option value="100%"></option>
                        </datalist>
                    </div>
                </div>
                <div>
                    <div class="pedido_label">
                        <label>Gas: </label>
                    </div>
                    <div class="pedido_input">
                        <input list="cantidad_gas" name="gas"/>
                        <datalist id="cantidad_gas">
                            <option value="20%"></option>
                            <option value="40%"></option>
                            <option value="60%"></option>
                            <option value="80%"></option>
                            <option value="100%"></option>
                        </datalist>
                    </div>
                </div>
                <div>
                    <div class="pedido_label">
                        <label>Accesorios: </label>
                    </div>
                    <div class="pedido_input">
                        <input list="cantidad_accesorios" name="accesorios"/>
                        <datalist id="cantidad_accesorios">
                            <option value="20%"></option>
                            <option value="40%"></option>
                            <option value="60%"></option>
                            <option value="80%"></option>
                            <option value="100%"></option>
                        </datalist>
                    </div>
                </div>
            </section>
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
  padding-top: 1.5rem;
  color: #41b883;
}
h2{
    letter-spacing: 1px;
}
.data_almacen {
    background-color: rgba(255, 254, 254, .6);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
    margin-bottom: 1rem;
    border: solid 2px var(--primario);
    border-radius: 1%;
    align-content: space-around;
    flex-wrap: wrap;
    justify-content: center;
}
.data_almacen.form_contenedor {
    width: min(80%, 20rem);
    margin: 0 auto;
}
.pedido_input{
    width: 80%;
}
.pedido_label{
    width: 90%;
}
@media (min-width: 768px){
  .data_almacen{
    width: 50%;
  }
  .data_almacen p{
    font-size: 18px;
  }
}
</style>