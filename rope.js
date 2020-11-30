class rope{
    constructor(x,y){
        this.width=5;
        this.height=150;
        this.body=Bodies.rectangle(x,y,width,height,options)
    }

    display(){
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,width,height)
    }
}