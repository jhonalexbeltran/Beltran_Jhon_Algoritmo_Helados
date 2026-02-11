// Lista de sabores (puedes modificar o agregar más)
let sabores = [
    { nombre: "Chocolate", puntos: 0 },
    { nombre: "Vainilla", puntos: 0 },
    { nombre: "Fresa", puntos: 0 },
    { nombre: "Pistacho", puntos: 0 },
    { nombre: "Mango", puntos: 0 },
    { nombre: "Cookies & Cream", puntos: 0 },
    { nombre: "Dulce de leche", puntos: 0 },
    { nombre: "Limón", puntos: 0 },
    { nombre: "Caramelo", puntos: 0 },
    { nombre: "Coco", puntos: 0 }
];

// Elementos del DOM
let opcionA = document.getElementById("opcionA");
let opcionB = document.getElementById("opcionB");
let ranking = document.getElementById("ranking");

let indiceA;
let indiceB;

// Genera una nueva comparación A/B
function nuevaComparacion() {
    indiceA = Math.floor(Math.random() * sabores.length);
    indiceB = Math.floor(Math.random() * sabores.length);

    // Evita que sea el mismo sabor
    while (indiceA === indiceB) {
        indiceB = Math.floor(Math.random() * sabores.length);
    }

    opcionA.textContent = sabores[indiceA].nombre;
    opcionB.textContent = sabores[indiceB].nombre;
}

// Registra el voto
function votar(indice) {
    sabores[indice].puntos += 1;
    actualizarRanking();
    nuevaComparacion();
}

// Actualiza el ranking ordenado
function actualizarRanking() {
    let saboresOrdenados = [...sabores].sort((a, b) => b.puntos - a.puntos);

    ranking.innerHTML = "";

    saboresOrdenados.forEach((sabor, posicion) => {
        let li = document.createElement("li");
        li.textContent = `${posicion + 1}. ${sabor.nombre} - ${sabor.puntos} puntos`;
        ranking.appendChild(li);
    });
}

// Eventos
opcionA.addEventListener("click", function() {
    votar(indiceA);
});

opcionB.addEventListener("click", function() {
    votar(indiceB);
});

// Inicialización
nuevaComparacion();
actualizarRanking();
