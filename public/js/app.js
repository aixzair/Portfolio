// Load the header
fetch(`${window.location.origin}/pages/partials/header.html`)
.then(response => response.text())
.then(data => {
    document.getElementById('header').innerHTML = data;
})
.catch(error => console.error(error));

// Load the footer
fetch(`${window.location.origin}/pages/partials/footer.html`)
.then(response => response.text())
.then(data => {
    document.getElementById('footer').innerHTML = data;
})
.catch(error => console.error(error));
