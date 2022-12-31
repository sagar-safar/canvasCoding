const canvas = document.querySelector('canvas')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');
function Circle(x,y,dy,radius){
    this.x = x;
    this.y = y;

    this.dy = dy;
    this.radius = radius;

    this.draw = function(){

       

        
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,2*Math.PI);
        c.fillStyle = 'red';
        
        c.fill()

        
    

    }

    this.update = function(){
        

        if((this.y >innerHeight-this.radius)){
            
            this.dy = -this.dy*0.99;
    
            
            
        }
        else{
            this.dy += 1;
            
        }


        this.y += this.dy;
        
        console.log(this.dy);

        
        
        
        
        this.draw()

       
        

        
    }

}


let x = innerWidth/2;
let dy = 2
let y =  innerHeight/2;
let radius = 50;

const circle = new Circle(x,y,dy,radius)


function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    circle.update()
    

   
        
        
    
       
}
    
    
animate()    
    
