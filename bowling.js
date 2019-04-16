 
 let Game = function () {
var puntaje=0;
    
    this.roll = function (puntos) {
        puntaje = puntaje + puntos;
    }

    this.getScore = function () {
         return puntaje;
    }
    
 }


  

 module.exports = Game;