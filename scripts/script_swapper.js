// Randomly load one of five themes (site0–site4)
const rando = Math.floor(Math.random() * 5);
const link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'css/site' + rando + '.css';
document.head.appendChild(link);
