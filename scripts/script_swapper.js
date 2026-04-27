// Randomly load site0.css or site1.css for A/B theme switching
var rando = Math.round(Math.random());
var link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'css/site' + rando + '.css';
document.head.appendChild(link);
