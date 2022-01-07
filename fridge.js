img="";
status_quo="";
objects=[];

function preload(){
    img=loadImage('img5.jpg');
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
        for(i=0;i<objects.length;i++){
            document.getElementById("status").innerHTML="There are " + objects.length + " big objects in the image from which cocossd model has detected" + objects.length + " objects";

            percent=floor(objects[i].confidence*100);
            fill('#FF0000');
            text(objects[i].label + " " + percent + "%" + objects[i].x,objects[i].y);
            noFill();
            stroke('#FF0000');
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);

        }
    }
}