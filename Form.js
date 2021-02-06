class Form{
    constructor(){
        this.input=createInput("NAME")
        this.button=createButton("PLAY")
        this.greeting=createElement("h3")
    }
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }
    display(){
        var title=createElement("h1")
        title.html("HORSE RIDING")
        title.position(displayWidth/2-150,displayHeight/100)
        this.input.position(displayWidth/2-125,displayHeight/2-80)
        this.button.position(displayWidth/2,displayHeight/2)
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name=this.input.value();
            playerCount+=1
            player.index=playerCount;
            player.update()
            player.updateCount(playerCount)
            this.greeting.html("HELLO "+player.name)
            this.greeting.position(displayWidth/3,displayHeight/4)
        });
    }
}