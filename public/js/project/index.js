import root from './../../../app/root.js';
import projects from './../../../storage/db/projects.js';

const cards = document.getElementById('cards');
const template = document.getElementById('card-template')
    .innerHTML;

projects.sort((a, b) => new Date(b.date) - new Date(a.date));

projects.forEach(project => {
    let card = template;

    card = card.replaceAll("__TITLE__", project.title);
    card = card.replaceAll("__LINK__", `${root()}/pages/project/details.html?id=${project.id}`);
    card = card.replaceAll("__CARD__", `${root()}/storage/projects/${project.id}/card.png`);

    cards.innerHTML += card;
});
