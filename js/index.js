var animation = bodymovin.loadAnimation({
    container: document.getElementById("bm"), // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'json/data.json' // the path to the animation json
});

var disneyanimation = bodymovin.loadAnimation({
    container: document.getElementById("disney"), // the dom element that will contain the animation
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: 'json/disneydata.json' // the path to the animation json
});

var avataranimation = bodymovin.loadAnimation({
    container: document.getElementById("avatar"), // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'json/avatardata.json' // the path to the animation json
});

var staranimation = bodymovin.loadAnimation({
    container: document.getElementById("star"), // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'json/stardata.json' // the path to the animation json
});

var originalsanimation = bodymovin.loadAnimation({
    container: document.getElementById("originals"), // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'json/originalsdata.json' // the path to the animation json
});

var apparatenanimation = bodymovin.loadAnimation({
    container: document.getElementById("apparaten"), // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'json/apparatendata.json' // the path to the animation json
});