//proyecto canvas y me sugerirá eventos canvas
/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 1000;
const numerOfEnemies = 10;

const enemiesArray = [];

let gameFrame = 0;

class Enemy {
    constructor(){
        this.image = new Image();
        this.image.src = 'enemy2.png';
        
        this.speed = Math.random() * 4 + 1;
        this.spriteWidth = 266;
        this.spriteHeight = 188;
        this.width = this.spriteWidth / 2;
        this.height = this.spriteHeight / 2;
        this.x = Math.random() * (canvas.width - this.width);
        this.y = Math.random() * (canvas.height - this.height);
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * 3 + 1);
        //this.angle = Math.random() * 2;
        this.angle = 0;
        this.angleSpeed = Math.random() * 0.2;
        this.curve = Math.random() * 5; //jugando con el número conseguimos más angulo o no
    }

    update(){
        this.x -= this.speed;
        //cambiando el número hacemos la curva más prominente
        //this.y += 3 * Math.sin(this.angle);
        this.y += this.curve * Math.sin(this.angle);
        this.angle += this.angleSpeed;
        //this.angle += 0.1;
        //this.x += Math.random() * 5 - 2.5;
        //this.y += Math.random() * 5 - 2.5;

        if (this.x + this.width <0) this.x = canvas.width;

        if (gameFrame % this.flapSpeed === 0){
            this.frame > 4 ? this.frame = 0 : this.frame++;
        }
    }

    draw(){
        //ctx.strokeRect(this.x, this.y, this.width, this.height);
        //ctx.drawImage(enemyImage, 0, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
        //ctx.drawImage(enemyImage, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    }
};

for (let i = 0; i < numerOfEnemies; i++){
    enemiesArray.push(new Enemy());
}

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    enemiesArray.forEach(enemy =>{
        enemy.update();
        enemy.draw();
    });
    gameFrame++;
    requestAnimationFrame(animate);
}

animate();