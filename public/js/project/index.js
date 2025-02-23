import projects from './../../../storage/db/projects.js';

const cards = document.getElementById('cards');
const template = document.getElementById('card-template')
    .innerHTML;

projects.sort((a, b) => b.year - a.year);

projects.forEach(project => {
    let card = template;

    card = card.replaceAll("__TITLE__", project.title);
    card = card.replaceAll("__LINK__",`/pages/project/details.html?id=${project.id}`);
    card = card.replaceAll("__CARD__", `./../../../storage/projects/${project.id}/card.png`);

    cards.innerHTML += card;
});
