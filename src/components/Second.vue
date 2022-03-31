<template>
    <div class="pedido">
        <h1>PEDIDOS</h1>
        <div class="data_almacen form_contenedor">
            <section>
                
                <h2>Sweet Temptation</h2>
                <hr>
                <table>
                    <tbody>
                        <tr>
                            <th scope="col">Pedido</th>
                            <th scope="col">Pecador</th>
                            <th scope="col">Estatus</th>
                            <th scope="col">Revisar</th>
                        </tr>
                        <tr>
                            <td data-t="Pedido: ">RQ01</td>
                            <td data-t="Nombre: ">Erick Martínez</td>
                            <td data-t="Estatus: ">Finalizado</td>
                            <td><a href="#" class="">Revisar</a></td>
                        </tr>
                        <tr>
                            <td data-t="Pedido: ">RQ02</td>
                            <td data-t="Nombre: ">Jazmin Melgarejo</td>
                            <td data-t="Estatus: ">En Proceso</td>
                            <td><a href="#" class="">Revisar</a></td>
                        </tr>
                        <tr>
                            <td data-t="Pedido: ">RQ03</td>
                            <td data-t="Nombre: ">Juan Fernandez</td>
                            <td data-t="Estatus: ">Solicitado</td>
                            <td><a href="#" class="">Revisar</a></td>
                        </tr>
                        <tr>
                            <td data-t="Pedido: ">RQ04</td>
                            <td data-t="Nombre: ">Manuel Sandaya</td>
                            <td data-t="Estatus: ">Finalizado</td>
                            <td><a href="#" class="">Revisar</a></td>
                        </tr>
                    </tbody>
                </table>
            
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
    padding-top: 1.5rem;
}
.data_almacen {
    background-color: rgba(255, 254, 254, .6);
}
.data_almacen.form_contenedor {
    width: min(98%, 30rem);
    margin: 0 auto;
}
@media (min-width: 768px){
  .data_almacen{
    width: 50%;
  }
  .data_almacen p{
    font-size: 18px;
  }
}
@media (min-width: 76px){
    th, td {
    border: solid 1px var(--primario);
    padding: .5rem;
    }
    table {
        border-collapse: collapse;
        width: 90%;
    }
}
</style>