const canvas = document.querySelector('canvas')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight






var c = canvas.getContext('2d');


const mouse = {
    x:undefined,
    y:undefined
}

function Circle(x,y,radius){
    this.x = x;
    this.y = y;
    
    this.radius = radius;
    this.color="black"
    

    this.draw = function(){

        

        
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,2*Math.PI);
        c.fillStyle = this.color;
        
        c.fill()

        this.update()

        
    

    }


   

    this.update = function(){
        
        if(mouse.x)

        this.x = mouse.x;
        this.y = mouse.y;

        
        
        
        
        




        
    }

}


window.addEventListener('mousemove',(e)=>{
    mouse.x  = e.x;
    mouse.y = e.y;
})





let radius = 50;


let x = Math.random()*(innerWidth-2*radius)+radius;

    
let y =  Math.random()*(innerHeight-2*radius)+radius;
    
    
    


const circle1 = new Circle(x,y,radius);


function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    
    circle1.draw();

   
    
    

   
}


animate()





