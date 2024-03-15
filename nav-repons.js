const webBehavior = document.getElementById('web-page');
const toggleButton = document.getElementById('toggle-button');

toggleButton.addEventListener('click', function() {
    webBehavior.classList.toggle('click');
});

// let x = 2;
// let y = 5;
// const z = x * y;
// concole.log(z);