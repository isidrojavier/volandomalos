//proyecto canvas y me sugerirá eventos canvas
/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 1000;
const numerOfEnemies = 100;

const enemiesArray = [];

//fabricaremos muchos enemigos
/*enemy1 = {
    x: 10,
    y: 50,
    width: 200,
    height: 200,
}*/

class Enemy {
    constructor(){
        //this.x = 10;
        this.x = Math.random() * canvas.width;
        //this.y = 50;
        this.y = Math.random() * canvas.height;
        this.width = 100;
        this.height = 100; 
        this.speed = Math.random() * 4 - 2;
    }

    update(){
        this.x += this.speed;
        this.y += this.speed;
    }

    draw(){
        //ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.strokeRect(this.x, this.y, this.width, this.height);
    }
};

//const enemy1 = new Enemy();
//const enemy2 = new Enemy();

for (let i = 0; i < numerOfEnemies; i++){
    enemiesArray.push(new Enemy());
}

//console.log(enemiesArray);

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    //enemy1.update();
  /*  enemy1.x++;
    enemy1.y++;
    enemy2.x+=0.5;
    enemy2.y+=0.5;*/
    //ctx.fillRect(enemy1.x, enemy1.y, enemy1.width, enemy1.height);
    //ctx.fillRect(enemy2.x, enemy2.y, enemy2.width, enemy2.height);
    //enemy1.draw();
    enemiesArray.forEach(enemy =>{
        enemy.update();
        enemy.draw();
    });
    requestAnimationFrame(animate);
}

animate();