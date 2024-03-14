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
        this.image.src = 'enemy3.png';
        
        this.speed = Math.random() * 4 + 1;
        this.spriteWidth = 218;
        this.spriteHeight = 177;
        this.width = this.spriteWidth / 2;
        this.height = this.spriteHeight / 2;
        this.x = Math.random() * (canvas.width - this.width);
        this.y = Math.random() * (canvas.height - this.height);
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * 3 + 1);
        //this.angle = Math.random() * 2;
        this.angle = 0;
        this.angleSpeed = Math.random() * 1.5 + 0.5; //velocidad
        //this.curve = Math.random() * 200 + 50; //jugando con el número conseguimos más angulo o no
    }

    update(){
        //si pongo en el seno un valor más grande que el coseno el movimiento
        //será de arriba a abajo sinusoidalmente
        //si el coseno es más grande, el movimiento será de izda a dcha
        //podemos intercambiar seno y coseno en las dos líneas para ver diferencias
        //experimentar con los angulos en PI y los senos y cosenos para ver diferentes movimientos        
        //this.x = this.curve * Math.sin(this.angle * Math.PI/90) + (canvas.width/2 - this.width/2);
        this.x = canvas.width/2 * Math.sin(this.angle * Math.PI/90) + (canvas.width/2 - this.width/2);
        //this.y = this.curve * Math.cos(this.angle * Math.PI/180) + (canvas.height/2 - this.height/2);
        this.y = canvas.height/2 * Math.cos(this.angle * Math.PI/270) + (canvas.height/2 - this.height/2);
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