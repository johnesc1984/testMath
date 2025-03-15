//ahora creamos en la misma ubicación o de forma externa el archivo  tests/math.test.js
//veamos que tiene el mismo nombre del archivo pero tiene un .test.js es muy importante 

const { dividir } = require("../utils/math"); //importamos el archivo original para usar la funcion

describe("dividir()", () => { //creamos una descripción sobre lo que pretendemos evaluar de forma general

  test("debe dividir dos números correctamente", () => { //hacemos la descripción de forma individual
    // Arrange, preparamos los datos con los que evaluaremos
    const a = 10;
    const b = 2;

    // Act
    const resultado = dividir(a, b); //pasamos los datos a la función esperando un resultado

    // Assert
    expect(resultado).toBe(5); //comparamos el resultado esperando que sea 5
  });

  test("debe lanzar error al dividir por cero", () => { //hacemos la descripción de forma individual
    expect(() => dividir(10, 0)).toThrow("División por cero"); //comparamos los resultados esperando el retorno de un error
  });

});