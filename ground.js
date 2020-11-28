class Ground{
    constructor(
        x,y,width,height
    ){
        this.width = width;
        this.height = height;

        this.bodies = Bodies.rectangle(x,y,width,height,{
            isStatic: true
        });
        World.add(world, this.bodies);
    }
    display(){
        var pos = this.bodies.position;
        fill("brown");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }

}