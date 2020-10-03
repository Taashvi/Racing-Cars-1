canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

var background_img="r2YRW.png";

var car1_width=90;
var car1_height=50;
var car1_img="car1.png";
var car1_X=20;
var car1_Y=110;

var car2_width=90;
var car2_height=50;
var car2_img="car2.png";
var car2_X=20;
var car2_Y=130;

function add(){
    background_img_tag=new Image();
    background_img_tag.onload=uploadBackground;
    background_img_tag.src=background_img;

    car1_img_tag=new Image();
    car1_img_tag.onload=uploadCar1();
    car1_img_tag.src=car1_img;

    car2_img_tag=new Image();
    car2_img_tag.onload=uploadCar2();
    car2_img_tag.src=car2_img;
}

function uploadBackground(){
    ctx.drawImage(background_img_tag,0,0,canvas.width, canvas.height);
}

function uploadCar2(){
    ctx.drawImage(car2_img_tag,car2_X,car2_Y,car2_width, car2_height);
}

function uploadCar1(){
    ctx.drawImage(car1_img_tag,car1_X,car1_Y,car1_width, car1_height);
}



window.addEventListener("keydown",myKeyDown);

function myKeyDown(e){
    var keyPressed=e.keyCode;
    console.log(keyPressed);

    if(keyPressed=='38'){
        car1_up();
        console.log("Up Arrow Key");
    }

    if(keyPressed=='40'){
        car1_down();
        console.log("Down Arrow Key");
    }

    if(keyPressed=='37'){
        car1_left();
        console.log("Left Arrow Key");
    }

    if(keyPressed=='39'){
        car1_right();
        console.log("Right Arrow Key");
    }

//Car2
    if(keyPressed=='87'){
        car2_up();
        console.log("Up Arrow Key- W");
    }

    if(keyPressed=='83'){
        car2_down();
        console.log("Down Arrow Key- S");
    }

    if(keyPressed=='65'){
        car2_left();
        console.log("Left Arrow Key- A");
    }

    if(keyPressed=='68'){
        car2_right();
        console.log("Right Arrow Key- D");
    }
}


function car1_up(){
    if(car1_Y>=0){
        car1_Y=car1_Y-10;
        uploadBackground();
        uploadCar1();
    }
}

function car1_down(){
    if(car1_Y<=400){
        car1_Y=car1_Y+10;
        uploadBackground();
        uploadCar1();
    }
}

function car1_left(){
    if(car1_X>=0){
        car1_X=car1_X-10;
        uploadBackground();
        uploadCar1();
    }
}

function car1_right(){
    if(car1_X<=630){
        car1_X=car1_X+10;
        uploadBackground();
        uploadCar1();
    }
}
//Car 2
function car2_up(){
    if(car2_Y>=0){
        car2_Y=car2_Y-10;
        uploadBackground();
        uploadCar2();
    }
}

function car2_down(){
    if(car2_Y<=400){
        car2_Y=car2_Y+10;
        uploadBackground();
        uploadCar2();
    }
}

function car2_left(){
    if(car2_X>=0){
        car2_X=car2_X-10;
        uploadBackground();
        uploadCar2();
    }
}

function car2_right(){
    if(car2_X<=630){
        car2_X=car2_X+10;
        uploadBackground();
        uploadCar2();
    }
}