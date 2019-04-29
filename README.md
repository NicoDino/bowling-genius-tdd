# bowling-genius-tdd
Trabajo Practico Obligatorio: Test Driven Development (TDD)
Agustin Chiarotto -  Nicolas Dinolfo

El siguiente trabajo conta de un desarrollo guiado por pruebas (TDD) para obtener un codigo refinado y funcional del puntaje de un juego de Bowling. Para esto utilizamos lenguaje javaScript junto con la herramienta de testeo Mocha.
Este deporte consiste en derribar pinos de madera arrojando una bola. Los puntos de un juego se basan en la cantidad de pinos tumbados con la suma de puntaje bonus si ocurre que se derriben todos en un turno. Cada turno consta de un maximo de dos tiros.

Sistema de puntuacion
-Cada pino derribado suma un punto.
-Derribar todos los pinos en el primer tiro del turno se denomina Strike. Este tiro suma 10 puntos (por los 10 pinos tumbados) con un bonus de los puntos totales de los dos siguientes lanzamientos.
-Derribar todos los pinos utilizando los dos tiros del turno se denomina Spare. Este tiro suma 10 puntos con un bonus de los puntos del siguiente lanzamiento.

Observacion
-Si en el ultimo turno ocurre un strike, deberan realizarce dos tiros extras para calcular el bonus de puntos de este strike. 
-Analogamente si ocurre un spare.


Desarrollo del codigo
Para esto se planteo en un principio un set de pruebas simple para representar los requisitos de un juego con todos los tiros a la canaleta con puntaje cero. Asi obtuvimos la siguiente prueba


  it("gutter game con tiros", function() {
    rollMany(game, 20, 0);
    game.getScore().should.equal(0);
});

Esto nos permitio plantear la estructura basica de la clase game, con variables basicas como puntajes y un arreglo para llevar su registro. Ademas de un metodo que sea capaz de recibir la cantidad de pinos derribados y almacenarlos para luego calcular el puntaje final.

Luego de plantear el codigo para que esto ejecute correctamente comenzamos a agregar funcionalidades extras al juego a traves de más casos de prueba, lo que concluyo en la clase test.js adjuntada en este repositorio. Estos test nos permitieron obtener un mayor conocimiento del problema y proporcionaron una guia del desarrollo del codigo. 
Asi por medio de iteraciones Elegir test - Completar codigo para test - verificar si el test pasa - refinar codigo - ultima verificacion, pudimos obtener la funcionalidad completa del juego, lo que resulto en el codigo de bowling.js.

Ademas de la implementancion del bowling aprendimos a utilizar de manera efectiva el flujo de trabajo propuesto por Git, generando nuevas ramas de codigo y commits segun funcionalidad y con aprobacion del codigo por revision.
