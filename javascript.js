const frases = [
    "(Piénsalo otra vez.)",
    "(¿Estás completamente segura?)",
    "(Te doy un momento para reconsiderarlo.)",
    "(¿Y si lo ves desde otro ángulo?)",
    "(Espera, escúchame un segundo más.)",
    "(Tal vez con más información cambies de opinión.)",
    "(Pero, ¿y si te arrepientes después?)",
    "(Eso suena como un 'quizás' disfrazado.)",
    "(Déjame explicarlo mejor.)",
    "(Te apuesto a que si lo analizas bien, cambia la respuesta.)",
    "(¿Y si te doy una razón más para decir que sí?)",
    "(Sé que lo estás reconsiderando.)",
    "(Dame una oportunidad de convencerte.)",
    "(Pero imagina lo genial que sería si dijeras que sí.)",
    "(¿Eso es un no definitivo o un no por ahora?)",
    "(Si te doy 10 segundos para pensarlo de nuevo, ¿seguirá siendo un no?)",
    "(Creo que en el fondo quieres decir que sí.)",
]

function cambiarfrase(boton) {
    if (frases.length === 0) {
        boton.textContent = "Si";
        if(document.getElementById("RespuestaNo").addEventListener("click", function(){
            window.location.href = "Respuesta.html"
        }))
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * frases.length);
    boton.textContent = frases[indiceAleatorio];  

    // Eliminamos la frase utilizada del array
    frases.splice(indiceAleatorio, 1);
}

// Evento para mover y cambiar el texto del botón
document.getElementById("RespuestaNo").addEventListener("click", function() {
    cambiarfrase(this);
});

document.getElementById("RespuestaSi").addEventListener("click", function() {
    document.getElementById("RespuestaSi").addEventListener("click", function(){
            window.location.href = "Respuesta.html"
    })
});

