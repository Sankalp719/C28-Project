class Box{
    constructor(x,y,width,height){
        var options = {
         // isStatic :true,
             restitution : 0.2,
             friction : 0.2,
             density : 0.8
            
          
          
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width = width
        this.height = height
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        rectMode(CENTER)
        fill("white")
        rect(pos.x,pos.y,this.width,this.height)
    }
}