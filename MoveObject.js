
function Cattoon(image,top,left,size,speed) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = speed;
    this.getPenCattoon = function () {
      return  '<img width = "'+ this.size +'"'+'height = "' +this.size+ '"' + ' src="'+ this.image + '"' +
        'style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;"/>'
    };
    this.moveRight = function(){
        this.left += this.speed;
        console.log('ok: ' + this.left);
    };
    this.moveDown = function () {
        this.top += this.speed;
    };
    this.moveLeft = function () {
        this.left += - this.speed;
    };
    this.moveTop = function () {
        this.top += - this.speed;
    }
}

let cattoon = new Cattoon('icon.jpg', 0,0 , 60,2);
function start(){
    if(cattoon.left < window.innerWidth - cattoon.size && cattoon.top ===0){
        cattoon.moveRight();
    }
    if(cattoon.left >=  window.innerWidth - cattoon.size && cattoon.top < window.innerHeight - cattoon.size ){
        cattoon.moveDown();
    }
    if( cattoon.top >= window.innerHeight - cattoon.size ){
        cattoon.moveLeft();
    }
    if(cattoon.left < 0){
        cattoon.moveTop();
    }
    document.getElementById('Move').innerHTML = cattoon.getPenCattoon();

}
setInterval(start,10);