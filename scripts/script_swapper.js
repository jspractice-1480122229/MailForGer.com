// Randomly load one of five themes (site0–site4)
var rando = Math.floor(Math.random() * 5);
var link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'css/site' + rando + '.css';
document.head.appendChild(link);
