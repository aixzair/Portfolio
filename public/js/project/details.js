import projects from './../../../storage/db/projects.js';

const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get('id'));

const project = projects.find(p => p.id === id);
if (project === undefined) {
    window.location.href = '/error/404.html';
}

// Get hmtl elements

const title = document.getElementById('title');
const summary = document.getElementById('summary');
const year = document.getElementById('year');

const linksSection = document.getElementById('links-section');
const links = document.getElementById('links');

const keyPointsSectoin = document.getElementById('keyPoints-section');
const keyPoints = document.getElementById('keyPoints');

const picturesSection = document.getElementById('pictures-section');
const pictureTemplate = document.getElementById('picture-template').innerHTML;
const pictures = document.getElementById('pictures');

// Set html elements

title.textContent = project.title;
summary.textContent = project.summary;
year.textContent = project.year;

if (project.links.length === 0) {
    linksSection.style.display = 'none';
} else {
    project.links.forEach(link => {
        const li = document.createElement('li');

        const a = document.createElement('a');
        a.textContent = link.label;
        a.href = link.href;
        a.target = '_blank';

        li.appendChild(a);
        links.appendChild(li);
    });
}

if (project.keyPoints.length === 0) {
    keyPointsSectoin.style.display = 'none';
} else {
    project.keyPoints.forEach(keyPoint => {
        const li = document.createElement('li');
        li.textContent = keyPoint;

        keyPoints.appendChild(li);
    });
}

if (project.pictures === 0) {
    picturesSection.style.display = 'none';
} else {
    for (let i = 1; i <= project.pictures; i++) {
        let picture = pictureTemplate;

        picture = picture.replaceAll('__SRC__', `./../../storage/projects/${project.id}/img${i}.png`);
        picture = picture.replaceAll('__ALT__', `${project.title} - ${i}`);

        pictures.innerHTML += picture;
    }
}
