import Config from './../../app/config.js';

// Load the header
fetch(`${window.location.origin}/pages/partials/header.html`)
.then(response => response.text())
.then(header => {
    header = header.replaceAll('__PROFIL__', Config.root() + '/pages/profil.html');
    header = header.replaceAll('__PROJECTS__', Config.root() + '/pages/project/index.html');
    header = header.replaceAll('__CONTACT__', Config.root() + '/pages/contact.html');

    document.getElementById('header').innerHTML = header;
})
.catch(error => console.error(error));

// Load the footer
fetch(`${window.location.origin}/pages/partials/footer.html`)
.then(response => response.text())
.then(data => {
    document.getElementById('footer').innerHTML = data;
})
.catch(error => console.error(error));
