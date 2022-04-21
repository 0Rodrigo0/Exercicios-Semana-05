// declaracao das const selecionando as class do html
const entradaTarefa = document.querySelector(".entrada-tarefa");
const botaoTarefa = document.querySelector(".botao-tarefa");
const listaTarefa = document.querySelector(".lista-tarefa");

// evento do botao que chama a funcao adicionaTarefa
botaoTarefa.addEventListener("click", adicionaTarefa);

// funcoes
function adicionaTarefa(event) {
  //previne a pagina de se auto-atualizar
  event.preventDefault();

  // criação da div das tarefas e a classe
  const divTarefa = document.createElement("div");
  divTarefa.classList.add("tarefa");

  // criando a lista li e a classe
  const novaTarefa = document.createElement("li");
  novaTarefa.innerText = entradaTarefa.value;
  novaTarefa.classList.add("item-tarefa");
  console.log(novaTarefa);
  // aqui adicionando na div o li
  divTarefa.appendChild(novaTarefa);

  //criando botão de lido e a classe
  const botaoLido = document.createElement("button");
  botaoLido.innerHTML = '<i class="fas fa-check"></i>';
  botaoLido.classList.add("botao-lido");
  // aqui adicionando na div o btn
  divTarefa.appendChild(botaoLido);

  //criando botão de lido e a classe
  const botaoLixo = document.createElement("button");
  botaoLixo.innerHTML = '<i class="fas fa-trash"></i>';
  botaoLixo.classList.add("botao-lixo");
  // aqui adicionando na div o btn
  divTarefa.appendChild(botaoLixo);

  listaTarefa.appendChild(divTarefa);
  //aqui esta limpando o input após a inserção para ele ficar em branco
  entradaTarefa.value = "";
}
