class Pila {
    constructor() {
        this.elementos = [];
    }

    // Método para añadir elementos a la pila
    insertar(elemento){
        // se agrega el elemento al arreglo
        this.elementos.push(elemento);
    }

    // Ejercicio 1: Realizar una funcion o metodo que se le ingrese un tamaño N y llene la (FILA O PILA ) con el total de elementos ingresados en el tamaño N ejemplo: objecto.ejercicios1(4) [3,4,5,6]
    ejercicio1(numero){
        for(let i=1; i<=numero; i++){
            this.enpilar(i)
        }

    }

    // Ejercicio 2: Realizar un metodo que recorra toda la (FILA O PILA) y dar true o false si los elementos en este estan par, inpar, par, inpar
    esParImparAlterno() {
        for (let i = 0; i < this.elementos.length; i++) {
            if (i % 2 === 0 && this.elementos[i] % 2 !== 0) return false; // Par en posición par
            if (i % 2 !== 0 && this.elementos[i] % 2 === 0) return false; // Impar en posición impar
        }
        return true;
    }

    // Ejercicio 3: Realizar un metodo que sume el total de todos los elementos de la (FILA O PILA) y validar si existen elementos que no sean numericos no sumarlos en esta operaciones
    sumaElementos() {
        let suma = 0;
        this.elementos.forEach(elemento => {
            if (typeof elemento === "number") suma += elemento;
        });
        return suma;
    }

    // Ejercicio 4: Realizar un metodo que devuelva un arreglo en el orden de salida de la (FILA O PILA) solo numeros pares
    obtenerNumerosPares() {
        return this.elementos.filter(elemento => typeof elemento === "number" && elemento % 2 === 0);
    }

    // Ejercicio 5: Realizar un metodo que devuelva un arreglo en el orden de salida de la (FILA O PILA) solo numeros inpares
    obtenerNumerosImpares() {
        return this.elementos.filter(elemento => typeof elemento === "number" && elemento % 2 !== 0);
    }

    // Ejercicio 6: Realizar un metodo que devuelva un arreglo en el orden de salida de la (FILA O PILA) solo cadenas o strings
    obtenerStrings() {
        return this.elementos.filter(elemento => typeof elemento === "string");
    }

    // Ejercicio 7: Realizar un metodo que cuente la cantidad de tipos de datos: strings, number, array y dar un resultado con el total de cada uno de estos elementos
    contarTiposDeDatos() {
        let conteo = { string: 0, number: 0, array: 0 };

        this.elementos.forEach(elemento => {
            if (typeof elemento === "string") conteo.string++;
            if (typeof elemento === "number") conteo.number++;
            if (Array.isArray(elemento)) conteo.array++;
        });

        return conteo;
    }

    // Ejercico 8: Realizar un metodo que se de el nombre de un elemento en la (FILA O PILA) y eliminelo de esta estructura y reindex todos los elementos nota: si no existe ese elemento dar un mensaje retroalimentando lo ocurrido
    eliminarElementoPorNombre(elemento) {
        let indice = this.elementos.indexOf(elemento);
        if (indice !== -1) {
            this.elementos.splice(indice, 1); // Eliminar el elemento
        } else {
            console.log("Elemento no encontrado en la pila.");
        }
    }

    // Ejercicio 9: Realizar un metodo que se de la posicion de un elemento en la (FILA O PILA) y eliminelo de esta estructura y reindex todos los elementos nota: si no existe esa posicion dar un mensaje retroalimentando lo ocurrido
    eliminarElementoPorPosicion(posicion) {
        if (posicion >= 0 && posicion < this.elementos.length) {
            this.elementos.splice(posicion, 1); // Eliminar por índice
        } else {
            console.log("Posición no válida.");
        }
    }

    // Ejercicio 10: Realizar un metodo que dando la posicion de un elemento en la (FILA O PILA ) elimine o atienda en orden los elementos hasta ese punto nota: si no existe ese elemento dar un mensaje retroalimentando lo ocurrido
    eliminarHastaPosicion(posicion) {
        if (posicion >= 0 && posicion < this.elementos.length) {
            this.elementos = this.elementos.slice(posicion + 1); // Eliminar todos hasta la posición dada
        } else {
            console.log("Posición no válida.");
        }
    }
}

// Ejemplo
let pila = new Pila();

pila.insertar(2);
pila.insertar(3);
pila.insertar(4);
pila.insertar(5);
pila.insertar("texto");
pila.insertar([1, 2, 3]);

console.log(pila.esParImparAlterno());
console.log(pila.sumaElementos());
console.log(pila.obtenerNumerosPares());
console.log(pila.obtenerNumerosImpares());
console.log(pila.obtenerStrings());
console.log(pila.contarTiposDeDatos());

// Eliminar un elemento específico
pila.eliminarElementoPorNombre(3);
console.log(pila.elementos);

// Eliminar un elemento por posición
pila.eliminarElementoPorPosicion(2);
console.log(pila.elementos);

// Eliminar todos los elementos hasta una posición específica
pila.eliminarHastaPosicion(1);
console.log(pila.elementos);
