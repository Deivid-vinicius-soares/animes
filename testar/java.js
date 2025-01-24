const form  = document.getElementById("myForm");
const resultado = document.getElementById("resultado");

form.addEventListener("submit", (event) =>{
    event.preventDefault();

    const campoA = document.getElementById("campoA").value;
    const campoB = document.getElementById("campoB").value;

    
    if (!campoB || !campoA){
        resultado.textContent = "por favor, preencha todos os campos.";
    } else if (campoB > campoA) {
        resultado.textContent = "formulario valido, CampoB e maior que CampoA.";
    }

    else {
        resultado.textContent = "formulario invalido! CampoB não e maior que CampoA.";
    }
});