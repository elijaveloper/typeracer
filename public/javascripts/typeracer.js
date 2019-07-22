const ctx = document.getElementById("backdrop").getContext("2d");
const avCtx = document.createElement("canvas").getContext("2d");
var images = {
    backdrop: new Image(),
    road: new Image(),
    guard: new Image()
}

images.backdrop.src = "images/backdrop.jpg";
images.road.src = "images/road.jpg";
images.guard.src = "images/guard.jpg";

var avatars = {
    boy: {
        head: new Image(),
        body: new Image(),
        w1: new Image()
    },
    girl: {
        head: new Image(),
        body: new Image(),
        w1: new Image()
    }
}

avatars.boy.head.src = "images/avatars/boy/head.png";
avatars.boy.body.src = "images/avatars/boy/body.png";
avatars.boy.w1.src = "images/avatars/boy/w1.png";
avatars.girl.head.src = "images/avatars/girl/head.png";
avatars.girl.body.src = "images/avatars/girl/body.png";
avatars.girl.w1.src = "images/avatars/girl/w1.png";

var avatar = avatars.boy;

var travel = {
    x: 0,
    x2: 1280,
    move: function(val){
        this.x = this.x < -this.limit ? 0 : this.x -= val;
        this.x2 = this.x2 < 0 ? this.limit : this.x2 -= val; 
    },
    limit: 1280
}

var speed = 10;

setInterval(function(){
    ctx.drawImage(images.backdrop,0,0);
    ctx.drawImage(images.guard,travel.x,445);
    ctx.drawImage(images.guard,travel.x2,445);
    ctx.drawImage(images.road,travel.x,522);
    ctx.drawImage(images.road,travel.x2,522);
    ctx.drawImage(avatar.head,0,0,150,150);
    travel.move(speed);
},1000/30);
