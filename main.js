var canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
nasa_array=["mars.jpg", "https://www.worldatlas.com/upload/bb/c3/32/shutterstock-1041249343.jpg",
"https://assets.nautil.us/sites/3/nautilus/aLIKjk3b-Courage_HERO.png?q=65&auto=format&w=1600&ar=16:9&fit=crop",
"https://cdn1.epicgames.com/ue/product/Screenshot/GigaMars00007Layer%201-1920x1080-f4b1ab3ad4f27c50e98dd7f86e65f6c8.jpg?resize=1&w=1920",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT441C96Mnm7XIXwTifl5Hbf1yD36I8-0M-Pg&usqp=CAU"]
var number=Math.floor(Math.random()*4)
var backroundimage=nasa_array[number]
var imgr="rover.png"
roverwidth =100
roverheight=100
roverx=10
rovery=10
function add(){
    backroundimagetag=new Image()
    backroundimagetag.onload=uploadbackround
    backroundimagetag.src=backroundimage
    roverimagetag=new Image()
    roverimagetag.onload=uploadrover
    roverimagetag.src=imgr
}
function uploadbackround(){
    ctx.drawImage(backroundimagetag,0,0,canvas.width,canvas.height)
}
function uploadrover(){
    ctx.drawImage(roverimagetag,roverx,rovery,roverwidth,roverheight)
}
window.addEventListener("keydown", my_keydown)
function my_keydown(e){
    var keypressed=e.keyCode
    console.log(keypressed)
    if(keypressed=="87"){
        up()
    }
    if(keypressed=="65"){
        left()
    }
    if(keypressed=="83"){
        down()
    }
    if(keypressed=="68"){
        right()
    }
}
function up(){
    if (rovery>0) {
        rovery=rovery-10
    uploadbackround()
    uploadrover()
    }
    
}
function down(){
   if (rovery<600) {
    rovery=rovery+10
    uploadbackround()
    uploadrover()
   } 
}
function left(){
    if (roverx>0) {
        roverx=roverx-10
        uploadbackround()
        uploadrover()
    }
}
function right(){
    if (roverx<800) {
        roverx=roverx+10
        uploadbackround()
        uploadrover()
    }
}