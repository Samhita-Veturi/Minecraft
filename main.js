var canvas = new fabric.Canvas("myCanvas");

var Bl_W = 30;
var Bl_H = 30;

var Ply_X = 10;
var Ply_Y = 10;

var Ply_Obj = "";
var Bl_Img = "";

function Ply_Img(){
    fabric.Image.fromURL("player.png", function(Img){
        Ply_Obj = Img;
        Ply_Obj.scaleToWidth(150);
        Ply_Obj.scaleToHeight(140);
        Ply_Obj.set({
            top: Ply_Y, left: Ply_X
        });
        canvas.add(Ply_Obj);
    });
}
function New_Img(Get_Img){
    fabric.Image.fromURL(Get_Img, function(Img){
        Bl_Img = Img;
        Bl_Img.scaleToWidth(Bl_W);
        Bl_Img.scaleToHeight(Bl_H);
        Bl_Img.set({
            top: Ply_Y,
            left: Ply_X
        });
        canvas.add(Bl_Img);
    });
}

window.addEventListener("keydown", My_Keys);

function My_Keys(e){
    keypressed = e.keyCode;
    if(keypressed=='84'){

        New_Img("trunk.jpg");
        console.log("Trunk = t");
    }
    if(keypressed=='68'){
        New_Img("dark_green.png");
        console.log("Dark Green = d");
    }
    if(keypressed=='76'){
        New_Img("light_green.png");
        console.log("Light Green = l");
    }
    if(keypressed=='71'){
        New_Img("ground.png");
        console.log("Ground = g");
    }
    if(keypressed=='87'){
        New_Img("wall.jpg");
        console.log("Wall = w");
    }
    if(keypressed=='89'){
        New_Img("yellow_wall.png");
        console.log("Yellow Wall = y");
    }
    if(keypressed=='82'){
        New_Img("roof.jpg");
        console.log("Roof = r");
    }
    if(keypressed=='67'){
        New_Img("cloud.jpg");
        console.log("Cloud = c");
    }
    if(keypressed=='85'){
        New_Img("unique.png");
        console.log("Unique Block = u");
    }
    if (keypressed== "38"){
        up();
        console.log("Up"); 
        Ply_Img()     
    }
    if (keypressed== "37"){
     left();
     console.log("Left"); 
     Ply_Img()     
    }
    if (keypressed== "39"){
        right();
        console.log("Right"); 
        Ply_Img()     
    }
    if (keypressed== "40"){
        down();
        console.log("Down"); 
        Ply_Img()     
    }
    if(e.shiftKey == true && keypressed== "80"){
        console.log("P and shift key pressed");
        Bl_W = Bl_W + 10;
        Bl_H = Bl_H + 10;
        document.getElementById("C_W").innerHTML = Bl_W;
        document.getElementById("C_H").innerHTML = Bl_H;
    }
    if(e.shiftKey == true && keypressed== "77"){
        console.log("M and shift key pressed");
        Bl_W = Bl_W - 10;
        Bl_H = Bl_H - 10;
        document.getElementById("C_W").innerHTML = Bl_W;
        document.getElementById("C_H").innerHTML = Bl_H;
    }
}

function up(){
    if(Ply_Y >= 0){
        Ply_Y = Ply_Y - Bl_H;
        console.log("Block Image Height = " + Bl_H);
        console.log("X = " + Ply_X + " Y = " + Ply_Y);
        canvas.remove(Ply_Obj);
    }
}

function down(){
    if(Ply_Y <= 600){
        Ply_Y = Ply_Y + Bl_H;
        console.log("Block Image Height = " + Bl_H);
        console.log("X = " + Ply_X + " Y = " + Ply_Y);
        canvas.remove(Ply_Obj);
    }
}

function left(){
    if(Ply_X >= 0){
        Ply_X = Ply_X - Bl_W;
        console.log("Block Image Width = " + Bl_W);
        console.log("X = " + Ply_X + " Y = " + Ply_Y);
        canvas.remove(Ply_Obj);
    }
}

function right(){
    if(Ply_X <= 600){
        Ply_X = Ply_X + Bl_W;
        console.log("Block Image Width = " + Bl_W);
        console.log("X = " + Ply_X + " Y = " + Ply_Y);
        canvas.remove(Ply_Obj);
    }
}
