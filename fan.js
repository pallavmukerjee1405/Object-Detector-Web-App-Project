img="";
status_quo="";

function preload(){
    img=loadImage('img1.jpg');
}

function setup(){
    canvas=createCanvas(640,420);
    canvas.center();

    object_detector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Detecting Objects";
}

function modelLoaded(){
    console.log('Model Loaded!');
    status_quo=true;
    object_detector.detect(img,gotResult);
}

function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
}