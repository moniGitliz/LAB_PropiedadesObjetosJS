/*
1. Libro (Objeto básico + if)
Crear un sistema de préstamo de libros.
Tareas:
1.Usa el constructor Libro para crear un objeto con título y autor.
2.Agrega una propiedad prestado = false.
3.Implementa el método prestar() que:
•Cambie prestado a true si el libro está disponible.
•Muestre un mensaje de error si ya está prestado (usando if).
4.Prueba prestar el libro dos veces y observa los mensajes.
*/

function libro(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
    this.prestado = false;

    //Método para prestar un  libro
    this.prestar = function(){
        if(this.prestado){
            console.log("El libro " + this.titulo + " ya está prestado" );
        } else {
            this.prestado = true;
            console.log("Has prestado el libro " + this.titulo + " del autor " + this.autor);
        }
    };
}


let libro1 = new libro("Cien años de soledad", "Gabriel García Márquez")


libro1.prestar();
libro1.prestar();
libro1.prestar();