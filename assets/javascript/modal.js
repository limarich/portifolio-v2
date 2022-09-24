// this javascript file control the modal and populates this one

const FRONTEND = [
  {
    title: "Html",
    experience: 4,
    afinite: 0.9,
  },
  {
    title: "Css",
    experience: 4,
    afinite: 0.8,
  },
  {
    title: "JavaScript",
    experience: 4,
    afinite: 0.85,
  },
  {
    title: "React",
    experience: 4,
    afinite: 0.6,
  },
];
const BACKEND = [
  {
    title: "Nodejs",
    experience: 3,
    afinite: 0.8,
  },
  {
    title: "Express",
    experience: 3,
    afinite: 0.6,
  },
];
const OTHERS = [
  {
    title: "Figma",
    experience: 4,
    afinite: 0.7,
  },
  {
    title: "Canva",
    experience: 3,
    afinite: 0.7,
  },
];
const abilities = [FRONTEND, BACKEND, OTHERS];
const body = document.querySelector("body");
const modal = document.querySelector(".skills-modal");
const contentModal = document.querySelector(".skills-modal .content");

console.log(abilities);

function handleClickModal(card) {
  displayModal();
  populatesModal(card);
}

function displayModal() {
  modal.classList.toggle("active");
  body.classList.toggle("locked");
  modal.scrollIntoView();
}
function populatesModal(card) {
  let content = [];
  abilities[card].forEach((data, index) => content.push(formatData(data)));
  contentModal.innerHTML = `
          <i class="uil uil-times close-modal" id="close-modal" onclick="handleClickModal()"></i>
          ${content.map((data, index) => data)}
    `;
}
function formatData(data) {
  return `
    <li class="item">
        <span class="title">${data.title}</span>
        <span class="experience" >${data.experience} ano(s)</span>
        <span class="afinite">${data.afinite * 100}%</span>
        <span class="progress-bar" style="--i: ${data.afinite}"></span>
    </li>`;
}
