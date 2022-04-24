object_detector="";
img="";
status_quo="";
objects=[];

function preload(){
    img=loadImage('img4.jpg');
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
        objects=results;
    }
}

function draw(){
    if(status_quo != ""){
        image(img,0,0,640,420);
        for(i=0;i<objects.length;i++){
            document.getElementById("status").innerHTML="Status : Objects Detected";

            percent=floor(objects[i].confidence*100);
            fill(255,0,0);
            text(objects[i].label + " " + percent + "%" + objects[i].x,objects[i].y);
            noFill();
            stroke(255,0,0);
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);

        }
    }
}