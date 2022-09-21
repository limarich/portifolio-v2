// this javascript file populates the cards of skills section
const SOFTSKILLS = [
    {
        title: "Proativo",
        description: "Não gosto de ficar parado, é bem comum me ver tomando iniciativa" 
    }, 
    {
        title: "Comunicativo",
        description: "É muito importante para se ter uma boa dinâmica no ambiente de trabalho,  passar adiante coisas que sabemos e aprender coisas novas" 
    }, 
    {
        title: "Curioso",
        description: "Gosto de explorar diferentes caminhos e tentar entender como as coisas funcionam" 
    }, 
    {
        title: "Trabalho em equipe",
        description: "Dividir e conquistar... Uma heurística que vale pra vida toda. Juntos somos mais capazes" 
    }, 
    {
        title: "Resiliente",
        description: "Mesmo nas situações mais complicadas, vou fazer o meu melhor para atingir meus objetivos" 
    }, 
    {
        title: "Criativo",
        description: "Testar novas ideias é algo que combina muito comigo. Inovar, recriar, testar... nunca canso disso " 
    }, 
]
const softskills = document.querySelector("#softskills");
SOFTSKILLS.forEach(skill => {
    softskills.innerHTML += `
    <li class="card">
        <span class="card-name">${skill.title}</span>
        <p class="card-description">
             ${skill.description}
        </p>
  </li>
    `
});
let cards = document.querySelectorAll("#softskills .card");
cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    resetSelection(cards)
    card.classList.add("active")
  });
  card.addEventListener("mouseleave", () => {
    resetSelection(cards)
  });
});
function resetSelection(cards) {
  cards.forEach((key,index) => {
    cards[index].classList.remove("active")
  })
}