var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var randAlpha = alpha[Math.floor(Math.random() * 26)];

document.body.addEventListener('keydown', function(event) {
    if(randAlpha === event.key){
        let secretKey = document.createElement('p');
        secretKey.textContent = "Secret key \"" + randAlpha + "\" pressed!";
        const body = document.querySelector('body');
        body.appendChild(secretKey);
    
        randAlpha = alpha[Math.floor(Math.random() * 26)];
    }
});