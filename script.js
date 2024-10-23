const novaTarefa = document.querySelector("#input_id");
const botaoAdd = document.getElementById("botao_add_id");
const formulario = document.getElementById("form_id");
const listaDeTarefas = document.getElementById("lista_id");
const botaoMarca = document.getElementById("botao_marca_id");
const botaoLimpa = document.getElementById("botao_limpa_id")

botaoAdd.addEventListener("click",(event) => {
    event.preventDefault();


    const elementoLista = document.createElement("li");
    const textoTarefa = document.createElement("p");
    const iconeDeleta = document.createElement("span");

    textoTarefa.innerText = novaTarefa.value;
    iconeDeleta.innerText = "x";

    if (textoTarefa.innerText.trim()==="") {
        alert("Olá, Boa Tarde!!!");

    } else {
        listaDeTarefas.appendChild(elementoLista);
        elementoLista.appendChild(textoTarefa);
        elementoLista.appendChild(iconeDeleta);
        formulario.reset();
    }
    novaTarefa.focus();

    textoTarefa.addEventListener("click", () => {

    textoTarefa.classList.toggle("checked");
    verificarMarcados();
});

iconeDeleta.addEventListener("click", () =>{

    elementoLista.remove();
});

   verificarMarcados();
});

botaoMarca.addEventListener("click", () => {
    let todasAsTarefas = document.querySelectorAll("p");
    if (botaoMarca.innerText === "Marcar Todos") {
        todasAsTarefas.forEach ((tarefa)=> {
            tarefa.classList.add("checked");
        });
        botaoMarca.innerText = "Desmarcar todos";
    } else {
        todasAsTarefas.forEach((tarefa)=> {
            tarefa.classList.remove("checked");
        });
        botaoMarca.innerText = "Marca todos";
    }    
});

botaoLimpa.addEventListener("click", () => {
    listaDeTarefas.innerHTML = "";
});

function verificarMarcados() {
    let todasAsTarefas = document.querySelectorAll("p");
    let verificacao = [];

    todasAsTarefas.forEach((tarefa) => {

        if (!tarefa.classList.contains("checked")) {

            verificacao.push(tarefa);
        }
    });

    if (verificacao.length === 0 && todasAsTarefas) {
        botaoMarca.innerText = "Desmarcar todos";
    } else { 


        botaoMarca.innerText = "Marcar todos";
    }
}