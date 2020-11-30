class base{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        Matter.World.add(world,this.body)
    }
    display(){
       rectMode(CENTER);
       x=this.body.position.x;
       y=this.body.position.y; 
       rect(this.body.position.x,this.body.position.y,this.width,this.height)

    }
}