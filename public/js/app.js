import root from './../../app/root.js';

// Load the header
fetch(`${root()}/pages/partials/header.html`)
.then(response => response.text())
.then(header => {
    header = header.replaceAll('__PROFIL__', root() + '/pages/profil.html');
    header = header.replaceAll('__PROJECTS__', root() + '/pages/project/index.html');
    header = header.replaceAll('__CONTACT__', root() + '/pages/contact.html');

    document.getElementById('header').innerHTML = header;
})
.catch(error => console.error(error));

// Load the footer
fetch(`${root()}/pages/partials/footer.html`)
.then(response => response.text())
.then(data => {
    document.getElementById('footer').innerHTML = data;
})
.catch(error => console.error(error));
