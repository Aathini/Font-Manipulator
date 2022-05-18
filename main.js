difference = 0;
rightWristX = 0;
leftWristX = 0;
function setup() {
    canvas = createCanvas(300,300)
    canvas.position(550,200);

    video = createCapture(VIDEO);
    video.position(200,200);
    video.size(300,300);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}
function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    }

}
function modelLoaded() {
    console.log('PoseNet has been Initialized'); }

function draw() {
    background("#defffe");

    textSize(difference);
    fill("#FFE787");
    stroke("red");
    text('Aathini', 50, 400);
}