const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg = "Images/sunset12.png";

var hour;

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
}

function draw(){

    if(backgroundImg)
       background(backgroundImg);    

    Engine.update(engine);

    fill('black');
    textSize(30);
    if(hour>=12){
        text("Time : "+ hour%12 + " PM", 50,100);
    }else if(hour==0){
        text("Time : 12 AM",100,100);
    }else{ 
        text("Time : "+ hour%12 + " AM", 50,100); 
    }
}

async function getBackgroundImg(){

    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;

    hour = datetime.slice(11,13);

    if(hour>=23 && hour<=04){
        debugger;
        bg = "Images/sunrise12.png"; 
    }else if(hour>=04 && hour<=05){
        debugger;
        bg = "Images/sunrise1.png";
    }else if(hour>=05 && hour<=07){
        debugger;
        bg = "Images/sunrise2.png";
    }else if(hour>=07 && hour<=09){
        debugger;
        bg = "Images/sunrise3.png";
    }else if(hour>=09 && hour<=13){
        debugger;
        bg = "Images/sunrise4.png";
    }else if(hour>=13 && hour<=16){
        debugger;
        bg = "Images/sunrise5.png";
    }else if(hour>=16 && hour<=17){
        debugger;
        bg = "Images/sunrise6.png";
    }else if(hour>=17 && hour<=18){
        debugger;
        bg = "Images/sunset7.png";
    }else if(hour>=18 && hour<=20){
        debugger;
        bg = "Images/sunset8.png";
    }else if(hour>=18 && hour<=20){
        debugger;
        bg = "Images/sunset8.png";
    }else if(hour>=20 && hour<=21){
        debugger;
        bg = "Images/sunset10.png";
    }else{
        debugger;
        bg = "Images/sunset12.png";
    }
    
    backgroundImg = loadImage(bg);
}