img="";
status="";
cocosd=[]

function preload(){
    img=loadImage("OIP.jpg")
}

function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    
    objectDetector=ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("estatus").innerHTML="status:detectando objetos"
}

function modelLoaded(){
    console.log("Todo listo");
    status=true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error,results){
    if(error){
     console.log(error)
}
console.log(results);
cocosd=results;
}