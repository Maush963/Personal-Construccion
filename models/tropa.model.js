
module.exports = class Modelo {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_clase,nivel,vida,ataque,imagen) {
        this.clase = mi_clase;
        this.nivel = 1;
        this.vida = mi_vida;
        this.ataque = mi_ataque;
        this.imagen = mi_imagen;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        tropas.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    //Los métodos estáticos se ejecutan sobre la clase, no sobre el objeto.
    //Esto nos sirve para crear métodos que no requieran de una instancia para ser llamados.
    static fetchAll() {
        return tropas;
    }

}