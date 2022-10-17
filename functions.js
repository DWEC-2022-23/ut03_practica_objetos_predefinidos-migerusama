function reyesMagos(fecha) {
    var msecPorDia = 1000 * 60 * 60 * 24;
    fecha = new Date(fecha);
    var proximosReyes = fecha.getMonth() == 0 && fecha.getDate() <= 6 ? new Date(fecha.getFullYear(), 0, 7) : new Date(fecha.getFullYear() + 1, 0, 7);
    var intervalo = proximosReyes.getTime() - fecha.getTime();
    var dias = Math.floor(intervalo / msecPorDia);
    alert("Faltan: " + dias + " dias");
}

function fechaHoy() {
    var fechaHoy = new Date();
    var dia = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sabado"];
    var mes = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

    alert("Hoy es " + dia[fechaHoy.getDay()] + ", " + fechaHoy.getDate() + " de " + mes[fechaHoy.getMonth()] + " de " + fechaHoy.getFullYear() + " y son las " + fechaHoy.getHours() + ":" + fechaHoy.getMinutes() + " horas");
}

function calcularAreaCirculo(radio) {
    var area = Math.round((Math.PI * Math.pow(radio, 2)) * 100) / 100;
    var longitud = Math.round((2 * Math.PI * radio) * 100) / 100;
    alert("Área: " + area + "\nLongitud: " + longitud);
}

function calcularAleatorio(comienzo, fin) {
    comienzo = Number(comienzo)
    fin = Number(fin)
    alert(Math.floor(Math.random() * (fin - comienzo + 1) + comienzo));
}

function mitadCar(cadena) {
    alert(cadena.substring(0, cadena.length / 2))
}
function ultimoCaracter(cadena) {
    alert(cadena[cadena.length - 1])
}
function cadenaInversa(cadena) {
    alert(cadena.split("").reverse().join(""))
}
function cadenaGuiones(cadena) {
    var newString = "";
    for (let i = 0; i < cadena.length; i++) {
        newString += cadena[i] + "-";
    }
    alert(newString.substring(0, newString.length - 1))
}
function contarVocales(cadena) {
    var cont = 0;
    cadena.split("").forEach(element => {
        if (element === "a" || element === "e" || element === "i" || element === "o" || element === "u")
            cont += 1;
    });
    alert(cont)
}