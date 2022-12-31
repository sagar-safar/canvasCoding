const canvas = document.querySelector('canvas')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;



const mouse = {
    x:undefined,
    y:undefined
}

window.addEventListener('mousemove',(e)=>{
    mouse.x = e.x
    mouse.y = e.y

})

var c = canvas.getContext('2d');

function Circle(x,y,dx,dy,radius){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = function(){

        let r = Math.random()*256;
        let g = Math.random()*256;
        let b = Math.random()*256;

        let color = `rgb(${r},${g},${b})`
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,2*Math.PI);
        c.fillStyle = color;
        
        c.fill()

        
    

    }

    this.update = function(){
        if((this.x >innerWidth-this.radius) || (this.x-this.radius<0)){
            this.dx = -this.dx;
            
        }

        if((this.y >innerHeight-this.radius) || (this.y-this.radius<0)){
            this.dy = -this.dy;
            
        }

        if((Math.abs(mouse.x-this.x)<50) && (Math.abs(mouse.y-this.y)<50)){
            if(this.radius<40){
                this.radius += 1;
            }

            
        }

        else if(this.radius>2){
            this.radius -= 1;

        }
        
        this.draw()
        this.x = this.x+this.dx;
        this.y = this.y+this.dy;

        
    }

}







const circleArr = []
let radius = 2;


for(let i=0;i<1000;i++){
    let x = Math.random()*(innerWidth-2*radius)+radius;
    let dx = (Math.random()-0.5)*8;
    let dy = (Math.random()-0.5)*8
    
    let y =  Math.random()*(innerHeight-2*radius)+radius;
    
    
    


    circleArr.push(new Circle(x,y,dx,dy,radius))

}


function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    for(let i = 0;i<1000;i++){
        circleArr[i].update()
    }

   
    
    

   
}


animate()





