const canvas = document.querySelector('canvas');
canvas.width = innerWidth;
canvas.height = innerHeight;
const c = canvas.getContext("2d");




function Rectangle(x,y,dx,dy){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.width = 50;
    this.height = 50;
    this.color = "black"

    this.draw = function(){
        c.beginPath();
        c.fillRect(this.x,this.y,this.width,this.height);
        c.fillStyle = this.color;
        
        c.stroke();
        
        this.update();
    }


    this.update = function(){
        

       if(this.x+this.width >=innerWidth || this.x<=0){
        this.dx = -this.dx;
       }

       else if(this.y+this.height>=innerHeight|| this.y<=0){
        this.dy = -this.dy;
       }
       
        this.x = this.x+this.dx;
        this.y = this.y+this.dy;
        
        

    }

   
}


function checkCollison(rect1,rect2){
    if(rect1.x < rect2.x + rect2.width && rect1.x + rect1.width > rect2.x && rect1.y < rect2.y + rect2.height && rect1.y + rect1.height > rect2.y){

        rect1.color = "red";
        rect2.color = "red"
        console.log("collison",rect1.color);
        
    }

    else{
        rect1.color = "black";
        rect2.color = "black"
    }
    
}






const x1 = Math.random()*innerWidth;
const y1 = Math.random()*innerHeight;

const x2 = Math.random()*innerWidth;
const y2 = Math.random()*innerHeight;


const dx1 = (Math.random()-0.5)*15;
const dy1 = (Math.random()-0.5)*15
const dx2 = (Math.random()-0.5)*15
const dy2 = (Math.random()-0.5)*15


const rect1 = new Rectangle(x1,y1,dx1,dy1);
const rect2 = new Rectangle(x2,y2,dx2,dy2);

function animate(){
    requestAnimationFrame(animate)
    c.clearRect(0,0,innerWidth,innerHeight);
    rect1.draw();
    rect2.draw();
    checkCollison(rect1,rect2)
}

animate()