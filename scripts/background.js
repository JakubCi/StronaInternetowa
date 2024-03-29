canvas = document.getElementsByTagName('canvas')[0];
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;

var ctx = canvas.getContext('2d');
var mediaQuery=window.matchMedia("(max-width: 1020px)")
var layers = {
    n: 5, //number of layers
    letters: [100, 40, 30, 20, 10], //letters per layer (starting from the deepest layer)
    coef: [0.1, 0.2, 0.4, 0.6, 0.8], //how much the letters move from the mouse (starting from the deepest layer)
    size: [16, 22, 36, 40, 46], //font size of the letters (starting from the deepest layer)
    color: ['#fff', '#eee', '#ccc', '#bbb', '#aaa'], //color of the letters (starting from the deepest layer)
    font: 'Courier' //font family (of every layer)
};
var characterList = ['Creativity', 'Teamwork', 'Problem-solving', 'Communication skills', 'Confidence', 'Analitycal Skills', 'Self-discipline', 'Curiosity', 'Self-development', 'Organization', 'Responsibility', 'Punctuality', '</>', 'HTML', 'CSS', 'Python', 'Selenium', 'Javascript', 'MySQL', 'Sqlite3', 'Machine Learning', 'Artificcial Intelligence', ' ', ' ', ' ', ' '];
resize2(mediaQuery)
x.addEventListener('resize',()=>{
    resize2()
})
function resize2(mediaQuery){
    if(!mediaQuery.matches){
        layers = {
            n: 5, //number of layers
            letters: [100, 40, 30, 20, 10], //letters per layer (starting from the deepest layer)
            coef: [0.1, 0.2, 0.4, 0.6, 0.8], //how much the letters move from the mouse (starting from the deepest layer)
            size: [16, 22, 36, 40, 46], //font size of the letters (starting from the deepest layer)
            color: ['#fff', '#eee', '#ccc', '#bbb', '#aaa'], //color of the letters (starting from the deepest layer)
            font: 'Courier' //font family (of every layer)
        };
        characterList = ['Creativity', 'Teamwork', 'Problem-solving', 'Communication skills', 'Confidence', 'Analitycal Skills', 'Self-discipline', 'Curiosity', 'Self-development', 'Organization', 'Responsibility', 'Punctuality', '</>', 'HTML', 'CSS', 'Python', 'Selenium', 'Javascript', 'MySQL', 'Sqlite3', 'Machine Learning', 'Artificcial Intelligence', ' ', ' ', ' ', ' '];
    }
    else{
        layers = {
            n: 4, //number of layers
            letters: [15, 7, 8, 2, 2], //letters per layer (starting from the deepest layer)
            coef: [0.1, 0.2, 0.4, 0.6, 0.8], //how much the letters move from the mouse (starting from the deepest layer)
            size: [16, 22, 36, 40, 46], //font size of the letters (starting from the deepest layer)
            color: ['#fff', '#eee', '#ccc', '#bbb', '#aaa'], //color of the letters (starting from the deepest layer)
            font: 'Courier' //font family (of every layer)
        };
        characterList = ['Creativity', 'Problem-solving', 'Communication skills', 'Analitycal Skills','Responsibility', '</>', 'HTML', 'CSS', 'Python', 'Selenium', 'Javascript','Machine Learning'];
    }
}
/*Modify options here*/

//possible characters that will appear


//stocks possible character attributes


/*End of options*/



var characters = [];
var mouseX = document.body.clientWidth/2;
var mouseY = document.body.clientHeight/2;

var rnd = {
    btwn: function(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    },
    choose: function(list) {
        return list[rnd.btwn(0, list.length)];
    }
};



/*LETTER DRAWING*/

function drawLetter(char) {
    ctx.font = char.size + 'px ' + char.font;
    ctx.fillStyle = char.color;
    
    var x = char.posX + (mouseX-canvas.width/2)*char.coef;
    var y = char.posY + (mouseY-canvas.height/2)*char.coef;

    ctx.fillText(char.char, x, y);
}



/*ANIMATION*/

document.onmousemove = function(ev) {
    mouseX = ev.pageX - canvas.offsetLeft;
    mouseY = ev.pageY - canvas.offsetTop;

    if (window.requestAnimationFrame) {
        requestAnimationFrame(update);
    } else {
        update();
    }
};

function update() {
    clear();
    render();
}

function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function render() {
    for (var i = 0; i < characters.length; i++) {
        drawLetter(characters[i]);
    }
}



/*INITIALIZE*/

function createLetters() {
    for (var i = 0; i < layers.n; i++) {
        for (var j = 0; j < layers.letters[i]; j++) {

            var character = rnd.choose(characterList);
            var x = rnd.btwn(0, canvas.width);
            var y = rnd.btwn(0, canvas.height);

            characters.push({
                char: character,
                font: layers.font,
                size: layers.size[i],
                color: layers.color[i],
                layer: i,
                coef: layers.coef[i],
                posX: x,
                posY: y
            });

        }
    }
}

createLetters();
update();



/*REAJUST CANVAS AFTER RESIZE*/

window.onresize = function() {
    location.reload();
};
