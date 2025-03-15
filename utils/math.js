//Tenemos este archivo llamado Math.js que contiene la función de división lo tenemos en la carpeta utils       utils/math.js
function dividir(a, b) {
    if (b === 0) throw new Error("División por cero");
    return a / b;
}

module.exports.dividir = dividir
