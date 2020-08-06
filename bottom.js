class BOTTOM{
    constructor(x,y,width,heigth){
    
        this.body = Bodies.rectangle(x,y,200,20)
        this.width = 20;
        this.heigth = 200;
    }
display(){

    var pos = this.body.position;
    push();
    rectMode(center);
    fill("red");
}
    
}