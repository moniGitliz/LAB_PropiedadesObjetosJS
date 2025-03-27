/*
4. Termómetro (Variables + condiciones)
Alertar sobre temperaturas extremas.
Tareas:
1.Usa el constructor Termómetro.
2.Implementa el método actualizar(grados) que muestre:
•"¡Hace calor!" si > 30°C.
•"¡Hace frío! " si < 10°C.
•"Temperatura agradable" en otros casos.
3.Prueba con temperaturas de 5°, 20° y 35°.
*/

function termometro () {
    this.temperatura = 0;

    //Método para actualizar temperatura y mostrar alerta
    this.actualizarTemp = function(grados) {
        this.temperatura = grados;

        if (this.temperatura > 30) {
            console.log("¡Hace calor! 🥵 ");
        } else if (this.temperatura < 10 ){
            console.log ("¡Hace frío! 🥶 ");
        } else {
            console.log("¡Temperatura agradable! 😎 " );
        }
    };
}

let miTermometro = new termometro();

miTermometro.actualizarTemp(5);
miTermometro.actualizarTemp(20);
miTermometro.actualizarTemp(35);
miTermometro.actualizarTemp(10);