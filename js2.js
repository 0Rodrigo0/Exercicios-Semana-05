//carrega informações gravadas no cache do browser
onload = () => {
  let nome = localStorage.getItem("nome");
  let h1 = document.querySelector("#nome");
  h1.innerHTML = nome;
};

// função que pega o valor e joga no h1 automagicamente
const atualizar = (element) => {
  element = document.querySelector("input");
  element = input.value;

  localStorage.setItem("nome", element);
};
