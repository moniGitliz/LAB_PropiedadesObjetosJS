/*
3. Semáforo (If/else + estados)
Simular el cambio de luces de un semáforo.
Tareas:
1.Usa el constructor Semaforo (inicia en "rojo").
2.Implementa el método cambiar() que rote entre "rojo" → "verde" → "amarillo" →
"rojo" usando if/else.
3.Llama al método 3 veces y verifica que el ciclo funcione.
*/

function semaforo() {
    this.estado ="Rojo";

    //Metodo para cambiar el estado del semáforo
    this.cambiar = function() {
        if (this.estado == "Rojo"){
            this.estado = "Verde";
        } else if (this.estado == "Verde") {
            this.estado = "Amarillo";
        } else {
            this.estado = "Rojo"
        }
        console.log("El semáforo ahora está en color: " + this.estado);
    };
}

let miSemaforo =new semaforo();

miSemaforo.cambiar();
miSemaforo.cambiar();
miSemaforo.cambiar();