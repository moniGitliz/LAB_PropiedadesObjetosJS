/*
2. Lista de Compras (Array + for)
Gestionar una lista dinámica de productos.
Tareas:
1.Usa el constructor ListaCompras para crear una lista vacía (this.productos = []).
2.Añade 3 productos con el método agregar().
3.Implementa el método mostrar() que use un for para listar los productos numerados (ej: "1.
Manzanas").
4.Muestra la lista completa en consola.
*/

function listaCompras() {
    this.productos = [];

    //Función para agregar productos a la lista
    this.agregar = function(producto){
        this.productos.push(producto);
        console.log(producto + " se ha agregado a la lista!")
    };

    //Función para mostrar la lista de productos numerada
    this.mostrarLista = function(){
        console.log ("--------// Lista de compras //--------")
        for(let i = 0; i< this.productos.length; i++) {
            console.log ((i+1) +". "+this.productos[i]);
        }
    };

}

let miLista = new listaCompras();


miLista.agregar("Manzanas");
miLista.agregar("Peras");
miLista.agregar("Mangos");
miLista.agregar("Sandia");

miLista.mostrarLista();
