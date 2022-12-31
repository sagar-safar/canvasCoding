const canvas = document.querySelector('canvas')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight






var c = canvas.getContext('2d');
var score = 0;

function Circle(x,y,dx,dy,radius){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color="black"
    

    this.draw = function(){

        

        
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,2*Math.PI);
        c.fillStyle = this.color;
        
        c.fill()

        
    

    }


   

    this.update = function(){
        
        if((this.x >innerWidth-this.radius) || (this.x-this.radius<0)){
            this.dx = -this.dx;
            
        }

        if((this.y >innerHeight-this.radius) || (this.y-this.radius<0)){
            this.dy = -this.dy;
            
        }

        
        
        this.draw()
        this.x = this.x+this.dx;
        this.y = this.y+this.dy;
        




        
    }

}


let checkCollison = function(circle1,circle2){

    
    let A = circle1.x-circle2.x;
    let B = circle1.y-circle2.y;
    
    


    let dis = Math.sqrt(Math.pow(A,2)+Math.pow(B,2));
    
    if(dis<=2*circle1.radius){
        
        console.log("yes");
        
        circle1.color = "red"
        circle2.color = "red"

        
    }

    else{
        circle1.color = "black"
        circle2.color = "black"
    }

    

}







const circleArr = []
let radius = 50;


for(let i=0;i<2;i++){
    let x = Math.random()*(innerWidth-2*radius)+radius;
    let dx = (Math.random()-0.5)*8;
    let dy = (Math.random()-0.5)*8
    
    let y =  Math.random()*(innerHeight-2*radius)+radius;
    
    
    


    circleArr.push(new Circle(x,y,dx,dy,radius))

}


function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    for(let i = 0;i<2;i++){
        circleArr[i].update()
    }

    checkCollison(circleArr[0],circleArr[1])

   
    
    

   
}


animate()





